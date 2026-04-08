/* ============================================================
   CrunchyMirror — app.js
   ============================================================ */

"use strict";

/* ── STATE ── */
const STATE = {
  page: 'home',
  genre: 'All',
  tab: 'popular',
  heroIdx: 0,
  heroTimer: null,
  myList: JSON.parse(localStorage.getItem('cm_mylist') || '[]'),
  watchHistory: JSON.parse(localStorage.getItem('cm_history') || '[]'),
  playbackProgress: JSON.parse(localStorage.getItem('cm_progress') || '{}'),
  modal: { animeIdx: 0, season: 0, ep: 1, playing: false, pVal: 0, interval: null, resumeTime: 0, expandedEpisodes: false },
};

const HERO_ITEMS = [0, 2, 3, 4, 8]; // indices of featured anime

/* ── DOM REFERENCES ── */
const $ = id => document.getElementById(id);

const progressKey = (animeIdx, season, ep) => `${animeIdx}_${season}_${ep}`;
function getSavedTime(animeIdx, season, ep) {
  return STATE.playbackProgress[progressKey(animeIdx, season, ep)] || 0;
}
function saveProgressTime(animeIdx, season, ep, time) {
  STATE.playbackProgress[progressKey(animeIdx, season, ep)] = time;
  localStorage.setItem('cm_progress', JSON.stringify(STATE.playbackProgress));
}
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/* ── INIT ── */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    $('pageLoader').classList.add('hidden');
    initNavbar();
    initHero();
    renderAllSections();
    initSearch();
    bindNavLinks();
  }, 1800);
});

/* ── NAVBAR ── */
function initNavbar() {
  window.addEventListener('scroll', () => {
    $('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
  $('navbar').classList.toggle('scrolled', window.scrollY > 20);
}

function bindNavLinks() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.page);
    });
  });
}

