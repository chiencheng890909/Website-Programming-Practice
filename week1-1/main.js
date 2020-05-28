let pictures = ["assets/img/浪漫突進.png",
"assets/img/死而復生.png",
"assets/img/紳士決鬥.png"];

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-img").attr("src", pictures[randomChildNumber]);
    });
    $("#title").attr("src","assets/img/天公伯.jpg");
});


