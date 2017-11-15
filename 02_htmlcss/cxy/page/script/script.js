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
    "VAN",
    "Dark"
]
const posts = new ObserveList();

window.addEventListener("load",function(){
    init();
    templatePost = document.getElementById("template-post");
    templatePost.dataSource = posts;    
});
function init()
{
    HTMLTemplate.Init();
    var time = new Date().getTime();
    for (let i = 0; i < 100; i++)
    {
        posts.add({
            name: nameList[randomInt(nameList.length)],
            avatar: avatarList[randomInt(avatarList.length)],
            time: formatTime(new Date(time -= randomInt(10000000))),
            text: "Emmmmmmmmm?",
            likeCount: randomInt(65536),
            commentCount: randomInt(1024),
            forwardCount: randomInt(2048)
        });
        
    }
    var autoHeightTextarea = $("textarea.auto-height");
    for (let i = 0; i < autoHeightTextarea.length; i++)
    {
        let textarea = autoHeightTextarea[i];
        textarea.addEventListener("input", function (e)
        {
            var transition = $(textarea).css("transition");
            $(textarea).css("transition", "none");
            var formalHeight = $(textarea).css("height");
            $(textarea).css("height", "0px");
            var height = textarea.scrollHeight;
            $(textarea).css("height", formalHeight);
            setTimeout(function ()
            {
                $(textarea).css("transition", transition);
                $(textarea).css("height", height + "px");
            });
        })
    }
}