function navigateTo(page) {
  STATE.page = page;
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const section = $('page-' + page);
  if (section) {
    section.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  // Update mobile page selector
  const selector = $('pageSelector');
  if (selector) selector.value = page;
  if (page === 'mylist') renderMyList();
  if (page === 'history') renderHistory();
}

/* ── HERO ── */
function initHero() {
  renderHero(STATE.heroIdx);
  renderHeroDots();
  STATE.heroTimer = setInterval(() => {
    STATE.heroIdx = (STATE.heroIdx + 1) % HERO_ITEMS.length;
    renderHero(STATE.heroIdx);
    renderHeroDots();
  }, 6000);
}

function renderHero(idx) {
  const a = ANIME_DB[HERO_ITEMS[idx]];
  const bg = $('heroBg');
  bg.style.backgroundImage = `url(${a.image})`;

  $('heroTitle').innerHTML = a.title.toUpperCase().replace(' ', '<br><span>').replace(':', '</span>') + (a.title.includes(':') ? '' : '</span>');
  // simpler approach
  const parts = a.title.split(':');
  if (parts.length > 1) {
    $('heroTitle').innerHTML = `${parts[0].trim().toUpperCase()}<br><span>${parts.slice(1).join(':').trim().toUpperCase()}</span>`;
  } else {
    const words = a.title.split(' ');
    const mid = Math.ceil(words.length / 2);
    $('heroTitle').innerHTML = `${words.slice(0, mid).join(' ').toUpperCase()}<br><span>${words.slice(mid).join(' ').toUpperCase()}</span>`;
  }

  $('heroRating').textContent = '★ ' + a.rating;
  $('heroYear').textContent = a.year;
  $('heroEp').textContent = `S${a.seasons.length} • EP ${a.seasons.at(-1).eps}`;
  $('heroGenre').textContent = a.genre;
  $('heroDesc').textContent = a.desc;
  $('heroBtnPlay').onclick = () => openModal(HERO_ITEMS[idx]);
  $('heroBtnList').onclick = () => toggleMyList(HERO_ITEMS[idx]);
}

function renderHeroDots() {
  const wrap = $('heroDots');
  wrap.innerHTML = HERO_ITEMS.map((_, i) =>
    `<div class="hero-dot ${i === STATE.heroIdx ? 'active' : ''}" onclick="jumpHero(${i})"></div>`
  ).join('');
}

window.jumpHero = function(i) {
  clearInterval(STATE.heroTimer);
  STATE.heroIdx = i;
  renderHero(i);
  renderHeroDots();
  STATE.heroTimer = setInterval(() => {
    STATE.heroIdx = (STATE.heroIdx + 1) % HERO_ITEMS.length;
    renderHero(STATE.heroIdx);
    renderHeroDots();
  }, 6000);
};

/* ── RENDER ALL HOME SECTIONS ── */
function renderAllSections() {
  renderContinueWatching();
  renderMainGrid();
  renderTop10();
}

/* ── CONTINUE WATCHING ── */
function renderContinueWatching() {
  const items = ANIME_DB.filter(a => a.prog > 0).slice(0, 8);
  $('continueRow').innerHTML = items.map(a => {
    const idx = ANIME_DB.indexOf(a);
    return `<div class="cw-card" onclick="openModal(${idx})">
      <div class="cw-thumb">
        <img src="${a.image}" alt="${a.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/210x120/1c1c2e/ff6b35?text=No+Image'">
        <span class="cw-ep-lbl">EP ${Math.ceil(a.seasons[0].eps * a.prog / 100)}</span>
      </div>
      <div class="cw-info">
        <div class="cw-title">${a.title}</div>
        <div class="cw-sub">${a.prog}% watched • ${a.genre}</div>
        <div class="cw-prog"><div class="cw-prog-fill" style="width:${a.prog}%"></div></div>
      </div>
    </div>`;
  }).join('');
}

/* ── MAIN GRID ── */
function renderMainGrid() {
  let data = [...ANIME_DB];
  if (STATE.genre !== 'All') data = data.filter(a => a.genre === STATE.genre);
  if (STATE.tab === 'top') data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  else if (STATE.tab === 'new') data = [...data.filter(a => a.badge === 'NEW'), ...data.filter(a => a.badge !== 'NEW')];
  else if (STATE.tab === 'seasonal') data = data.filter(a => a.year >= 2023);
  $('mainGrid').innerHTML = data.map(a => buildCard(a, ANIME_DB.indexOf(a))).join('');
}

function buildCard(a, idx) {
  return `<div class="anime-card fade-up" onclick="openModal(${idx})">
    <div class="card-thumb">
      <img class="card-img" src="${a.image}" alt="${a.title}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/175x240/151522/ff6b35?text=${encodeURIComponent(a.title)}'">
      <div class="card-ov">
        <div class="play-circle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
        </div>
      </div>
      ${a.badge ? `<span class="card-badge">${a.badge}</span>` : ''}
      <span class="card-ep">EP ${a.seasons.at(-1).eps}</span>
      ${a.prog > 0 ? `<div class="card-prog"><div class="card-prog-fill" style="width:${a.prog}%"></div></div>` : ''}
    </div>
    <div class="card-info">
      <div class="card-title">${a.title}</div>
      <div class="card-meta">
        <span class="card-rating">★ ${a.rating}</span>
        <span class="card-gtag">${a.genre}</span>
      </div>
    </div>
  </div>`;
}

/* ── TRENDING GRID ── */
function renderTrendingGrid() {
  let data = [...ANIME_DB].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  if (STATE.genre !== 'All') data = data.filter(a => a.genre === STATE.genre);
  $('trendingGrid').innerHTML = data.map(a => buildCard(a, ANIME_DB.indexOf(a))).join('');
}

/* ── TOP 10 ── */
function renderTop10() {
  const sorted = [...ANIME_DB].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 10);
  $('top10Grid').innerHTML = sorted.map((a, rank) => {
    const idx = ANIME_DB.indexOf(a);
    return `<div class="top10-card" onclick="openModal(${idx})">
      <div class="top10-rank">${rank + 1}</div>
      <img class="top10-img" src="${a.image}" alt="${a.title}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/80x110/151522/ff6b35?text=${rank+1}'">
      <div class="top10-info">
        <div class="top10-title">${a.title}</div>
        <div class="top10-meta"><span class="top10-rating">★ ${a.rating}</span> • ${a.year}</div>
      </div>
    </div>`;
  }).join('');
}

