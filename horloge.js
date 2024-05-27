function horloge(){
          let date = new Date();
		  let dateJ =date.getDate() + '/' + '0' + (date.getMonth()+1)+ '/' + date.getFullYear();
          document.querySelector(".date").innerHTML = dateJ;
		  let heure = new Date();
var dateH = heure.getHours() + ":" + heure.getMinutes() + ":" + heure.getSeconds();
document.querySelector(".heure").innerHTML = dateH;
          setTimeout(horloge, 1000);}