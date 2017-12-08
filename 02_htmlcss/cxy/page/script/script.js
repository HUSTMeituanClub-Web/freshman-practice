class Post
{
    constructor(name, avatar, time, text, like, comment, forward)
    {
        this.name = name;
        this.avatar = avatar;
        this.time = time;
        this.text = text;
        this.likeCount = like;
        this.commentCount = comment;
        this.forwardCount = forward;
    }

    like()
    {
        
    }

    comment(name, text)
    {
        
    }

    forward(user)
    {
        
    }
}
function randomInt(max)
{
    return parseInt(Math.random() * max);
}
function loadPosts(count = 1)
{
    /*let request = new XMLHttpRequest();
    request.open("GET", "page.html", false);
    request.send();
    let htmlText = request.responseText;
    let htmlItem = htmlText.split("\r\n");*/
    let textItem = Words.split("\n");
    for (let i = 0; i < count; i++)
    {
        posts.add({
            name: nameList[randomInt(nameList.length)],
            avatar: avatarList[randomInt(avatarList.length)],
            time: formatTime(new Date(time -= randomInt(10000000))),
            text: textItem[randomInt(textItem.length)],
            likeCount: randomInt(65536),
            commentCount: randomInt(1024),
            forwardCount: randomInt(2048)
        });

    }
}
/**
 * 
 * @param {Date} date 
 */
function formatTime(date)
{
    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
}
let templatePost;
const avatarList = [
    "img/avatar/64978502_p1.png",
    "img/avatar/64978502_p11_master1200.jpg",
    "img/avatar/64978502_p10_master1200.jpg",
    "img/avatar/64978502_p12_master1200.jpg",
    "img/avatar/64978502_p13_master1200.jpg",
    "img/avatar/64978502_p14_master1200.jpg",
    "img/avatar/64978502_p15_master1200.jpg",
    "img/avatar/64978502_p16_master1200.jpg",
    "img/avatar/64978502_p17_master1200.jpg",
    "img/avatar/64978502_p18_master1200.jpg",
    "img/avatar/64978502_p19_master1200.jpg",
    "img/avatar/64978502_p20_master1200.jpg",
    "img/avatar/64978502_p21_master1200.jpg",
    "img/avatar/64978502_p22_master1200.jpg",
    "img/avatar/64978502_p23_master1200.jpg",
    "img/avatar/64978502_p24_master1200.jpg",
    "img/avatar/64978502_p25_master1200.jpg",
    "img/avatar/64978502_p26_master1200.jpg",
    "img/avatar/64978502_p27_master1200.jpg",
    "img/avatar/64978502_p28_master1200.jpg",
    "img/avatar/64978502_p29_master1200.jpg",
    "img/avatar/64978502_p2_master1200.jpg",
    "img/avatar/64978502_p31_master1200.jpg",
    "img/avatar/64978502_p32_master1200.jpg",
    "img/avatar/64978502_p33_master1200.jpg",
    "img/avatar/64978502_p34_master1200.jpg",
    "img/avatar/64978502_p30_master1200.jpg",
    "img/avatar/64978502_p4_master1200.jpg",
    "img/avatar/64978502_p5_master1200.jpg",
    "img/avatar/64978502_p6_master1200.jpg",
    "img/avatar/64978502_p7_master1200.jpg",
    "img/avatar/64978502_p3_master1200.jpg",
    "img/avatar/64978502_p8_master1200.jpg",
    "img/avatar/64978502_p9_master1200.jpg"
];
const nameList = [
    "BerryTree",
    "CherryGreen",
    "TheName",
    "Emmmmmm",
    "ASS_WE_CAN",
    "TheBoyNextDoor",
    "Girl",
    "Hentai"
]
const posts = new ObserveList();
let time = new Date().getTime();

