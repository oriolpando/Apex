

function getStats(){
  
    $.ajax({ 
        type : "GET", 
        url : "https://public-api.tracker.gg/apex/v1/standard/profile/5/aleoriol", 
        headers: {'TRN-Api-Key': '1a8b1451-77c6-455d-84d9-88d1eb71ccf9', 'Access-Control-Allow-Origin': '*'},
        crossDomain: true,
        dataType: 'application/json; charset=utf-8',
        success : function(result) { 
            console.log(result);
    
        }, 
        error : function(result) { 
          console.log("fail")
        } 
      });

    window.open("/Apex/statsPage.html?param1=aleoriol")
}