/* ── GENRE FILTER ── */
window.filterGenre = function(genre, el) {
  STATE.genre = genre;
  document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  if (STATE.page === 'home') {
    renderMainGrid();
  } else if (STATE.page === 'trending') {
    renderTrendingGrid();
  }
};

window.filterGenreByName = function(genre) {
  STATE.genre = genre;
  document.querySelectorAll('.genre-pill').forEach(p => {
    p.classList.toggle('active', p.textContent.trim().includes(genre));
  });
  renderMainGrid();
  $('mainGrid').scrollIntoView({ behavior: 'smooth' });
};

/* ── TABS ── */
window.switchTab = function(el, type) {
  STATE.tab = type;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderMainGrid();
};

window.switchTabByName = function(type) {
  STATE.tab = type;
  const tabs = document.querySelectorAll('.tab');
  const map = { popular: 0, new: 1, top: 2, seasonal: 3 };
  if (tabs[map[type]]) switchTab(tabs[map[type]], type);
};

/* ── SEARCH ── */
function initSearch() {
  const inp = $('searchInput');
  const res = $('searchResults');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { res.classList.remove('visible'); return; }
    const matches = ANIME_DB.filter(a =>
      a.title.toLowerCase().includes(q) || a.genre.toLowerCase().includes(q)
    ).slice(0, 7);
    if (!matches.length) { res.classList.remove('visible'); return; }
    res.innerHTML = matches.map(a => {
      const idx = ANIME_DB.indexOf(a);
      return `<div class="sr-item" onclick="openModal(${idx});this.closest('#searchResults').classList.remove('visible');document.getElementById('searchInput').value=''">
        <img class="sr-thumb" src="${a.image}" alt="${a.title}" onerror="this.src='https://via.placeholder.com/44x60/151522/ff6b35?text=?'">
        <div class="sr-info">
          <div class="sr-title">${a.title}</div>
          <div class="sr-meta">★ ${a.rating} • ${a.genre} • ${a.year}</div>
        </div>
      </div>`;
    }).join('');
    res.classList.add('visible');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) res.classList.remove('visible');
  });
}

/* ── MY LIST ── */
window.toggleMyList = function(idx) {
  const id = ANIME_DB[idx].id;
  const pos = STATE.myList.indexOf(id);
  if (pos === -1) {
    STATE.myList.push(id);
    showToast(`✅ "${ANIME_DB[idx].title}" My List mein add!`);
  } else {
    STATE.myList.splice(pos, 1);
    showToast(`❌ "${ANIME_DB[idx].title}" My List se remove!`);
  }
  localStorage.setItem('cm_mylist', JSON.stringify(STATE.myList));
  if (STATE.page === 'mylist') renderMyList();
};

function renderMyList() {
  const section = $('myListGrid');
  if (!STATE.myList.length) {
    section.innerHTML = `<div class="mylist-empty"><h3>List Khaali Hai</h3><p>Koi bhi anime card pe ＋ click karo — yahan save ho jaayega.</p></div>`;
    return;
  }
  const items = ANIME_DB.filter(a => STATE.myList.includes(a.id));
  section.innerHTML = items.map(a => buildCard(a, ANIME_DB.indexOf(a))).join('');
}

