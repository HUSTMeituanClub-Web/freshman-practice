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
let templatePost;

const posts = new ObserveList([
    {
        name: "Jack",
        avatar: "img/avatar/64978502_p8_master1200.jpg",
        time: "2017-11-15 16:56",
        text: "Emmmmmmmmm?",
        likeCount: randomInt(65536),
        commentCount: randomInt(1024),
        forwardCount: randomInt(2048)
    }
]);

window.addEventListener("load",function(){
    HTMLTemplate.Init();
    templatePost = document.getElementById("template-post");
    templatePost.dataSource = posts;    
});