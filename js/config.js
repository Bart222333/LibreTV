// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    iqiyi: {
        api: "https://iqiyizyapi.com/api.php/provide/vod",
        name: "-爱奇艺-",
        detail: "https://iqiyizyapi.com",
    },
    dbzy: {
        api: "https://caiji.dbzy5.com/api.php/provide/vod",
        name: "豆瓣资源",
        detail: "https://dbzy.tv",
    },
    mtzy: {
        api: "https://caiji.maotaizy.cc/api.php/provide/vod",
        name: "茅台资源",
        detail: "https://mtzy.me",
    },
    wolong: {
        api: "https://wolongzyw.com/api.php/provide/vod",
        name: "卧龙资源",
        detail: "https://wolongzyw.com",
    },
    ikun: {
        api: "https://ikunzyapi.com/api.php/provide/vod",
        name: "iKun资源",
        detail: "https://ikunzy.com",
    },
    dyttzy: {
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        name: "电影天堂",
        detail: "http://caiji.dyttzyapi.com",
    },
    maoyan: {
        api: "https://api.maoyanapi.top/api.php/provide/vod",
        name: "猫眼资源",
        detail: "https://www.maoyanzy.com",
    },
    lzi: {
        api: "https://cj.lzcaiji.com/api.php/provide/vod",
        name: "量子资源",
        detail: "https://cj.lzcaiji.com",
    },
    zy360: {
        api: "https://360zyzz.com/api.php/provide/vod",
        name: "360 资源",
        detail: "https://360zy.com",
    },
    jisu: {
        api: "https://jszyapi.com/api.php/provide/vod",
        name: "极速资源",
        detail: "https://jszyapi.com",
    },
    mdzy: {
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        name: "魔都资源",
        detail: "https://www.moduzy.net",
    },
    ffzy: {
        api: "https://api.ffzyapi.com/api.php/provide/vod",
        name: "非凡资源",
        detail: "https://cj.ffzyapi.com",
    },
    bfzy: {
        api: "https://bfzyapi.com/api.php/provide/vod",
        name: "暴风资源",
        detail: "https://bfzy.tv",
    },
    zuid: {
        api: "https://api.zuidapi.com/api.php/provide/vod",
        name: "最大资源",
        detail: "https://zuida.xyz",
    },
    wujin: {
        api: "https://api.wujinapi.me/api.php/provide/vod",
        name: "无尽资源",
        detail: "https://wujinzy.com",
    },
    xinlang: {
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
        name: "新浪资源",
        detail: "https://xinlangapi.com",
    },
    wwzy: {
        api: "https://api.wwzy.tv/api.php/provide/vod",
        name: "旺旺资源",
        detail: "https://api.wwzy.tv",
    },
    subo: {
        api: "https://subocaiji.com/api.php/provide/vod",
        name: "速播资源",
        detail: "https://www.subozy.com",
    },
    jinying: {
        api: "https://jyzyapi.com/provide/vod/from/jinyingyun/at/json",
        name: "金鹰点播",
        detail: "https://jinyingzy.com",
    },
    piaoling: {
        api: "https://p2100.net/api.php/provide/vod",
        name: "飘零资源",
        detail: "https://p2100.net",
    },
    uku: {
        api: "https://api.ukuapi88.com/api.php/provide/vod",
        name: "U酷影视",
        detail: "https://www.ukuzy.com",
    },
    guangsu: {
        api: "https://api.guangsuapi.com/api.php/provide/vod",
        name: "光速资源",
        detail: "https://api.guangsuapi.com",
    },
    hongniu: {
        api: "https://www.hongniuzy2.com/api.php/provide/vod",
        name: "红牛资源",
        detail: "https://www.hongniuzy.com",
    },
    modudm: {
        api: "https://caiji.moduapi.cc/api.php/provide/vod",
        name: "魔都动漫",
        detail: "https://caiji.moduapi.cc",
    },
    ruyi: {
        api: "https://cj.rycjapi.com/api.php/provide/vod",
        name: "如意资源",
        detail: "https://www.ryzyw.com",
    },
    haohua: {
        api: "https://hhzyapi.com/api.php/provide/vod",
        name: "豪华资源",
        detail: "https://www.haohuazy.com",
    },
    bdzy1_com: {
        api: "https://api.apibdzy.com/api.php/provide/vod",
        name: "百度云zy",
        detail: "https://bdzy1.com",
    },
    lovedan_net: {
        api: "https://lovedan.net/api.php/provide/vod",
        name: "艾旦影视",
        detail: "https://lovedan.net",
    },
    lzizy_net: {
        api: "https://cj.lziapi.com/api.php/provide/vod",
        name: "量子影视",
        detail: "https://lzizy.net",
    },
    zuidazy_co: {
        api: "https://zuidazy.me/api.php/provide/vod",
        name: "最大点播",
        detail: "https://zuidazy.co",
    },
    wujinzy_com: {
        api: "https://api.wujinapi.com/api.php/provide/vod",
        name: "无尽影视",
        detail: "https://wujinzy.com",
    },
    wwzy_tv: {
        api: "https://wwzy.tv/api.php/provide/vod",
        name: "旺旺短剧",
        detail: "https://wwzy.tv",
    },
    s_1080zyk4_com: {
        api: "https://api.yzzy-api.com/inc/apijson.php",
        name: "优质资源",
        detail: "https://1080zyk4.com",
    },
    huyaapi_com: {
        api: "https://www.huyaapi.com/api.php/provide/vod",
        name: "虎牙资源",
        detail: "https://www.huyaapi.com",
    },
    yayazy3_com: {
        api: "https://cj.yayazy.net/api.php/provide/vod",
        name: "鸭鸭资源",
        detail: "https://yayazy3.com",
    },
    suonizy_net: {
        api: "https://suoniapi.com/api.php/provide/vod",
        name: "索尼资源",
        detail: "https://suonizy.net",
    },
    kuaichezy_com: {
        api: "https://caiji.kuaichezy.org/api.php/provide/vod",
        name: "快车资源",
        detail: "https://kuaichezy.com",
    },
    shandianzy_com: {
        api: "https://xsd.sdzyapi.com/api.php/provide/vod",
        name: "闪电资源",
        detail: "https://shandianzy.com",
    },
    yhzy_cc: {
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
        name: "樱花资源",
        detail: "https://yhzy.cc",
    },
    s_91md_me: {
        api: "https://91md.me/api.php/provide/vod",
        name: "麻豆视频",
        detail: "https://91md.me",
        adult: true,
    },
    s_155zy2_com: {
        api: "https://155api.com/api.php/provide/vod",
        name: "155-资源",
        detail: "https://155zy2.com",
        adult: true,
    },
    apiyutu_com: {
        api: "https://apiyutu.com/api.php/provide/vod",
        name: "玉兔资源",
        detail: "https://apiyutu.com",
        adult: true,
    },
    fhapi9_com: {
        api: "http://fhapi9.com/api.php/provide/vod",
        name: "番号资源",
        detail: "http://fhapi9.com",
        adult: true,
    },
    apilsbzy1_com: {
        api: "https://apilsbzy1.com/api.php/provide/vod",
        name: "-老色逼-",
        detail: "https://apilsbzy1.com",
        adult: true,
    },
    xiaojizy_live: {
        api: "https://api.xiaojizy.live/provide/vod",
        name: "小鸡资源",
        detail: "https://xiaojizy.live",
        adult: true,
    },
    hsckzy_xyz: {
        api: "https://hsckzy.xyz/api.php/provide/vod",
        name: "黄色仓库",
        detail: "https://hsckzy.xyz",
        adult: true,
    },
    apidanaizi_com: {
        api: "https://apidanaizi.com/api.php/provide/vod",
        name: "-大奶子-",
        detail: "https://apidanaizi.com",
        adult: true,
    },
    jkunzyapi_com: {
        api: "https://jkunzyapi.com/api.php/provide/vod",
        name: "jkun资源",
        detail: "https://jkunzyapi.com",
        adult: true,
    },
    lbapi9_com: {
        api: "https://lbapi9.com/api.php/provide/vod",
        name: "乐播资源",
        detail: "https://lbapi9.com",
        adult: true,
    },
    naixxzy_com: {
        api: "https://Naixxzy.com/api.php/provide/vod",
        name: "奶香资源",
        detail: "https://Naixxzy.com",
        adult: true,
    },
    slapibf_com: {
        api: "https://beiyong.slapibf.com/api.php/provide/vod",
        name: "森林资源",
        detail: "https://slapibf.com",
        adult: true,
    },
    apilj_com: {
        api: "https://apilj.com/api.php/provide/vod",
        name: "辣椒资源",
        detail: "https://apilj.com",
        adult: true,
    },
    shayuapi_com: {
        api: "https://shayuapi.com/api.php/provide/vod",
        name: "鲨鱼资源",
        detail: "https://shayuapi.com",
        adult: true,
    },
    doudouzy_com: {
        api: "https://api.douapi.cc/api.php/provide/vod",
        name: "豆豆资源",
        detail: "https://doudouzy.com",
        adult: true,
    },
    didizy_com: {
        api: "https://api.ddapi.cc/api.php/provide/vod",
        name: "滴滴资源",
        detail: "https://didizy.com",
        adult: true,
    },
    heiliaozy_cc: {
        api: "https://www.heiliaozyapi.com/api.php/provide/vod",
        name: "黑料资源",
        detail: "https://heiliaozy.cc",
        adult: true,
    },
    thzy8_me: {
        api: "https://thzy1.me/api.php/provide/vod",
        name: "桃花资源",
        detail: "https://thzy8.me",
        adult: true,
    },
    jingpinx_com: {
        api: "https://www.jingpinx.com/api.php/provide/vod",
        name: "精品资源",
        detail: "https://www.jingpinx.com",
        adult: true,
    },
    ckzy_me: {
        api: "https://ckzy.me/api.php/provide/vod",
        name: "CK-资源",
        detail: "https://ckzy.me",
        adult: true,
    },
    souavzyw_com: {
        api: "https://api.souavzyw.net/api.php/provide/vod",
        name: "souavZY",
        detail: "https://api.souavzyw.net",
        adult: true,
    },
    xxibaozyw_com: {
        api: "https://www.xxibaozyw.com/api.php/provide/vod",
        name: "细胞资源",
        detail: "https://www.xxibaozyw.com",
        adult: true,
    },
    xiangjiaozyw_com: {
        api: "https://www.xiangjiaozyw.com/api.php/provide/vod",
        name: "香蕉资源",
        detail: "https://www.xiangjiaozyw.com",
        adult: true,
    },
    msnii_com: {
        api: "https://www.msnii.com/api/json.php",
        name: "-美少女-",
        detail: "https://www.msnii.com",
        adult: true,
    },
    pgxdy_com: {
        api: "https://www.pgxdy.com/api/json.php",
        name: "-黄AVZY",
        detail: "https://www.pgxdy.com",
        adult: true,
    },
    kxgav_com: {
        api: "https://www.kxgav.com/api/json.php",
        name: "白嫖资源",
        detail: "https://www.kxgav.com",
        adult: true,
    },
    xingba111_com: {
        api: "https://xingba222.com/api.php/provide/vod",
        name: "杏吧资源",
        detail: "https://xingba111.com",
        adult: true,
    },
    dadizy11_com: {
        api: "https://dadiapi.com/feifei",
        name: "大地资源",
        detail: "https://dadizy11.com",
        adult: true,
    },
    semaozy1_com: {
        api: "https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod",
        name: "色猫资源",
        detail: "https://semaozy1.com",
        adult: true,
    },
    aosikazy_com: {
        api: "https://aosikazy.com/api.php/provide/vod",
        name: "-奥斯卡-",
        detail: "https://aosikazy.com",
        adult: true,
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