window.addEventListener("load",function(){
    init();
    templatePost.dataSource = posts;    
});
function init()
{
    HTMLTemplate.Init();
    templatePost = document.getElementById("template-post");
    /**
     * Init effect
     */
    templatePost.onElementRendered.add(function (item)
    {
        $(item.firstElement, ".post-like").click(function (e)
        {
            if (item.dataSource.liked)
            {
                $(e.target).removeClass("liked");
                $(e.target).text(--item.dataSource.likeCount);
                item.dataSource.liked = false;
            }
            else
            {
                $(e.target).addClass("liked");
                $(e.target).text(++item.dataSource.likeCount);
                item.dataSource.liked = true;
            }
        });
        $(item.firstElement, ".post-text").text(item.dataSource.text);
        let height = $(item.firstElement).height();
        $(item.firstElement).css("height", "0");
        $(item.firstElement).css("opacity", "0");
        setTimeout(() =>
        {
            $(item.firstElement).css("transition", "height 0.3s, opacity 0.2s");
            $(item.firstElement).css("height", height + "px");
            setTimeout(() =>
            {
                $(item.firstElement).css("opacity", "1");
            }, 300);
        });
    });

    /**
     * Init posts
     */
    loadPosts(10);

    /**
     * Init auto-height textarea
     */
    let autoHeightTextarea = $("textarea.auto-height");
    for (let i = 0; i < autoHeightTextarea.length; i++)
    {
        let textarea = autoHeightTextarea[i];
        textarea.addEventListener("input", onTextAreaChanged);
        textarea.addEventListener("change", onTextAreaChanged);

        function onTextAreaChanged(e)
        {
            let transition = $(textarea).css("transition");
            $(textarea).css("transition", "none");
            let formalHeight = $(textarea).css("height");
            $(textarea).css("height", "0px");
            let height = textarea.scrollHeight;
            $(textarea).css("height", formalHeight);
            setTimeout(function ()
            {
                $(textarea).css("transition", transition);
                $(textarea).css("height", height + "px");
            });
        }
    }

    /**
     * Send post
     */
    $("#button-send-post").click(function (e)
    {
        let text = $("#post-textbox")[0].value;
        templatePost.onElementRendered = function (item)
        {
        };
        posts.insert({
            name: "SardineFish",
            avatar: "img/avatar/my-avatar.png",
            time: formatTime(new Date()),
            text: text,
            likeCount: 0,
            commentCount: 0,
            forwardCount: 0
        }, 0);
        $("#post-textbox")[0].value = "";
        $("#post-textbox").change();
    });

    window.addEventListener("scroll", function (e)
    {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight)
        {
            loadPosts(10);
        }
    });


    
}

