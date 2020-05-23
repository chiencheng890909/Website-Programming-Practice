var player;
var currentPlay = 0;//紀錄目前是第幾首

//當API準備完成時
function onYouTubeIframeAPIReady(){
    console.log("onYouTubeIframeAPIReady!");

    player =new YT.Player("player",
    {
        height: "390",
        width: "640",
        videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0,
                "controls":0,
                "start":playTime[currentPlay][0],
                "end":playTime[currentPlay][1],
                "showinfo":0,//已廢除 無法關掉上方標題
                "rel":0,//已廢除
                "iv_load_policy":3
            },
            events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }
        }
    );
 }
//當播放器準備好時
function onPlayerReady(event){
    console.log("onPlayerReady!");

    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
//當播放器狀態改變時
function onPlayerStateChange(event){
    console.log(event);
    //當前秒數與預期結束秒數相等時 ,播下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        //正常播下一首
        if(currentPlay<playList.length-1){
            currentPlay++;
            console.log("First");
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"            
            });
        }else{
            console.log("Second");
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"            
            });
        }
    }
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
}