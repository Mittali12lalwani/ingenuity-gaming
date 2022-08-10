var count=0;
var ran=Math.floor(Math.random()*10);
var c=0;
            for(var i=1;i<=3;i++){
                var guessNo=parseInt(prompt("Enter number you want"));
                
                if(guessNo===ran){
                    confirm("<br>Guessed correct no in "+i+" times");
                    document.write("<br>Congratulations! You won the game");
                    document.write("<BR>Random Number "+ran +" ");
                    document.write("Guess Number "+guessNo);
                    c++;
                    break;
                }
               
                else{
                    alert("Guessed wrong no");
                   
                    // document.write("<br>Wrong");
                }
              
            } 
            if(c==0)
            {
                document.write("Lost Game");
            }
            
            
                
