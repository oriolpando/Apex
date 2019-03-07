
function getStats(){

  
    $.ajax({ 
        type : "GET", 
        url : "https://www.apexlegendshut.com/free-api?platform=PC&title=Aleoriol", 
        dataType: "json",
        success : function(result) { 
          var player = JSON.parse(result);
            console.log(player);
    
        }
      });

    //window.location.href = "statsPage.html?param1=aleoriol";
    
}