/* ── HISTORY ── */
function addHistory(idx) {
  const id = ANIME_DB[idx].id;
  STATE.watchHistory = STATE.watchHistory.filter(h => h.id !== id);
  STATE.watchHistory.unshift({ id, ep: STATE.modal.ep, season: STATE.modal.season, ts: Date.now() });
  if (STATE.watchHistory.length > 50) STATE.watchHistory.length = 50;
  localStorage.setItem('cm_history', JSON.stringify(STATE.watchHistory));
}

function renderHistory() {
  const wrap = $('historyList');
  if (!STATE.watchHistory.length) {
    wrap.innerHTML = `<div class="mylist-empty"><h3>Koi History Nahi</h3><p>Koi anime watch karo — yahan appear hoga.</p></div>`;
    return;
  }
  wrap.innerHTML = STATE.watchHistory.slice(0, 20).map(h => {
    const a = ANIME_DB.find(x => x.id === h.id);
    if (!a) return '';
    const idx = ANIME_DB.indexOf(a);
    return `<div class="history-item" onclick="openModal(${idx})">
      <img class="history-thumb" src="${a.image}" alt="${a.title}" onerror="this.style.display='none'">
      <div class="history-info">
        <div class="history-title">${a.title}</div>
        <div class="history-sub">Season ${h.season + 1} • Episode ${h.ep} • ${timeAgo(h.ts)}</div>
        <div class="history-prog"><div class="history-prog-fill" style="width:${a.prog || 10}%"></div></div>
      </div>
    </div>`;
  }).join('');
}

function timeAgo(ts) {
  const diff = (Date.now() - ts) / 1000;
  if (diff < 60) return 'abhi abhi';
  if (diff < 3600) return `${Math.floor(diff / 60)} min pehle`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} ghante pehle`;
  return `${Math.floor(diff / 86400)} din pehle`;
}

/* ── MODAL ── */
window.openModal = function(idx) {
  const m = STATE.modal;
  m.animeIdx = idx; m.season = 0; m.ep = 1; m.pVal = 0; m.playing = false;
  m.expandedEpisodes = false;
  clearInterval(m.interval);
  renderModal();
  $('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  addHistory(idx);
};

let hlsPlayer = null;

function getEpisodeHls(season, ep) {
  return season?.episodes?.find(e => e.ep === ep)?.hls || '';
}

function setVideoSource(url) {
  const video = $('videoPlayer');
  const thumb = $('playerThumb');
  if (hlsPlayer) {
    hlsPlayer.destroy();
    hlsPlayer = null;
  }
  if (!url) {
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.style.display = 'none';
    thumb.style.display = 'block';
    return;
  }

  video.style.display = 'block';
  thumb.style.display = 'none';

  const handleResume = () => {
    const resumeTime = STATE.modal.resumeTime || getSavedTime(STATE.modal.animeIdx, STATE.modal.season, STATE.modal.ep);
    if (resumeTime > 2 && resumeTime < video.duration - 2) {
      video.currentTime = resumeTime;
    }
    updateVideoProgress();
  };

  if (window.Hls && Hls.isSupported()) {
    hlsPlayer = new Hls();
    hlsPlayer.loadSource(url);
    hlsPlayer.attachMedia(video);
    video.addEventListener('loadedmetadata', handleResume, { once: true });
  } else {
    video.src = url;
    video.addEventListener('loadedmetadata', handleResume, { once: true });
  }
  video.load();
}

function updateVideoProgress() {
  const video = $('videoPlayer');
  if (!video || video.style.display === 'none' || !video.duration) return;
  const current = Math.floor(video.currentTime);
  const total = Math.floor(video.duration);
  const mins = Math.floor(current / 60);
  const secs = current % 60;
  $('progBar').style.width = total ? `${(current / total) * 100}%` : '0%';
  $('timeLabel').textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')} / ${String(Math.floor(total / 60)).padStart(2,'0')}:${String(total % 60).padStart(2,'0')}`;
  if (current > 1) {
    saveProgressTime(STATE.modal.animeIdx, STATE.modal.season, STATE.modal.ep, current);
  }
}

