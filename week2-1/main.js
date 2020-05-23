


$(document).ready(function(){

    setTable();
 
    //如果有人來設定日期
    $("#dateChoice").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        //console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
 
});
 
function setTable(){
    
    //清空table內的東西
    $("#courseTable").empty();
    
    //產生標題
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

//反覆產生資料列
    let topicCount = topicsArray.length;

//計算一天有多少毫秒
let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial ="<td>";
        if(topicsArray[x]=="不上課"){
            trSpecial="<td style='background-color:lightyellow'>";
        }
            $("#courseTable").append(
                "<tr>"+
                trSpecial+ (x+1) +"</td>"+
                trSpecial + thisDate.toLocaleDateString().slice(5)+"</td>"+
                trSpecial + topicsArray[x] +"</td>"+
                "</tr>"
            );
        }
        
};