$(function(){
    let player1 = false;
    displayPlayer("Joueur 1");
    // id de la case cliquée
    // $("#jeu > div").one("click", function(){
    //     $(this).attr("id");
    // });

    $("#reset").click(function(){
        location.reload();
    });

    $("#jeu > div").one("click", function(){
        if(player1 === false) {
            $(this).addClass("player1"); 
            $(this).text("X");
            player1 = true;
            displayPlayer("Joueur 2");
        } else {
            $(this).addClass("player2");  
            $(this).text("O");
            player1 = false;
            displayPlayer("Joueur 1");
        }
        checkAlign();
    });


    function checkAlign() {

        // DIAGONALS
        if ($("#A").hasClass("player1") && $("#E").hasClass("player1") && $("#I").hasClass("player1")) 
            strikeThrough("#line1")
        
        else if ($("#A").hasClass("player2") && $("#E").hasClass("player2") && $("#I").hasClass("player2")) 
            strikeThrough("#line1")
        
        else if ($("#C").hasClass("player1") && $("#E").hasClass("player1") && $("#G").hasClass("player1")) 
            strikeThrough("#line2")
        
        else if ($("#C").hasClass("player2") && $("#E").hasClass("player2") && $("#G").hasClass("player2")) 
            strikeThrough("#line2")

        // ROWS
       else if ($("#A").hasClass("player1") && $("#B").hasClass("player1") && $("#C").hasClass("player1")) 
            strikeThrough("#line3")

        else if ($("#A").hasClass("player2") && $("#B").hasClass("player2") && $("#C").hasClass("player2")) 
            strikeThrough("#line3")
        
        else if ($("#D").hasClass("player1") && $("#E").hasClass("player1") && $("#F").hasClass("player1")) 
            strikeThrough("#line4")
        
        else if ($("#D").hasClass("player2") && $("#E").hasClass("player2") && $("#F").hasClass("player2")) 
            strikeThrough("#line4")
        
        else if ($("#G").hasClass("player1") && $("#H").hasClass("player1") && $("#I").hasClass("player1")) 
            strikeThrough("#line5")

        else if ($("#G").hasClass("player2") && $("#H").hasClass("player2") && $("#I").hasClass("player2")) 
            strikeThrough("#line5")

        // COLUMNS
        else if ($("#A").hasClass("player1") && $("#D").hasClass("player1") && $("#G").hasClass("player1")) 
            strikeThrough("#line6")
        
        else if ($("#A").hasClass("player2") && $("#D").hasClass("player2") && $("#G").hasClass("player2")) 
            strikeThrough("#line6")
        
        else if ($("#B").hasClass("player1") && $("#E").hasClass("player1") && $("#H").hasClass("player1")) 
            strikeThrough("#line7")
        
        else if ($("#B").hasClass("player2") && $("#E").hasClass("player2") && $("#H").hasClass("player2")) 
            strikeThrough("#line7")
        
        else if ($("#C").hasClass("player1") && $("#F").hasClass("player1") && $("#I").hasClass("player1")) 
            strikeThrough("#line8")
        
        else if ($("#C").hasClass("player2") && $("#F").hasClass("player2") && $("#I").hasClass("player2")) 
            strikeThrough("#line8")

        else
            return
    }
    
    function displayPlayer(playerName) {
        $("#playerDisplay").text(playerName);
    }


    function strikeThrough(lineId) {
        $("svg").css("display", "block");
        $(lineId).attr("stroke", "yellow");
        setInterval(function(){
            $(lineId).fadeOut(600).delay(300).fadeIn(600);
        });
    }


    
});  