const Words = "天地玄黄　宇宙洪荒\n\
日月盈昃　辰宿列张\n\
寒来暑往　秋收冬藏\n\
闰馀成岁　律吕调阳\n\
云腾致雨　露结为霜\n\
金生丽水　玉出崑冈\n\
剑号巨阙　珠称夜光\n\
果珍李柰　菜重芥姜\n\
海咸河淡　鳞潜羽翔\n\
龙师火帝　鸟官人皇\n\
始制文字　乃服衣裳\n\
推位让国　有虞陶唐\n\
吊民伐罪　周发殷汤\n\
坐朝问道　垂拱平章\n\
爱育黎首　臣伏戎羌\n\
遐迩壹体　率宾归王\n\
鸣凤在树　白驹食场\n\
化被草木　赖及万方\n\
盖此身发　四大五常\n\
恭惟鞠养　岂敢毁伤\n\
女慕贞絜　男效才良\n\
知过必改　得能莫忘\n\
罔谈彼短　靡恃己长\n\
信使可覆　器欲难量\n\
墨悲丝染　诗讃羔羊\n\
景行维贤　克念作圣\n\
德建名立　形端表正\n\
空谷传声　虚堂习听\n\
祸因恶积　福缘善庆\n\
尺璧非宝　寸阴是竞\n\
资父事君　曰严与敬\n\
孝当竭力　忠则尽命\n\
临深履薄　夙兴温凊\n\
似兰斯馨　如松之盛\n\
川流不息　渊澄取映\n\
容止若思　言辞安定\n\
笃初诚美　慎终宜令\n\
荣业所基　籍甚无竟\n\
学优登仕　摄职从政\n\
存以甘棠　去而益咏\n\
乐殊贵贱　礼别尊卑\n\
上和下睦　夫唱妇随\n\
外受傅训　入奉母仪\n\
诸姑伯叔　犹子比儿\n\
孔怀兄弟　同气连枝\n\
交友投分　切磨箴规\n\
仁慈隐恻　造次弗离\n\
节义廉退　颠沛匪亏\n\
性静情逸　心动神疲\n\
守真志满　逐物意移\n\
坚持雅操　好爵自縻\n\
都邑华夏　东西二京\n\
背邙面洛　浮渭据泾\n\
宫殿盘郁　楼观飞惊\n\
图写禽兽　画彩仙灵\n\
丙舍傍启　甲帐对楹\n\
肆筵设席　鼓瑟吹笙\n\
升阶纳陛　弁转疑星\n\
右通广内　左达承明\n\
既集坟典　亦聚群英\n\
杜稿锺隶　漆书壁经\n\
府罗将相　路侠槐卿\n\
户封八县　家给千兵\n\
高冠陪辇　驱毂振缨\n\
世禄侈富　车驾肥轻\n\
策功茂实　勒碑刻铭\n\
磻溪伊尹　佐时阿衡\n\
奄宅曲阜　微旦孰营\n\
桓公匡合　济弱扶倾\n\
绮回汉惠　说感武丁\n\
俊乂密勿　多士寔宁\n\
晋楚更霸　赵魏困横\n\
假途灭虢　践土会盟\n\
何遵约法　韩弊烦刑\n\
起翦颇牧　用军最精\n\
宣威沙漠　驰誉丹青\n\
九州禹迹　百郡秦并\n\
岳宗恒岱　禅主云亭\n\
雁门紫塞　鸡田赤城\n\
昆池碣石　巨野洞庭\n\
旷远绵邈　岩岫杳冥\n\
治本于农　务兹稼穑\n\
俶载南亩　我艺黍稷\n\
税熟贡新　劝赏黜陟\n\
孟轲敦素　史鱼秉直\n\
庶几中庸　劳谦谨敕\n\
聆音察理　鉴貌辧色\n\
贻厥嘉猷　勉其祗植\n\
省躬讥诫　宠增抗极\n\
殆辱近耻　林皋幸即\n\
两疏见机　解组谁逼\n\
索居闲处　沉默寂寥\n\
求古寻论　散虑逍遥\n\
欣奏累遣　戚谢欢招\n\
渠荷的历　园莽抽条\n\
枇杷晚翠　梧桐早凋\n\
陈根委翳　落叶飘飖\n\
游鲲独运　夌摩绛霄\n\
耽读玩市　寓目囊箱\n\
易輶攸畏　属耳垣墙\n\
具膳喰饭　适口充肠\n\
饱饫享宰　饥厌糟糠\n\
亲戚故旧　老少异粮\n\
妾御绩纺　侍巾帷房\n\
纨扇圆洁　银烛炜煌\n\
昼瞑夕寐　篮笋象床\n\
弦歌酒宴　接杯举觞\n\
矫首顿足　悦豫且康\n\
嫡后嗣续　祭祀烝尝\n\
稽颡再拜　悚惧恐惶\n\
笺牒简要　顾答审详\n\
骸垢想浴　执热愿凉\n\
驴骡犊特　骇跃超骧\n\
诛斩贼盗　捕获叛亡\n\
布射辽丸　嵇琴阮啸\n\
恬笔伦纸　钧巧任钓\n\
释纷利俗　并皆佳妙\n\
毛施淑姿　工颦妍笑\n\
年矢每催　曦晖朗耀\n\
琁玑悬斡　晦魄环照\n\
指薪脩祜　永绥吉劭\n\
矩步引领　俯仰廊庙\n\
束带矜庄　徘徊瞻眺\n\
孤陋寡闻　愚蒙等诮\n\
谓语助者　焉哉乎也";