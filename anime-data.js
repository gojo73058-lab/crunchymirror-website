/* ============================================================
   CrunchyMirror — anime-data.js
   Anime Database with all anime listings
   ============================================================ */

const ANIME_DB = [
  {
    id:1, title:"Demon Slayer", titleJP:"鬼滅の刃",
    genre:"Action", rating:"9.4", year:2019,
    studio:"ufotable", status:"Ongoing",
    desc:"Tanjiro Kamado apne parivar ke baad ek demon slayer ban jaata hai jo apni behen Nezuko ko wapas insaan banana chahta hai. Hashira Training se lekar Infinity Castle tak — ek epic journey!",
    image:"https://m.media-amazon.com/images/M/MV5BMDZmNjcwMmQtNTgzMy00YWE5LWE5ZGItZWRlNDQ0NDMwYzI5XkEyXkFqcGc@._V1_.jpg",
    banner:"https://www.cleveland.com/resizer/v2/HSQ6QRD2VFCQPLGCPULCETJONU.jpg?auth=0f58114fbb6c7b27e196d6e5bf1326d055b6576afca134ed300a2fd01b70d54b&width=1280&smart=true&quality=90",
    badge:"NEW", prog:35,
    seasons:[
      {
        season:1,
        title:"Tanjiro Kamado, Unwavering Resolve Arc",
        eps:26,
        episodes:[
          { ep:1, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:2, hls:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
          { ep:3, hls:" https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#333400-333599            " },
          { ep:4, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:5, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:6, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:7, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:8, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:9, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:10, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u八年" },
          { ep:11, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:12, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:13, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:14, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:15, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:16, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:17, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:18, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:19, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:20, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:21, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:22, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
          { ep:23, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7 b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
            { ep:24, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
            { ep:25, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
            { ep:26, hls:"https://vz-181b8ed4-2a9.b-cdn.net/7b8beeba-7fd1-411e-b35e-57e842934d95/playlist.m3u8" },
        ]
      },
      { season:2, title:"Entertainment District Arc", eps:18 },
      { season:3, title:"Swordsmith Village Arc", eps:11 },
      { season:4, title:"Hashira Training Arc", eps:12 },
    ]
  },
  {
    id:2, title:"Attack on Titan", titleJP:"進撃の巨人",
    genre:"Action", rating:"9.8", year:2013,
    studio:"MAPPA", status:"Completed",
    desc:"Manushyat ko giants se bachane ki ladai — Eren ka asli makasad sab ko chaukadega. Final season mein Rumbling shuru ho jaati hai aur duniya badal jaati hai.",
    image:"https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1714/93406l.jpg",
    badge:"HD", prog:70,
    seasons:[
      { season:1, title:"Season 1", eps:25 },
      { season:2, title:"Season 2", eps:12 },
      { season:3, title:"Season 3 Part 1 & 2", eps:22 },
      { season:4, title:"The Final Season Part 1", eps:16 },
      { season:5, title:"The Final Season Part 2", eps:12 },
      { season:6, title:"The Final Season Part 3", eps:2 },
    ]
  },
  {
    id:3, title:"Solo Leveling", titleJP:"俺だけレベルアップな件",
    genre:"Fantasy", rating:"9.1", year:2024,
    studio:"A-1 Pictures", status:"Ongoing",
    desc:"Duniya ka sabse kamzor hunter Sung Jinwoo achanak ek secret dungeon mein fansa jaata hai aur ek supernatural system usse unlimited power deta hai.",
    image:"https://m.media-amazon.com/images/M/MV5BOWM2NzcxZjEtYjFjNC00NzQwLTg4MzQtMDZjYzcwMTdmYmY4XkEyXkFqcGc@._V1_.jpg",
    banner:"https://m.media-amazon.com/images/M/MV5BOWM2NzcxZjEtYjFjNC00NzQwLTg4MzQtMDZjYzcwMTdmYmY4XkEyXkFqcGc@._V1_.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Arise from the Shadow", eps:13 },
    ]
  },
  {
    id:4, title:"Jujutsu Kaisen", titleJP:"呪術廻戦",
    genre:"Action", rating:"9.2", year:2020,
    studio:"MAPPA", status:"Ongoing",
    desc:"Yuji Itadori ek cursed spirit Ryomen Sukuna ka vessel ban jaata hai. Jujutsu High mein join karke wo Culling Game arc mein zindagi ki ladai ladhta hai.",
    image:"https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    badge:"NEW", prog:20,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Hidden Inventory Arc", eps:23 },
      { season:3, title:"Culling Game Arc", eps:21 },
    ]
  },
  {
    id:5, title:"Frieren: Beyond Journey's End", titleJP:"葬送のフリーレン",
    genre:"Fantasy", rating:"9.3", year:2023,
    studio:"Madhouse", status:"Completed",
    desc:"Elf mage Frieren apne saathiyon ki maut ke baad unhe samajhne ki koshish karti hai. Nostalgia aur adventure se bhari ek masterpiece.",
    image:"https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    badge:"HD", prog:60,
    seasons:[
      { season:1, title:"Season 1 — Full Journey", eps:28 },
    ]
  },
  {
    id:6, title:"My Hero Academia", titleJP:"僕のヒーローアカデミア",
    genre:"Action", rating:"8.8", year:2016,
    studio:"Bones", status:"Completed",
    desc:"Quirkless Deku ko All Might apni power deta hai. UA Academy mein training se lekar Final War arc tak — ek iconic shonen journey.",
    image:"https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
    badge:"SUB", prog:55,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:25 },
      { season:3, title:"Season 3", eps:25 },
      { season:4, title:"Season 4", eps:25 },
      { season:5, title:"Season 5", eps:25 },
      { season:6, title:"Season 6", eps:25 },
      { season:7, title:"Final Season 7", eps:21 },
    ]
  },
  {
    id:7, title:"Spy x Family", titleJP:"スパイファミリー",
    genre:"Slice of Life", rating:"8.9", year:2022,
    studio:"WIT Studio", status:"Ongoing",
    desc:"Spy Loid Forger ek fake family banata hai mission ke liye — lekin real love slowly develop hoti jaati hai. Anya ki antics sabse adorable hain!",
    image:"https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    badge:"DUB", prog:80,
    seasons:[
      { season:1, title:"Part 1 & 2", eps:25 },
      { season:2, title:"Season 2", eps:12 },
      { season:3, title:"Season 3 — New Mission", eps:12 },
    ]
  },
  {
    id:8, title:"Chainsaw Man", titleJP:"チェンソーマン",
    genre:"Action", rating:"9.0", year:2022,
    studio:"MAPPA", status:"Ongoing",
    desc:"Denji ek devil hunter hai jo chainsaw devil Pochita ke saath merge ho jaata hai. Dark, gory aur absolutely unpredictable — ek wild ride!",
    image:"https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Public Safety Arc", eps:12 },
      { season:2, title:"Academy Arc", eps:13 },
    ]
  },
  {
    id:9, title:"Vinland Saga", titleJP:"ヴィンランド・サガ",
    genre:"Action", rating:"9.5", year:2019,
    studio:"MAPPA", status:"Completed",
    desc:"Young Viking Thorfinn revenge ki aag mein jalta hai — lekin ek din shanti ki duniya ki talash karta hai. Masterpiece storytelling.",
    image:"https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1164/138699l.jpg",
    badge:"HD", prog:15,
    seasons:[
      { season:1, title:"Prologue Arc", eps:24 },
      { season:2, title:"Slave Arc (Farm Arc)", eps:24 },
    ]
  },
  {
    id:10, title:"Blue Lock", titleJP:"ブルーロック",
    genre:"Sports", rating:"8.7", year:2022,
    studio:"Eight Bit", status:"Ongoing",
    desc:"300 strikers ko ek extreme facility mein dala jaata hai — sirf ek jeeta. Isagi Yoichi ka ego aur football talent is brutal competition mein nikhar ta hai.",
    image:"https://upload.wikimedia.org/wikipedia/en/c/c6/Blue_Lock_manga_volume_1.png",
    banner:"https://cdn.myanimelist.net/images/anime/1476/128052l.jpg",
    badge:"DUB", prog:45,
    seasons:[
      { season:1, title:"Season 1 — Blue Lock Project", eps:24 },
      { season:2, title:"Season 2 — Neo Egoist League", eps:13 },
    ]
  },
  {
    id:11, title:"Bleach: TYBW", titleJP:"BLEACH 千年血戦篇",
    genre:"Action", rating:"9.3", year:2022,
    studio:"Pierrot", status:"Ongoing",
    desc:"Ichigo Kurosaki ka aakhri arc — Quincy army Soul Society par hamla karti hai. TYBW ek visual masterpiece hai jo sab ko stun kar deta hai.",
    image:"https://upload.wikimedia.org/wikipedia/en/a/a2/Bleach_Thousand-Year_Blood_War.png",
    banner:"https://cdn.myanimelist.net/images/anime/1764/126702l.jpg",
    badge:"HD", prog:50,
    seasons:[
      { season:1, title:"Thousand-Year Blood War Part 1", eps:13 },
      { season:2, title:"TYBW Part 2 — The Separation", eps:13 },
      { season:3, title:"TYBW Part 3 — The Conflict", eps:13 },
    ]
  },
  {
    id:12, title:"Re:Zero", titleJP:"Re:ゼロから始める異世界生活",
    genre:"Isekai", rating:"9.0", year:2016,
    studio:"White Fox", status:"Ongoing",
    desc:"Subaru Natsuki ek isekai mein pahunch jaata hai jahan wo death ke baad time reset kar ke wapas aata hai. Har baar aur zyada taqleef ke saath.",
    image:"https://cdn.myanimelist.net/images/anime/1522/128039l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1522/128039l.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1 — Return by Death", eps:25 },
      { season:2, title:"Season 2 — The Sanctuary", eps:25 },
      { season:3, title:"Season 3 — Stars That Engrave History", eps:24 },
    ]
  },
  {
    id:13, title:"Oshi no Ko", titleJP:"【推しの子】",
    genre:"Romance", rating:"8.8", year:2023,
    studio:"Doga Kobo", status:"Ongoing",
    desc:"Idol Ai Hoshino ki mysterious death ke baad uske bacche entertainment industry ki dark duniya mein ghus jaate hain. Shocking aur emotionally powerful.",
    image:"https://cdn.myanimelist.net/images/anime/1812/134736l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1812/134736l.jpg",
    badge:"NEW", prog:25,
    seasons:[
      { season:1, title:"Season 1 — The Show Biz World", eps:11 },
      { season:2, title:"Season 2 — The Play", eps:13 },
    ]
  },
  {
    id:14, title:"Kaiju No. 8", titleJP:"怪獣8号",
    genre:"Action", rating:"8.9", year:2024,
    studio:"Production I.G", status:"Ongoing",
    desc:"35 saal ke Kafka Hibino achanak ek kaiju mein transform ho jaata hai — lekin wo defence force mein bhi join karna chahta hai. Unexpected power fantasy!",
    image:"https://upload.wikimedia.org/wikipedia/en/c/cd/Kaiju_No_8.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1552/140780l.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2 — Counter Assault", eps:13 },
    ]
  },
  {
    id:15, title:"Overlord", titleJP:"オーバーロード",
    genre:"Isekai", rating:"8.5", year:2015,
    studio:"Madhouse", status:"Completed",
    desc:"Game Yggdrasil band hone ke baad player Momonga game ke andar hi reh jaata hai aur duniya ko conquer karne lagta hai as Ainz Ooal Gown.",
    image:"https://cdn.myanimelist.net/images/anime/7/88019l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/7/88019l.jpg",
    badge:"DUB", prog:10,
    seasons:[
      { season:1, title:"Season 1 — Overlord", eps:13 },
      { season:2, title:"Season 2 — Dark Hero", eps:13 },
      { season:3, title:"Season 3 — Country of Darkness", eps:13 },
      { season:4, title:"Season 4 — Holy Kingdom", eps:13 },
    ]
  },
  {
    id:16, title:"Dungeon Meshi", titleJP:"ダンジョン飯",
    genre:"Fantasy", rating:"9.0", year:2024,
    studio:"Trigger", status:"Completed",
    desc:"Laios ki team dungeon mein phas jaati hai aur khane ke liye monsters ko pakana padta hai. Unique, wholesome aur surprisingly deep storytelling.",
    image:"https://m.media-amazon.com/images/M/MV5BNmU3ZGFhMmYtNzczYy00NTE0LThkYjgtNWFiYTY2NzRkM2QzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1048/138012l.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Delicious in Dungeon — Full Season", eps:24 },
    ]
  },
  {
    id:17, title:"Wind Breaker", titleJP:"ウィンドブレイカー",
    genre:"Action", rating:"8.5", year:2024,
    studio:"CloverWorks", status:"Ongoing",
    desc:"Haruka Sakura Furin High School join karta hai — ek gang jo apne town ki street criminals se raksha karta hai. Friendship aur epic fights ka perfect mix.",
    image:"https://m.media-amazon.com/images/M/MV5BNTQzNDI5OGItZDZkMy00MWQ1LWIwM2YtYzc2YWNhOGJlZWQxXkEyXkFqcGc@._V1_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1375/138145l.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Season 1 — Bofurin", eps:13 },
    ]
  },
  {
    id:18, title:"Mushoku Tensei", titleJP:"無職転生",
    genre:"Isekai", rating:"8.7", year:2021,
    studio:"Studio Bind", status:"Ongoing",
    desc:"34 saal ka loser reincarnate hota hai ek fantasy world mein aur is baar apni full potential use karna chahta hai. Best isekai ever made.",
    image:"https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1430/108928l.jpg",
    badge:"HD", prog:30,
    seasons:[
      { season:1, title:"Part 1 — Infancy Period", eps:11 },
      { season:2, title:"Part 2 — Youth Period", eps:12 },
      { season:3, title:"Season 2 — Turning Point", eps:12 },
      { season:4, title:"Season 3 — Juvenile Period", eps:12 },
    ]
  },
  {
    id:19, title:"Uzumaki", titleJP:"うずまき",
    genre:"Horror", rating:"9.0", year:2024,
    studio:"Drive", status:"Completed",
    desc:"Kurozu-cho town mein ek spiral curse shuru hoti hai. Junji Ito ki legendary horror manga ka anime adaptation — psychological terror at its finest.",
    image:"https://m.media-amazon.com/images/I/81CfbcFFyHL.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1074/139534l.jpg",
    badge:"NEW", prog:0,
    seasons:[
      { season:1, title:"Uzumaki — Full OVA", eps:4 },
    ]
  },
  {
    id:20, title:"Shangri-La Frontier", titleJP:"シャングリラ・フロンティア",
    genre:"Sci-Fi", rating:"8.6", year:2023,
    studio:"C2C", status:"Ongoing",
    desc:"Gamer Rakuro sirf kharab games khelta tha — ab wo VR game Shangri-La Frontier mein ek legendary monster Wethermon se face off karta hai.",
    image:"https://m.media-amazon.com/images/I/81H+awl2uCL._AC_UF1000,1000_QL80_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1475/137841l.jpg",
    badge:"SUB", prog:70,
    seasons:[
      { season:1, title:"Season 1 — Shangri-La Frontier", eps:25 },
      { season:2, title:"Season 2 — Wethermon's Trial", eps:13 },
    ]
  },
  {
    id:21, title:"Death Note", titleJP:"デスノート",
    genre:"Thriller", rating:"9.0", year:2006,
    studio:"Madhouse", status:"Completed",
    desc:"Ek teenager ko supernatural notebook milta hai jisme kisi bhi insaan ka naam likhne se wo directly mar jaata hai. Dark kahani shuru hoti hai jab wo duniya se 'bad' logon ko eliminate karne lagta hai.",
    image:"https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    badge:"HD", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:37 },
    ]
  },
  {
    id:22, title:"Code Geass", titleJP:"コードギアス",
    genre:"Action", rating:"8.7", year:2006,
    studio:"Sunrise", status:"Completed",
    desc:"Lelouch ko ek mysterious girl se 'Geass' power milta hai jo kisi ko obey karne ke liye force kar sakta hai. Ab wo revolutionary ban jaata hai aur puri duniya badalne ki koshish karta hai.",
    image:"https://cdn.myanimelist.net/images/anime/10/24232l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/24232.jpg",
    badge:"DUB", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:25 },
      { season:2, title:"Season 2", eps:25 },
    ]
  },
  {
    id:23, title:"Tokyo Ghoul", titleJP:"東京喰種",
    genre:"Horror", rating:"8.5", year:2014,
    studio:"Studio Pierrot", status:"Completed",
    desc:"Tokyo mein ghouls rehte hain jo insano ka meat khate hain. Kaneki ek accident mein ghoul ban jaata hai aur ab dono duniya ke beech phansta hai.",
    image:"https://cdn.myanimelist.net/images/anime/2/66353l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/2/66353.jpg",
    badge:"SUB", prog:55,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:24, title:"Steins;Gate", titleJP:"シュタインズ・ゲート",
    genre:"Sci-Fi", rating:"9.1", year:2011,
    studio:"White Fox", status:"Completed",
    desc:"Ek student ko aaj kabhi vaqt machine bana deta hai jo messages bhej sakta hai. Time travel paradoxes unhe khatra mein daal dete hain.",
    image:"https://cdn.myanimelist.net/images/anime/5/35268l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/5/35268.jpg",
    badge:"HD", prog:60,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Elite", eps:24 },
    ]
  },
  {
    id:25, title:"Naruto", titleJP:"ナルト",
    genre:"Action", rating:"8.6", year:2002,
    studio:"Studio Pierrot", status:"Completed",
    desc:"Ek ninja village ka orphan baccha har jagah se reject hota hai. Ab wo apne dream ke through sabko apna accept karana chahta hai.",
    image:"https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    badge:"DUB", prog:65,
    seasons:[
      { season:1, title:"Original Series", eps:220 },
      { season:2, title:"Shippuden", eps:500 },
    ]
  },
  {
    id:26, title:"Cowboy Bebop", titleJP:"カウボーイビバップ",
    genre:"Sci-Fi", rating:"8.8", year:1998,
    studio:"Sunrise", status:"Completed",
    desc:"Ek spacecraft mein bounty hunters roam karte hain aur har episode mein naya adventure hota hai. Stylish kahani aur jazzy music ke saath.",
    image:"https://cdn.myanimelist.net/images/anime/4/50449l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/50449.jpg",
    badge:"SUB", prog:70,
    seasons:[
      { season:1, title:"Season 1", eps:26 },
    ]
  },
  {
    id:27, title:"Fullmetal Alchemist", titleJP:"鋼の錬金術師",
    genre:"Action", rating:"9.0", year:2005,
    studio:"Bones", status:"Completed",
    desc:"Do bhaiyon ne apni dead mummy ko wapas lana chahte the aur forbidden alchemy use karte hain. Ab unhe dark secrets khoj nikalne hote hain.",
    image:"https://cdn.myanimelist.net/images/anime/1223/96541l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    badge:"DUB", prog:75,
    seasons:[
      { season:1, title:"Season 1", eps:51 },
    ]
  },
  {
    id:28, title:"Mob Psycho 100", titleJP:"モブサイコ100",
    genre:"Supernatural", rating:"8.7", year:2016,
    studio:"Bones", status:"Completed",
    desc:"Ek middleschool ka kamzor baccha psychic powers develop karta hai aur puri duniya mein chacha macha deta hai. Wholesome yet badass kahani.",
    image:"https://cdn.myanimelist.net/images/anime/6/78514l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/78514.jpg",
    badge:"NEW", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:13 },
      { season:3, title:"Season 3", eps:12 },
    ]
  },
  {
    id:29, title:"One Punch Man", titleJP:"ワンパンチマン",
    genre:"Action", rating:"8.8", year:2015,
    studio:"Madhouse", status:"Ongoing",
    desc:"Ek aadmi simply for fun training se itni strong ban gaya ki sirf ek punch se koi bhi villain mar jaata hai. Absurd power ka comedy show.",
    image:"https://cdn.myanimelist.net/images/anime/12/58247l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/12/58247.jpg",
    badge:"NEW", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:30, title:"Haikyuu!!", titleJP:"ハイキュー!!",
    genre:"Sports", rating:"8.8", year:2014,
    studio:"Production I.G", status:"Completed",
    desc:"Ek volleyball team district championship jeetne ke liye practice karta hai. Sports aur friendship ke through growth ka sonda journey.",
    image:"https://cdn.myanimelist.net/images/anime/10/68161l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/68161.jpg",
    badge:"SUB", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:25 },
      { season:2, title:"Season 2", eps:25 },
      { season:3, title:"Season 3", eps:10 },
      { season:4, title:"Season 4", eps:25 },
    ]
  },
  {
    id:31, title:"The Promised Neverland", titleJP:"約束のネバーランド",
    genre:"Thriller", rating:"8.6", year:2019,
    studio:"CloverWorks", status:"Completed",
    desc:"Ek mysterious orphanage mein mysterious occurrences hote hain. Children ko kya ho raha hai? Dark mystery unfold hoti hai.",
    image:"https://cdn.myanimelist.net/images/anime/2/84254l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/2/84254.jpg",
    badge:"NEW", prog:30,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:11 },
    ]
  },
  {
    id:32, title:"Ergo Proxy", titleJP:"エルゴプラキシ",
    genre:"Sci-Fi", rating:"7.8", year:2006,
    studio:"Manglobe", status:"Completed",
    desc:"Ek post-apocalyptic duniya mein robots aur humans coexist karte hain lekin mysterious deaths shuru ho jaate hain.",
    image:"https://cdn.myanimelist.net/images/anime/1/8850l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/8850.jpg",
    badge:"SUB", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:23 },
    ]
  },
  {
    id:33, title:"Gintama", titleJP:"銀魂",
    genre:"Comedy", rating:"8.9", year:2006,
    studio:"Studio Jump", status:"Completed",
    desc:"Feudal Japan mein aliens hafte hain aur samurai log comedy situations mein faste hain. Badass yet hilarious kahani.",
    image:"https://cdn.myanimelist.net/images/anime/9/44846l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/9/44846.jpg",
    badge:"DUB", prog:55,
    seasons:[
      { season:1, title:"Complete Series", eps:201 },
    ]
  },
  {
    id:34, title:"K-On!", titleJP:"けいおん!",
    genre:"Slice of Life", rating:"8.2", year:2009,
    studio:"Kyoto Animation", status:"Completed",
    desc:"5 girls ek band form karte hain aur school life mein music ke through friendship enjoy karte hain.",
    image:"https://cdn.myanimelist.net/images/anime/3/28189l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/3/28189.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:27 },
    ]
  },
  {
    id:35, title:"No Game No Life", titleJP:"ノーゲーム・ノーライフ",
    genre:"Isekai", rating:"8.6", year:2014,
    studio:"Madhouse", status:"Ongoing",
    desc:"Do genius gamer siblings ko ek mysterious god ek magical world mein transfer kar deta hai jahan sirf games se decision hote hain.",
    image:"https://cdn.myanimelist.net/images/anime/3/67657l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/3/67657.jpg",
    badge:"NEW", prog:25,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:36, title:"Kaguya-sama: Love is War", titleJP:"かぐや様は告らせたい",
    genre:"Romance", rating:"8.8", year:2019,
    studio:"A-1 Pictures", status:"Ongoing",
    desc:"Do topmostudents ek dusre ko love karte hain lekin admit nahi karte. Psychological war of confession shuru hoti hai.",
    image:"https://cdn.myanimelist.net/images/anime/10/78537l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/78537.jpg",
    badge:"NEW", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
      { season:3, title:"Season 3", eps:13 },
    ]
  },
  {
    id:37, title:"Toilet-bound Hanako", titleJP:"トイレの花子さん",
    genre:"Supernatural", rating:"8.1", year:2020,
    studio:"Studio Deen", status:"Completed",
    desc:"Ek school ka girls toilet mein supernatural ghost rehta hai jo wishes puri karta hai. Dark comedy aur mystery combined.",
    image:"https://cdn.myanimelist.net/images/anime/6/86868l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/86868.jpg",
    badge:"SUB", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:38, title:"Made in Abyss", titleJP:"メイドインアビス",
    genre:"Adventure", rating:"8.7", year:2017,
    studio:"Kinema Citrus", status:"Ongoing",
    desc:"Do bal ek giant pit ke andher utarte hain mysteries discover karne. Cute par disturbing adventure unfold hoti hai.",
    image:"https://cdn.myanimelist.net/images/anime/2/85866l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/2/85866.jpg",
    badge:"NEW", prog:20,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:39, title:"Cells at Work", titleJP:"はたらく細胞",
    genre:"Educational", rating:"8.2", year:2018,
    studio:"David Production", status:"Completed",
    desc:"Human body ke cells alag characters ke jaise work karte hain. Biology sikhne ka fun tarika!",
    image:"https://cdn.myanimelist.net/images/anime/10/88926l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/88926.jpg",
    badge:"DUB", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:13 },
    ]
  },
  {
    id:40, title:"A Place Further Than The Universe", titleJP:"キズナイーバー",
    genre:"Adventure", rating:"8.2", year:2018,
    studio:"Madhouse", status:"Completed",
    desc:"Char high school girls Antarctica jaane ka decision lete hain. Adventure, friendship aur self-discovery ki kahani.",
    image:"https://cdn.myanimelist.net/images/anime/2/88451l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/2/88451.jpg",
    badge:"SUB", prog:30,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
    ]
  },
  {
    id:41, title:"Assassination Classroom", titleJP:"暗殺教室",
    genre:"Action", rating:"8.1", year:2015,
    studio:"Lerche", status:"Completed",
    desc:"Ek mysteryous octopus teacher students ko kya sikhata hai? Assassination aur education mix karte hain.",
    image:"https://cdn.myanimelist.net/images/anime/5/71664l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/5/71664.jpg",
    badge:"DUB", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:22 },
      { season:2, title:"Season 2", eps:25 },
    ]
  },
  {
    id:42, title:"Dr. Stone", titleJP:"ドクターストーン",
    genre:"Sci-Fi", rating:"8.6", year:2019,
    studio:"TMS Entertainment", status:"Completed",
    desc:"Duniya stone age mein convert ho jaati hai. Ek genius scientist ko usse recover karna padta hai using only science.",
    image:"https://cdn.myanimelist.net/images/anime/6/86965l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/86965.jpg",
    badge:"NEW", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Season 2", eps:11 },
      { season:3, title:"Season 3", eps:11 },
    ]
  },
  {
    id:43, title:"Food Wars!", titleJP:"食戟のソーマ",
    genre:"Comedy", rating:"8.4", year:2015,
    studio:"J.C.Staff", status:"Completed",
    desc:"Top culinary school mein intense cooking battles hote hain. Food banane pe itna passion!",
    image:"https://cdn.myanimelist.net/images/anime/7/73919l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/7/73919.jpg",
    badge:"SUB", prog:55,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Season 2", eps:13 },
      { season:3, title:"Season 3", eps:24 },
      { season:4, title:"Season 4", eps:12 },
    ]
  },
  {
    id:44, title:"Tower of God", titleJP:"ゴッドオブハイスクール",
    genre:"Action", rating:"8.2", year:2020,
    studio:"Crunchyroll", status:"Ongoing",
    desc:"Ek mysterious tower ke inside mystery unfold hota hai. Power system aur revelations crazy hote hain.",
    image:"https://cdn.myanimelist.net/images/anime/5/87159l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/5/87159.jpg",
    badge:"NEW", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:13 },
    ]
  },
  {
    id:45, title:"The God of High School", titleJP:"ゴッドオブハイスクール",
    genre:"Action", rating:"8.5", year:2020,
    studio:"MAPPA", status:"Ongoing",
    desc:"High school taekwondo tournament national level tak go karta hai. Animation aur fights insane hote hain.",
    image:"https://m.media-amazon.com/images/M/MV5BNTU0ZWEyN2ItODk1NS00YWU0LWJlMGEtN2M5YjAwNGE2OTYzXkEyXkFqcGc@._V1_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/3/85937l.jpg",
    badge:"NEW", prog:25,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:13 },
    ]
  },
  {
    id:46, title:"Renegage Immortal", titleJP:"天道図書館",
    genre:"Isekai", rating:"8.4", year:2023,
    studio:"Haoliners", status:"Ongoing",
    desc:"Ek loser gamer ek dungeon mein portal ke through transfer hota hai. Ab usse dungeon conquer karna hai aur wapas ghar jana hai.",
    image:"https://m.media-amazon.com/images/M/MV5BMDk2OTcwZDMtYzJmNS00ZWNkLTlkOTAtYzI0MzM2YjczMzhjXkEyXkFqcGc@._V1_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1357/127948l.jpg",
    badge:"DUB", prog:20,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:12 },
    ]
  },
  {
    id:47, title:"Parasyte", titleJP:"寄生獣",
    genre:"Horror", rating:"8.5", year:2014,
    studio:"Madhouse", status:"Completed",
    desc:"Alien parasites humans ko infect karte hain but ek bacche ke brain mein settle hota hai jo bargain karta hai.",
    image:"https://cdn.myanimelist.net/images/anime/4/50633l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/50633.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
    ]
  },
  {
    id:48, title:"Mononoke", titleJP:"もののけ",
    genre:"Action", rating:"8.3", year:2007,
    studio:"Toei Animation", status:"Completed",
    desc:"Ek wanderer spirits ko investigate karta hai aur unhe solve karta hai. Dark Japanese folklore based.",
    image:"https://cdn.myanimelist.net/images/anime/1/4840l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/4840.jpg",
    badge:"SUB", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
    ]
  },
  {
    id:49, title:"Little Witch Academia", titleJP:"リトルウィッチアカデミア",
    genre:"Fantasy", rating:"7.8", year:2017,
    studio:"Trigger", status:"Completed",
    desc:"Ek modern witchcraft school mein studious girl join karta hai aur adventures have. Colorful aur fun world.",
    image:"https://cdn.myanimelist.net/images/anime/4/82451l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/82451.jpg",
    badge:"DUB", prog:30,
    seasons:[
      { season:1, title:"Complete Series", eps:25 },
    ]
  },
  {
    id:50, title:"Kill la Kill", titleJP:"キルラキル",
    genre:"Action", rating:"8.0", year:2013,
    studio:"Trigger", status:"Completed",
    desc:"Ek girl school uniform power use karke apne father ka secret revenge leta hai. Over-the-top action aur visuals.",
    image:"https://cdn.myanimelist.net/images/anime/1/44913l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/44913.jpg",
    badge:"SUB", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
    ]
  },
  {
    id:51, title:"Puella Magi Madoka Magica", titleJP:"魔法少女まどか☆マギカ",
    genre:"Psychological", rating:"8.6", year:2011,
    studio:"Shaft", status:"Completed",
    desc:"Cute magical girls kahani dark twists se full hoti hai. Deceptive premise par mind-bending pehle.",
    image:"https://cdn.myanimelist.net/images/anime/14/36207l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/14/36207.jpg",
    badge:"SUB", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
    ]
  },
  {
    id:52, title:"Natsume Book of Friends", titleJP:"夏目友人帳",
    genre:"Supernatural", rating:"8.3", year:2008,
    studio:"Brain's Base", status:"Completed",
    desc:"Ek boy supernatural creatures ko dekh sakta hai. Heartwarming stories of spirits aur bonds create hote hain.",
    image:"https://cdn.myanimelist.net/images/anime/3/46842l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/3/46842.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:13 },
    ]
  },
  {
    id:53, title:"Carole & Tuesday", titleJP:"キャロル＆チューズデイ",
    genre:"Music", rating:"8.0", year:2019,
    studio:"Bones", status:"Completed",
    desc:"Ek future Mars mein do girls music through rebellion karte hain. Sci-fi meets soulful music journey.",
    image:"https://cdn.myanimelist.net/images/anime/10/87661l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/87661.jpg",
    badge:"NEW", prog:25,
    seasons:[
      { season:1, title:"Complete Series", eps:24 },
    ]
  },
  {
    id:54, title:"Hyouka", titleJP:"氷菓",
    genre:"Mystery", rating:"8.2", year:2012,
    studio:"Kyoto Animation", status:"Completed",
    desc:"Ek lazy boy mystery club mein join karta hai aur high school mysteries solve karte hain.",
    image:"https://cdn.myanimelist.net/images/anime/10/26837l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/10/26837.jpg",
    badge:"SUB", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:22 },
    ]
  },
  {
    id:55, title:"Bakemonogatari", titleJP:"化物語",
    genre:"Supernatural", rating:"8.1", year:2009,
    studio:"Shaft", status:"Ongoing",
    desc:"Ek boy supernatural incidents investigate karta hai. Stylish presentation aur complex storytelling.",
    image:"https://cdn.myanimelist.net/images/anime/2/3835l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/2/3835.jpg",
    badge:"SUB", prog:30,
    seasons:[
      { season:1, title:"Complete Series", eps:110 },
    ]
  },
  {
    id:56, title:"Yona of the Dawn", titleJP:"暁のヨナ",
    genre:"Fantasy", rating:"8.3", year:2014,
    studio:"Pierrot", status:"Ongoing",
    desc:"Ek princess apne kingdom ko revenge se wapas lena chahti hai jo uske ko chhod deta hai. Fantasy adventure aur complex power dynamics.",
    image:"https://cdn.myanimelist.net/images/anime/1/46769l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/46769.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Season 2", eps:13 },
    ]
  },
  {
    id:57, title:"Blood of Zeus", titleJP:"ゼウスの血",
    genre:"Action", rating:"7.6", year:2020,
    studio:"Netflix", status:"Completed",
    desc:"Ek boy ko pata chalta hai ki wo Zeus ka bastard son hai. Greek mythology meets modern action.",
    image:"https://cdn.myanimelist.net/images/anime/13/85549l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/13/85549.jpg",
    badge:"NEW", prog:20,
    seasons:[
      { season:1, title:"Season 1", eps:8 },
    ]
  },
  {
    id:58, title:"Cyberpunk Edgerunners", titleJP:"サイバーパンク エッジランナーズ",
    genre:"Sci-Fi", rating:"8.9", year:2022,
    studio:"Trigger", status:"Completed",
    desc:"Futuristic cyberpunk world mein street operatives illegal jobs karte hain. Dark, stylish aur emotional.",
    image:"https://cdn.myanimelist.net/images/anime/1/72857l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/72857.jpg",
    badge:"NEW", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:10 },
    ]
  },
  {
    id:59, title:"Vivy -Fluorite Eye's Song-", titleJP:"Vivy-フローライトアイズソング-",
    genre:"Action", rating:"8.1", year:2021,
    studio:"Wit Studio", status:"Completed",
    desc:"Ek AI girl ko future change karne ko try karta hai time travel ke through. AI philosophy aur complex time paradoxes combined.",
    image:"https://cdn.myanimelist.net/images/anime/4/76929l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/76929.jpg",
    badge:"NEW", prog:30,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
    ]
  },
  {
    id:60, title:"The Owl House", titleJP:"アウル・ハウス",
    genre:"Fantasy", rating:"8.6", year:2020,
    studio:"Disney", status:"Completed",
    desc:"Ek girl ek magical realm mein trap hoti hai aur witch training lete hue mysteries solve karti hai. Cute, funny aur surprisingly deep.",
    image:"https://m.media-amazon.com/images/M/MV5BMzA0YTU0MTYtMzRkYS00MDRhLWJjNDYtZWVjYTMxNDhhZDEyXkEyXkFqcGc@._V1_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/5/82868l.jpg",
    badge:"NEW", prog:55,
    seasons:[
      { season:1, title:"Season 1", eps:20 },
      { season:2, title:"Season 2", eps:21 },
      { season:3, title:"Season 3", eps:3 },
    ]
  },
  {
    id:61, title:"Arcane", titleJP:"アーケイン",
    genre:"Action", rating:"9.0", year:2021,
    studio:"Fortiche", status:"Ongoing",
    desc:"Do sisters dono taraf ki ladai mein fasti hain — ek upper city mein, ek lower city mein. Political intrigue aur stunning visuals.",
    image:"https://m.media-amazon.com/images/M/MV5BNjExMTMyZTItMDc2Yi00YWQ1LTljNjgtMzMyMmE4YjE0YzA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1180/122795l.jpg",
    badge:"NEW", prog:60,
    seasons:[
      { season:1, title:"Season 1", eps:9 },
      { season:2, title:"Season 2", eps:9 },
    ]
  },
  {
    id:62, title:"Anohana: The Flower We Saw", titleJP:"あの日見た花の名前を僕たちはまだ知らない。",
    genre:"Drama", rating:"8.8", year:2011,
    studio:"A-1 Pictures", status:"Completed",
    desc:"Childhood friends ko dead friend ka ghost milta hai. Emotional aur heartbreaking story of regret & forgiveness ke through healing.",
    image:"https://cdn.myanimelist.net/images/anime/1/37889l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/1/37889.jpg",
    badge:"SUB", prog:50,
    seasons:[
      { season:1, title:"Season 1", eps:11 },
    ]
  },
  {
    id:63, title:"Your Name", titleJP:"君の名は。",
    genre:"Romance", rating:"8.8", year:2016,
    studio:"CoMix Wave Films", status:"Completed",
    desc:"Do teenagers apne bodies swap kar dete hain aur ek dusre ki zindagi jeete hain. Beautiful love story with cosmic destiny.",
    image:"https://cdn.myanimelist.net/images/anime/4/86699l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/86699.jpg",
    badge:"DUB", prog:55,
    seasons:[
      { season:1, title:"Movie", eps:1 },
    ]
  },
  {
    id:64, title:"Rascal Does Not Dream", titleJP:"青ブタ",
    genre:"Romance", rating:"8.3", year:2018,
    studio:"CloverWorks", status:"Completed",
    desc:"Ek boy ko girls supernatural incidents with bunny signs experience karti hain. Fantasy romance with deep philosophical undertones.",
    image:"https://cdn.myanimelist.net/images/anime/6/86452l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/86452.jpg",
    badge:"SUB", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:13 },
      { season:2, title:"Season 2", eps:8 },
    ]
  },
  {
    id:65, title:"Classroom of the Elite", titleJP:"ようこそ実力至上主義の教室へ",
    genre:"School", rating:"8.3", year:2017,
    studio:"Lerche", status:"Completed",
    desc:"High school ka oppressed 'dumb' classroom mein ek genius aata hai aur puri system badal deta hai. Strategic battles aur hidden powers.",
    image:"https://cdn.myanimelist.net/images/anime/11/87833l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/11/87833.jpg",
    badge:"SUB", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
      { season:2, title:"Season 2", eps:13 },
      { season:3, title:"Season 3", eps:13 },
    ]
  },
  {
    id:66, title:"Sword Art Online", titleJP:"ソードアート・オンライン",
    genre:"Sci-Fi", rating:"7.8", year:2012,
    studio:"A-1 Pictures", status:"Ongoing",
    desc:"Ek VR game mein players trap ho jaate hain aur escaping becomes life or death situation. Gaming meets reality par multiple layers follow.",
    image:"https://cdn.myanimelist.net/images/anime/6/48245l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/6/48245.jpg",
    badge:"DUB", prog:50,
    seasons:[
      { season:1, title:"Season 1 - Aincrad", eps:25 },
      { season:2, title:"Season 2 - Phantom Bullet", eps:24 },
      { season:3, title:"Season 3 - Alicization", eps:24 },
    ]
  },
  {
    id:67, title:"Tokyo Revengers", titleJP:"東京卍リベンジャーズ",
    genre:"Action", rating:"8.5", year:2021,
    studio:"Liden Films", status:"Completed",
    desc:"Ek boy time travel use karke apni past change karne jaata hai. Apne dead girlfriend ko save karna hai par complications aate hain.",
    image:"https://cdn.myanimelist.net/images/anime/3/90290l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/3/90290.jpg",
    badge:"NEW", prog:40,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Season 2 - Bloody Halloween", eps:24 },
    ]
  },
  {
    id:68, title:"Akame ga Kill!", titleJP:"アカメが斬る!",
    genre:"Action", rating:"8.1", year:2014,
    studio:"White Fox", status:"Completed",
    desc:"Ek militia group corrupted government ke against assassination missions karte hain. Dark, brutal aur emotionally devastating.",
    image:"https://cdn.myanimelist.net/images/anime/7/50013l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/7/50013.jpg",
    badge:"SUB", prog:45,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
    ]
  },
  {
    id:69, title:"That Time I Got Reincarnated as a Slime", titleJP:"転生したらスライムだった件",
    genre:"Isekai", rating:"8.2", year:2018,
    studio:"Deen", status:"Ongoing",
    desc:"Ek aadmi slime mein reincarnate hota hai aur amazing power develop karta hai. Unexpected OP protagonist jo genuine aur kind hai.",
    image:"https://cdn.myanimelist.net/images/anime/4/70259l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/4/70259.jpg",
    badge:"DUB", prog:35,
    seasons:[
      { season:1, title:"Season 1", eps:24 },
      { season:2, title:"Season 2", eps:24 },
      { season:3, title:"Season 3", eps:12 },
    ]
  },
  {
    id:70, title:"Wonder Egg Priority", titleJP:"ワンダーエッグ・プライオリティ",
    genre:"Psychological", rating:"7.9", year:2021,
    studio:"Cloverworks", status:"Completed",
    desc:"Ek girl magical eggs banate hai aur depression ke through battles nikalti hai. Visually stunning par emotionally aur dark themes.",
    image:"https://cdn.myanimelist.net/images/anime/11/59896l.jpg",
    banner:"https://cdn.myanimelist.net/images/anime/11/59896.jpg",
    badge:"NEW", prog:25,
    seasons:[
      { season:1, title:"Season 1", eps:12 },
    ]
  },
];