window.siteStartTime = "2026-10-13T12:00:00+08:00";
window.defaultCharacterImage = "assets/default-nailoong.png";
window.defaultMascotAlt = "預設奶蛙形象";

window.themes = {
    default: {
        ink: "#3f3218",
        muted: "#7a704e",
        line: "#ead99a",
        paper: "#fffdf3",
        surface: "#fffef9",
        accent: "#f2bd32",
        accentStrong: "#d89416",
        accentSoft: "#ffe7a3",
        warmYellow: "#ffd45a",
        glowOne: "rgba(255, 212, 90, 0.38)",
        glowTwo: "rgba(112, 173, 77, 0.15)",
        backgroundStart: "#fffdf3",
        backgroundEnd: "#fff6cf",
        characterEnd: "#a8d66d",
        buttonHover: "#f6ca55",
        shadow: "0 16px 36px rgba(151, 111, 19, 0.16), 0 3px 8px rgba(151, 111, 19, 0.08)",
        ringShadow: "0 8px 20px rgba(216, 150, 22, 0.2)",
        pulseShadow: "rgba(216, 150, 22, 0.32)",
        liquid: "#f5c33f",
        liquidSoft: "#ffe3a3",
        liquidWell: "#fff6cf"
    },
    cityu: {
        ink: "#3f2020",
        muted: "#806265",
        line: "#f2c1a6",
        paper: "#fff8f3",
        surface: "#fffdfb",
        accent: "#ff8a4c",
        accentStrong: "#d83a62",
        accentSoft: "#ffd6b8",
        warmYellow: "#ffc15a",
        glowOne: "rgba(255, 193, 90, 0.38)",
        glowTwo: "rgba(216, 58, 98, 0.14)",
        backgroundStart: "#fff8f3",
        backgroundEnd: "#fff1e7",
        characterEnd: "#f28a83",
        buttonHover: "#ff9b68",
        shadow: "0 16px 36px rgba(169, 65, 55, 0.16), 0 3px 8px rgba(169, 65, 55, 0.08)",
        ringShadow: "0 8px 20px rgba(216, 58, 98, 0.18)",
        pulseShadow: "rgba(216, 58, 98, 0.42)",
        liquid: "#ff8a4c",
        liquidSoft: "#ffc79c",
        liquidWell: "#fff1e7"
    }
};

// 偽載入文案池：隨機洗牌後按順序播放，每 1.25 秒更換一條。
// {host} 會替換成目前抽中的目標網域，直接修改以下字串即可。
window.loadingMessages = [
    "正在核對奶蛙的學籍狀態…",
    "正在向教務處申請延畢…",
    "正在為 {host} 的伺服器澆水…",
    "正在為奶蛙辦理跨校交換手續…",
    "正在向 {host} 的伺服器投餵魚糧…",
    "正在移動奶蛙…",
    "正在召喚奶龍…",
    "正在替奶蛙整理書包…",
    "正在確認奶蛙今日有沒有帶八達通…",
    "正在排隊等候校巴入站…",
    "正在為奶蛙預留港深通勤座位…",
    "正在向茶餐廳申請一杯凍檸茶…",
    "正在協助奶蛙通過港珠澳大橋…",
    "正在檢查奶蛙有沒有趕上港鐵尾班車…",
    "正在為奶蛙安排跨境校巴…",
    "正在載入今日份的好心情…",
    "正在通知奶蛙：準備落堂喇…",
    "正在等候網絡訊號飲完下午茶…",
    "正在確認深圳地鐵轉乘路線…",
    "正在為跨境旅程準備八達通…",
    "正在查看口岸人流，避免奶蛙塞車…",
    "正在替奶蛙申請港深校園 Wi-Fi…",
    "正在確認這不是一隻迷路的奶蛙…",
    "正在替奶龍整理飛行路線…",
    "正在向 {host} 發送一聲蛙叫…"];

config = [
    {
        url: "https://cityu-dg.edu.cn/",
        posibility: 0.7,
        characterImage: "assets/cityu-nailoong.png",
        mascotAlt: "CityU 奶龍形象",
        theme: "cityu"
    },
    {
        url: "https://www.cityu.edu.hk/",
        posibility: 0.15,
        characterImage: "assets/cityu-nailoong.png",
        mascotAlt: "CityU 奶龍形象",
        theme: "cityu"
    },
    {
        url: "https://www.hku.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.cuhk.edu.hk/",
        posibility: 0.015
    },
    {
        url: "https://hkust.edu.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.polyu.edu.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.hkbu.edu.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.ln.edu.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.eduhk.hk/",
        posibility: 0.015
    },
    {
        url: "https://www.cuhk.edu.cn/",
        posibility: 0.015
    },
    {
        url: "https://hkust-gz.edu.cn/",
        posibility: 0.015
    },
    {
        url: "https://www.bnuz.edu.cn/",
        posibility: 0.015
    }
]