function syncPlayOverlay() {
  const video = $('videoPlayer');
  const overlay = document.querySelector('.play-big');
  if (!overlay) return;
  overlay.style.display = video && !video.paused && (video.src || hlsPlayer) ? 'none' : 'flex';
}

const videoPlayerEl = $('videoPlayer');
if (videoPlayerEl) {
  videoPlayerEl.volume = 0.8; // Default 80% volume
  videoPlayerEl.addEventListener('loadedmetadata', updateVideoProgress);
  videoPlayerEl.addEventListener('timeupdate', updateVideoProgress);
  videoPlayerEl.addEventListener('ended', () => {
    $('ppBtn').textContent = '▶';
    STATE.modal.playing = false;
    syncPlayOverlay();
    showToast('✅ Video khatam! Next chalao?');
  });
}

function renderModal() {
  const m = STATE.modal;
  const a = ANIME_DB[m.animeIdx];
  const season = a.seasons[m.season];
  const hlsUrl = getEpisodeHls(season, m.ep);
  const resumeTime = getSavedTime(m.animeIdx, m.season, m.ep);
  m.resumeTime = resumeTime;

  // Player bg
  $('playerBg').style.backgroundImage = `url(${a.image})`;
  $('playerThumb').src = a.image;
  $('nowText').textContent = resumeTime > 2
    ? `Resume from ${formatTime(resumeTime)} — ${a.title}`
    : `${a.title} — S${m.season + 1} E${m.ep} play karne ke liye click karo`;
  $('progBar').style.width = '0%';
  setVideoSource(hlsUrl);
  $('timeLabel').textContent = '00:00 / 24:00';
  $('ppBtn').textContent = '▶';
  m.pVal = 0; m.playing = false;
  clearInterval(m.interval);
  syncPlayOverlay();

  // Info
  $('mTitle').textContent = a.title;
  $('mRating').textContent = a.rating;
  $('mYear').textContent = a.year;
  $('mGenre').textContent = a.genre;
  $('mStudio').textContent = a.studio;
  $('mStatus').textContent = a.status;
  $('mDesc').textContent = a.desc;

  // Season tabs
  $('seasonTabs').innerHTML = a.seasons.map((s, i) =>
    `<div class="season-tab ${i === m.season ? 'active' : ''}" onclick="selectSeason(${i})">Season ${s.season}</div>`
  ).join('');

  // Episode list
  renderEpList();
}

function renderEpList() {
  const m = STATE.modal;
  const a = ANIME_DB[m.animeIdx];
  const season = a.seasons[m.season];
  const showAll = STATE.modal.expandedEpisodes === true;
  const show = showAll ? season.eps : Math.min(season.eps, 20);
  
  $('epList').innerHTML =
    Array.from({ length: show }, (_, j) =>
      `<div class="ep-item ${j === m.ep - 1 ? 'active' : ''}" onclick="selectEp(${j + 1},this)">EP ${j + 1}</div>`
    ).join('') +
    (season.eps > 20 && !showAll
      ? `<div class="ep-more-btn" onclick="expandEpisodes()">+${season.eps - 20} more ▸</div>`
      : '');
}

window.expandEpisodes = function() {
  STATE.modal.expandedEpisodes = true;
  renderEpList();
  showToast(`📺 Sare episodes load ho gaye!`);
};

