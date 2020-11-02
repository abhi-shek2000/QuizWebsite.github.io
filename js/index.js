var playing = false;
var score = 0;
var timeremaining = 30;
var action;
var b;
var a;
var c;
var i = 0;
var cnt=0;
var d;
var min = 1;
var max = 20;
var q_num=1;
var arr_qnum = [1];
document.getElementById("startreset").onclick = function(){
    if(playing==true){
        location.reload(); //reloading
    }
    else{
        playing = true;
        score=0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 30;
        document.getElementById("timeremaingvalue").innerHTML = timeremaining;
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset";
        startcountdown();
        generateQ(q_num);
    }
}
    
    
    function startcountdown(){
        action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timeremaingvalue").innerHTML = timeremaining;
            if(timeremaining == 0){
                stopcount();
                show("gameover");
                document.getElementById("scorevalue2").innerHTML = "YOUR SCORE IS "+ score + "";
                hide("timeremaining");
                hide("correct");
                hide("WRONG");
               // playing = false;
                document.getElementById("startreset").innerHTML = "Start";
                setTimeout(function(){location.reload();},20000);
            }
        }, 1000 ) ;
    }

    function stopcount(){
        clearInterval(action);
    }

    function hide(id){
        document.getElementById(id).style.display = "none";
    }

    function show(id){
        document.getElementById(id).style.display = "block";
    }
    function generateQ(q_num){
        switch(q_num){
            case 1 : 
                document.getElementById("question").innerHTML = "Prime Minister of INDIA ? ";
                filloptions();
                document.getElementById("box"+a+"").innerHTML="Raj Thakare";
                document.getElementById("box"+b+"").innerHTML="Narendra Modi";
                document.getElementById("box"+c+"").innerHTML="Ram Nath Kovind";
                document.getElementById("box"+d+"").innerHTML="Donald Trump";
                checkA();
                break;
            case 2 :
                document.getElementById("question").innerHTML = "Highest Peak in the World ?";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Mt Everest";
                document.getElementById("box"+a+"").innerHTML="Mt Kalsubai";
                document.getElementById("box"+c+"").innerHTML="Mt Kanchenjunga";
                document.getElementById("box"+d+"").innerHTML="Mt Goving-Austen";
                checkA();
                break;
            case 3 :
                document.getElementById("question").innerHTML = "25 X 25 ?";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="625";
                document.getElementById("box"+a+"").innerHTML="525";
                document.getElementById("box"+c+"").innerHTML="725";
                document.getElementById("box"+d+"").innerHTML="675";
                checkA();
                break;
            case 4 : 
                document.getElementById("question").innerHTML = "Integration of sin(x) ?";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="-cos(x) + c";
                document.getElementById("box"+a+"").innerHTML="-cos(x)";
                document.getElementById("box"+c+"").innerHTML="cos(x)";
                document.getElementById("box"+d+"").innerHTML="-sin(x)";
                checkA();
                break;
            case 5 :
                document.getElementById("question").innerHTML = "President of INDIA ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Ramnath Kovind";
                document.getElementById("box"+a+"").innerHTML="Pranab Mukharjee";
                document.getElementById("box"+c+"").innerHTML="Pratibha Patil";
                document.getElementById("box"+d+"").innerHTML="Narendra Modi";
                checkA();
                break;
            case 6 :
                document.getElementById("question").innerHTML = "Capital of INDIA ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="New Delhi";
                document.getElementById("box"+a+"").innerHTML="Delhi";
                document.getElementById("box"+c+"").innerHTML="Mumbai";
                document.getElementById("box"+d+"").innerHTML="Agra";
                checkA();
                break;
            case 7 :
                document.getElementById("question").innerHTML = "Founder of Amazon ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Jeff Bezox";
                document.getElementById("box"+a+"").innerHTML="Steve Jobs";
                document.getElementById("box"+c+"").innerHTML="Mark Zukerburg";
                document.getElementById("box"+d+"").innerHTML="Mukesh Ambani";
                checkA();
                break;
            case 8 :
                document.getElementById("question").innerHTML = "When was INDIA declared Republic ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="26Jan 1950";
                document.getElementById("box"+a+"").innerHTML="26Jan 1953";
                document.getElementById("box"+c+"").innerHTML="26Jan 1951";
                document.getElementById("box"+d+"").innerHTML="26Jan 1947";
                checkA();
                break;
            case 9 :
                document.getElementById("question").innerHTML = "First Prime Minister of INDIA ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Jawaharlal Nehru";
                document.getElementById("box"+a+"").innerHTML="M.C Gandhi";
                document.getElementById("box"+c+"").innerHTML="Indira Gandhi";
                document.getElementById("box"+d+"").innerHTML="LalBahadur Shastri";
                checkA();
                break;
            case 10 :
                document.getElementById("question").innerHTML = "Founder Of TESLA MOTORS ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Elon Musk";
                document.getElementById("box"+a+"").innerHTML="Ratan Tata";
                document.getElementById("box"+c+"").innerHTML="Karl Benz";
                document.getElementById("box"+d+"").innerHTML="Chung Ju-yung";
                checkA();
                break;
            case 11 :
                document.getElementById("question").innerHTML = "1111 X 1111 ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="1,24,321";
                document.getElementById("box"+a+"").innerHTML="12,321";
                document.getElementById("box"+c+"").innerHTML="121";
                document.getElementById("box"+d+"").innerHTML="12,34,54,321";
                checkA();
                break;
            case 12 :
                document.getElementById("question").innerHTML = "Second HUMAN To land on MOON ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Edwin Aldrin";
                document.getElementById("box"+a+"").innerHTML="Niel Armstrong";
                document.getElementById("box"+c+"").innerHTML="Kalpana Chawala";
                document.getElementById("box"+d+"").innerHTML="No One";
                checkA();
                break;
            case 13 :
                document.getElementById("question").innerHTML = "One of the Founders Of apple ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Steve Wozniak";
                document.getElementById("box"+a+"").innerHTML="Steve Washinton";
                document.getElementById("box"+c+"").innerHTML="Steve Holmes";
                document.getElementById("box"+d+"").innerHTML="Steve Wayne";
                checkA();
                break;
            case 14 :
                document.getElementById("question").innerHTML = "Biggest Ocean ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Pacific Ocean";
                document.getElementById("box"+a+"").innerHTML="Atlantic Ocean";
                document.getElementById("box"+c+"").innerHTML="Indian Ocean";
                document.getElementById("box"+d+"").innerHTML="Antartic Ocean";
                checkA();
                break;
            case 15 :
                document.getElementById("question").innerHTML = "When did World War II start ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="1939";
                document.getElementById("box"+a+"").innerHTML="1940";
                document.getElementById("box"+c+"").innerHTML="1938";
                document.getElementById("box"+d+"").innerHTML="1941";
                checkA();
                break;
            case 16 :
                document.getElementById("question").innerHTML = "Second Last Planet of Solar System ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Uranus";
                document.getElementById("box"+a+"").innerHTML="Neptune";
                document.getElementById("box"+c+"").innerHTML="Mercury";
                document.getElementById("box"+d+"").innerHTML="Jupiter";
                checkA();
                break;
            case 17 :
                document.getElementById("question").innerHTML = "Capital of ENGLAND ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="London";
                document.getElementById("box"+a+"").innerHTML="Paris";
                document.getElementById("box"+c+"").innerHTML="France";
                document.getElementById("box"+d+"").innerHTML="Washington D.C";
                checkA();
                break;
            case 18 :
                document.getElementById("question").innerHTML = "First President of INDIA ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="Rajendra Prasad";
                document.getElementById("box"+a+"").innerHTML="Dr. A.P.J Ab kalam";
                document.getElementById("box"+c+"").innerHTML="Jawaharlal Nehru";
                document.getElementById("box"+d+"").innerHTML="Vallabhbhai Patel";
                checkA();
                break;
            case 19 :
                document.getElementById("question").innerHTML = "India won WORLD-CUP(cricket) in ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="1983 & 2011";
                document.getElementById("box"+a+"").innerHTML="1983 & 2012";
                document.getElementById("box"+c+"").innerHTML="1993 & 2011";
                document.getElementById("box"+d+"").innerHTML="1993 & 2012";
                checkA();
                break;
            case 20 :
                document.getElementById("question").innerHTML = "First President of USA ? ";
                filloptions();
                document.getElementById("box"+b+"").innerHTML="George Washington";
                document.getElementById("box"+a+"").innerHTML="Barack Obama";
                document.getElementById("box"+c+"").innerHTML="Donald Trump";
                document.getElementById("box"+d+"").innerHTML="Abraham Lincoln";
                checkA();
                break;
        }
        
    }
    function filloptions(){
        b = Math.floor(Math.random()*4);
        do{
            a = Math.floor(Math.random()*4);
            c = Math.floor(Math.random()*4);
            
            d = Math.floor(Math.random()*4);
        }while(a == b || c == b || d == b || a == c || a == d || c == a || c==d || d==a || d==c);
  //      window.console.log(b);
//        window.console.log(a);
//        window.console.log(c);
//        window.console.log(d);
    }

    function checkA(){
        document.getElementById("box"+b+"").onclick = function(){
                    document.getElementById("correct").style.display = "block";
                    setTimeout(function(){document.getElementById("correct").style.display = "none";},2000);
                    score += 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    do{
                        q_num = Math.floor((Math.random() * (max - min) + min));
                        i += 1;
                    }while(q_num == arr_qnum[i]);
                    cnt += 1;
                    arr_qnum.push(q_num);
                    window.console.log(q_num);
                    generateQ(q_num);
//                    window.console.log(q_num);
                }
        document.getElementById("box"+a+"").onclick = function(){
                    show("WRONG");
                    setTimeout(function(){document.getElementById("WRONG").style.display = "none";},2000);
                    score -= 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    return;
        }
        document.getElementById("box"+c+"").onclick = function(){
                    show("WRONG");
                    setTimeout(function(){document.getElementById("WRONG").style.display = "none";},2000);
                    score -= 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    return;
        }
        document.getElementById("box"+d+"").onclick = function(){
                    show("WRONG");
                    setTimeout(function(){document.getElementById("WRONG").style.display = "none";},2000);
                    score -= 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    return;
        }
    }