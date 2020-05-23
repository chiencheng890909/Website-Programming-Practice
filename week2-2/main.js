$(document).ready(function(){
    let currentQuiz=null;

    //click事件
    $("#startButton").click(function(){
        if(currentQuiz==null){
            //一開始開始時
            currentQuiz=0;

            //讀出題目
            $("#question").text(questions[0].question);

            //清空選項
            $("#options").empty();

            //加入選項
            for(let x=0;x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+"</input>"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value","Next");
        }else{
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        //偵測是否是結果
                        if(isNaN(questions[currentQuiz].answers[i][1])){

                            let finalResult = questions[currentQuiz].answers[i][1];

                            $("#question").text(finalAnswers[finalResult][0]);
                            
                            $("#options").empty();
                            
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");

                            currentQuiz=null;

                            $("#startButton").attr("value","Restart");
                        }else{
                            currentQuiz=questions[currentQuiz].answers[i][1]-1;
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();

                            for(let x=0;x<questions[currentQuiz].answers.length;x++){
                                $("#options").append(
                                    "<input name='options' type='radio' value="+
                                    x+"</input>"+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                        }
                        return false;
                    }
                }
            );
        }
    });
});

