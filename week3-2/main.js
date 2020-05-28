let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain,imgEnemy;
let HP =5;
$("#hp").text("血量: "+HP);

$(document).ready(function(){
    //3 敵人
    mapArray=[0,1,3,2,1,2,1,3,4];
    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "week3-2/images/maplestory.gif";
    
    currentImgMainX = 0;
    currentImgMainY = 0 ;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,200,200,currentImgMainX,currentImgMainY,200,200);
    };
    imgPrincess = new Image();
    imgPrincess.src = "week3-2/images/maplestory-1.gif";

    imgEnemy = new Image();
    imgEnemy.src = "week3-2/images/Enemy.png";
    imgPrincess.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==4){
                    ctx.drawImage(imgPrincess,0,0,200,200,x%3*200,Math.floor(x/3)*200,200,200);
                }
                else if(mapArray[x]!=0){
                    ctx.drawImage(imgEnemy,0,0,200,200,x%3*200,Math.floor(x/3)*200,200,200);
                }  
            }
        };
    };
});

$(document).keydown(function(event){
    
    let targetImgMainX, targetImgMainY,targetBlock,cutImagePositionX;
    //移動的目標位置X 移動的目標位置Y 該位置編號 朝向方向
    event.preventDefault();//消除鍵盤操控網站滾動
    
    //console.log(event.code);
    console.log(event.originalEvent.code);

    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImgMainX=currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX=0;
            break;
        case "ArrowUp":
            targetImgMainX=currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX=0;
            break;
        case "ArrowRight":
            targetImgMainX=currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX=0;
            break;
        case "ArrowDown":
            targetImgMainX=currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:    //其餘不進行
            return;
    }
    //偵測是否出界
    if(targetImgMainX<=400&&targetImgMainX>=0&&
        targetImgMainY<=400&&targetImgMainY>=0){
            targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else{
        targetBlock=-1;
    }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);

    if(targetBlock==-1){

    }else{
        $("#talkBox").empty();
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    ctx.drawImage(imgMain,cutImagePositionX,0,200,200,currentImgMainX,currentImgMainY,200,200);

    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("什麼事都沒發生");
            break;
        case 2:
            $("#talkBox").text("受到怪物攻擊，扣除2點血量");
            HP-=2;
            $("#hp").text("血量: "+HP);
            mapArray[targetBlock]=5;
            if(HP<=0){
                window.alert("血量歸0，挑戰失敗！")
                window.location.reload("#")
            }    
            break;
        case 3:
            $("#talkBox").text("受到怪物攻擊，扣除3點血量");
            HP-=3;
            $("#hp").text("血量: "+HP);
            mapArray[targetBlock]=0;
            if(HP<=0){
                window.alert("血量歸0，挑戰失敗！")
                window.location.reload("#")
            }  
            break;
        case 4:
            $("#talkBox").text("恭喜你找到屬與你的公主");
            window.alert("找到公主，挑戰成功！")
            window.location.reload("#")
        case 5:
            $("#talkBox").text("原先的怪物早已離去");
            break;
}
});
