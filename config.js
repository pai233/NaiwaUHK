window.siteStartTime = "2026-10-13T12:00:00+08:00";
window.defaultCharacterImage = "default-nailoong.png";
window.defaultMascotAlt = "默认奶蛙形象";

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

// 伪加载文案池：随机洗牌后按序播放，每 1.25 秒换一条。
// {host} 会替换成当前抽到的目标域名，直接改下面这些字符串即可。
window.loadingMessages = [
    "正在核对奶蛙的学籍状态…",
    "正在向教务处申请延毕…",
    "正在给 {host} 的服务器浇水…",
    "正在为奶蛙办理跨校交换手续…",
    "正在向 {host} 的服务器投喂鱼食…",
    "正在移动奶蛙",
    "正在召唤奶龙"];

config = [
    {
        url: "https://cityu-dg.edu.cn/",
        posibility: 0.7,
        characterImage: "cityu-nailoong.png",
        mascotAlt: "CityU 奶龙形象",
        theme: "cityu"
    },
    {
        url: "https://www.cityu.edu.hk/",
        posibility: 0.15,
        characterImage: "cityu-nailoong.png",
        mascotAlt: "CityU 奶龙形象",
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