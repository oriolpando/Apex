var page = 1;




window.onload = function(){

  if(localStorage.getItem("user") != undefined){
    document.getElementById('user').innerHTML = localStorage.getItem("user");
    
    
    console.log(localStorage.getItem("kills"));
    console.log(localStorage.getItem("rank"));
    console.log(localStorage.getItem("legend"));




  }
}

window.closed = function(){
  localStorage.clear();

}

function getUser(){
  let user = $('#user').val();

  let plat = $('#pc:checked').val();

  if (plat == undefined){
    plat = $('#psn:checked').val();
    if (plat == undefined){
      plat = $('#xbox:checked').val();
    }
  }

  if (user != ''){
    $.ajax({ 
        type : "GET", 
        url : "https://apextab.com/api/search.php?platform=" + plat +"&search=" + user, 
        cache : true,
        jsonp: false,
        success : function(result) { 
          getStats(result.results[0].aid);
        }
      });
    }else{
      console.log("Buit!!");

    }
    
 }
function getStats(aid){
  
    $.ajax({ 
        type : "GET", 
        url : "https://apextab.com/api/player.php?aid=" + aid, 
        cache : true,
        jsonp: false,
        success : function(result) { 
          console.log(result);
          
          localStorage.setItem("kills","result.kills_" + result.legend);
          localStorage.setItem("user", result.name);
          localStorage.setItem("legend", result.legend);
          localStorage.setItem("rank", result.globalrank);
          window.location.href = "statsPage.html";

        }
      });

    
}

