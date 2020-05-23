let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain,imgEnemy;



$(document).ready(function(){
    //0,1 可走,2 終點,3 敵人
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "week3-2/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    
    imgMountain = new Image();
    imgMountain.src = "week3-2/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "week3-2/images/Enemy.png";

    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray){
                if(mapArray[x]==1){
                    ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }  
            }
        };
    };
});

$(document).keydown(function(event){
    
    let targetImgMainX, targetImgMainY,targetBlock,cutImagePositionX;
    //移動的目標位置X 移動的目標位置Y 該位置編號 朝向方向
    event.preventDefault();//消除鍵盤操控網站滾動
    
   // console.log(event.code);
    console.log(event);

    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImgMainX=currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX=175;
            break;
        case "ArrowUp":
            targetImgMainX=currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case "ArrowRight":
            targetImgMainX=currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX=540;
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

    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3){

    }else{
        $("#talkBox").empty();
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }

    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);

    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;

        case 1:
            $("#talkBox").text("有山");
            break;

        case 2:
            $("#talkBox").text("抵達終點");
            break;

        case 3:
            $("#talkBox").text("哈摟");
            break;
    }
});
