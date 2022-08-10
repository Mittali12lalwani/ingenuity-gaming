
            var count=0;
            var ran=Math.floor(Math.random()*10);
            for(var i=1;i<=3;i++){
                var guessNo=prompt("Enter a number you want to guess between 0 and 10")
                document.write("<BR>Random Number "+ran +" ");
                    document.write("Guess Number "+guessNo);

                 
                    
                if(guessNo===ran){
                    confirm("<br>Guessed correct no in "+i+" times");
                    count++;
                    document.write("Congratulations! You want the game");
                    document.write
                    break;
                
                else{
                    alert("Guessed wrong no");
                   
                    document.write("<br>Wrong");
                }
               
            }
            if(count==0){
                document.write("<BR>Sorry, You loss this game");
                }
