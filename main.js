

function getStats(){
  
    $.ajax({ 
        type : "GET", 
        url : "https://public-api.tracker.gg/apex/v1/standard/profile/5/aleoriol", 
        headers: {'TRN-Api-Key': '1a8b1451-77c6-455d-84d9-88d1eb71ccf9'},
        success : function(result) { 
            console.log(result);
    
        }, 
        error : function(result) { 
          //handle the error 
        } 
      }); 
}