window.selectSeason = function(si) {
  STATE.modal.season = si;
  STATE.modal.ep = 1;
  STATE.modal.pVal = 0;
  STATE.modal.playing = false;
  STATE.modal.expandedEpisodes = false;
  clearInterval(STATE.modal.interval);
  document.querySelectorAll('.season-tab').forEach((t, i) => t.classList.toggle('active', i === si));
  $('nowText').textContent = `Season ${si + 1} — Episode 1 ready hai`;
  $('progBar').style.width = '0%';
  $('timeLabel').textContent = '00:00 / 24:00';
  $('ppBtn').textContent = '▶';
  renderEpList();

  const season = ANIME_DB[STATE.modal.animeIdx].seasons[STATE.modal.season];
  const hlsUrl = getEpisodeHls(season, STATE.modal.ep);
  const resumeTime = getSavedTime(STATE.modal.animeIdx, STATE.modal.season, STATE.modal.ep);
  STATE.modal.resumeTime = resumeTime;
  if (resumeTime > 2) {
    $('nowText').textContent = `Resume from ${formatTime(resumeTime)} — Season ${si + 1} Episode 1`;
  }
  setVideoSource(hlsUrl);

  showToast(`📺 Season ${si + 1} select hua!`);
};

window.closeModal = function() {
  $('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(STATE.modal.interval);
  STATE.modal.playing = false;
  setVideoSource('');
};

window.closeOutside = function(e) {
  if (e.target.id === 'modalOverlay') closeModal();
};

window.toggleFullscreen = function() {
  const video = $('videoPlayer');
  if (!video) return;
  const doc = document;
  if (!doc.fullscreenElement) {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  } else {
    if (doc.exitFullscreen) doc.exitFullscreen();
    else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
    else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
    else if (doc.msExitFullscreen) doc.msExitFullscreen();
  }
};

window.togglePlay = function() {
  const m = STATE.modal;
  const btn = $('ppBtn');
  const video = $('videoPlayer');
  const isVideoVisible = video && video.style.display !== 'none' && (video.src || hlsPlayer);

  if (!isVideoVisible) {
    showToast('❌ Video source available nahi hai. Episode select karo.');
    return;
  }

  if (video.paused) {
    video.play().catch(() => {
      showToast('▶ Video play karne ke liye phir se click karo');
    });
    btn.textContent = '⏸';
    $('nowText').textContent = `${ANIME_DB[m.animeIdx].title} — S${m.season + 1} E${m.ep} chal raha hai`;
    m.playing = true;
    showToast(`▶ Playing — ${ANIME_DB[m.animeIdx].title}`);
  } else {
    video.pause();
    btn.textContent = '▶';
    m.playing = false;
    showToast('⏸ Paused');
  }
  syncPlayOverlay();
};

window.seekVideo = function(e) {
  const video = $('videoPlayer');
  const r = e.currentTarget.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
  $('progBar').style.width = `${ratio * 100}%`;

  if (video && video.duration && !Number.isNaN(video.duration) && isFinite(video.duration)) {
    video.currentTime = ratio * video.duration;
    return;
  }

  STATE.modal.pVal = ratio * 100;
  const total = 24 * 60, cur = Math.floor(total * STATE.modal.pVal / 100);
  $('timeLabel').textContent = `${String(Math.floor(cur/60)).padStart(2,'0')}:${String(cur%60).padStart(2,'0')} / 24:00`;
};

window.selectEp = function(ep, el) {
  STATE.modal.ep = ep;
  STATE.modal.pVal = 0;
  STATE.modal.playing = false;
  clearInterval(STATE.modal.interval);
  document.querySelectorAll('.ep-item').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  $('progBar').style.width = '0%';
  $('timeLabel').textContent = '00:00 / 24:00';
  $('ppBtn').textContent = '▶';
  $('nowText').textContent = `${ANIME_DB[STATE.modal.animeIdx].title} — S${STATE.modal.season+1} E${ep} ready hai`;

  const season = ANIME_DB[STATE.modal.animeIdx].seasons[STATE.modal.season];
  const hlsUrl = getEpisodeHls(season, ep);
  const resumeTime = getSavedTime(STATE.modal.animeIdx, STATE.modal.season, ep);
  STATE.modal.resumeTime = resumeTime;
  if (resumeTime > 2) {
    $('nowText').textContent = `Resume from ${formatTime(resumeTime)} — Episode ${ep}`;
  }
  setVideoSource(hlsUrl);
  const video = $('videoPlayer');
  if (hlsUrl && video) {
    video.play().catch(() => {
      showToast('▶ Video autoplay nahi hua, dobara play karo.');
    });
    $('ppBtn').textContent = '⏸';
    STATE.modal.playing = true;
  }
  syncPlayOverlay();

  addHistory(STATE.modal.animeIdx);
  showToast(`📺 Episode ${ep} load ho raha hai...`);
};

window.prevEp = function() {
  const btns = document.querySelectorAll('.ep-item');
  if (STATE.modal.ep > 1) selectEp(STATE.modal.ep - 1, btns[STATE.modal.ep - 2]);
  else showToast('Yeh pehla episode hai!');
};

window.nextEp = function() {
  const btns = document.querySelectorAll('.ep-item');
  if (STATE.modal.ep < btns.length) selectEp(STATE.modal.ep + 1, btns[STATE.modal.ep]);
  else showToast('🎉 Season khatam! Next season select karo.');
};

/* ── ADD TO LIST ── */
window.addToList = function(name) {
  const idx = ANIME_DB.findIndex(a => a.title === name);
  if (idx !== -1) toggleMyList(idx);
};

/* ── TOAST ── */
window.showToast = function(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
};

/* ── MOBILE SEARCH TOGGLE ── */
let searchExpanded = false;
window.toggleSearchMobile = function(e) {
  const searchWrap = document.getElementById('searchWrap');
  const isOnMobile = window.innerWidth <= 768;
  if (!isOnMobile) return;
  
  searchExpanded = !searchExpanded;
  if (searchExpanded) {
    searchWrap.classList.remove('collapsed');
    $('searchInput').focus();
  } else {
    searchWrap.classList.add('collapsed');
    $('searchInput').blur();
    $('searchResults').classList.remove('visible');
  }
};

window.addEventListener('resize', () => {
  const searchWrap = document.getElementById('searchWrap');
  const isOnMobile = window.innerWidth <= 768;
  if (!isOnMobile && searchWrap && searchWrap.classList.contains('collapsed')) {
    searchWrap.classList.remove('collapsed');
    searchExpanded = false;
  }
});

/* ── AUDIO VOLUME CONTROL ── */
let isMuted = false;
let lastVolume = 80;

window.setVolume = function(val) {
  const video = $('videoPlayer');
  const volLabel = $('volLabel');
  const vol = parseInt(val);
  if (video) {
    video.volume = vol / 100;
    isMuted = false;
  }
  lastVolume = vol;
  volLabel.textContent = `${vol}%`;
};

window.toggleVolumeMute = function() {
  const video = $('videoPlayer');
  const volSlider = $('volumeSlider');
  const volLabel = $('volLabel');
  if (!video) return;
  
  if (isMuted) {
    video.volume = lastVolume / 100;
    volSlider.value = lastVolume;
    volLabel.textContent = `${lastVolume}%`;
    isMuted = false;
    showToast(`🔊 Unmuted — ${lastVolume}%`);
  } else {
    lastVolume = parseInt(volSlider.value);
    video.volume = 0;
    volSlider.value = 0;
    volLabel.textContent = 'Muted';
    isMuted = true;
    showToast('🔕 Muted');
  }
};

/* ── KEYBOARD ── */
document.addEventListener('keydown', e => {
  if (!$('modalOverlay').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  if (e.key === 'ArrowRight') nextEp();
  if (e.key === 'ArrowLeft') prevEp();
});

/* ── SNOW PARTICLES ── */
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5
  };
}

for (let i = 0; i < 100; i++) {
  snowflakes.push(createSnowflake());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(flake => {
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ── CUSTOM CURSOR ── */
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('customCursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
