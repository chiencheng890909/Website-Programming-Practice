let pictures = ["https://uc.udn.com.tw/photo/2019/12/11/realtime/7183211.jpg",
"https://tokyo-kitchen.icook.network/cdn-cgi/image/cover/uploads/recipe/cover/180386/5775fef312fbf3e3.jpg",
"https://linky.tw/wp/wp-content/uploads/2018/06/57eca2287749c_1024-1000x600.jpg"];

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-img").attr("src", pictures[randomChildNumber]);
    });
});
