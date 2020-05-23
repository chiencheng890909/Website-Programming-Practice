let topicsArray = [
    "課程介紹",
    "隨機性",
    "不上課",
    "日期時間",
    "不上課",
    "條件判別",
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略,設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
let date = document.getElementById('date');
//指定第一天