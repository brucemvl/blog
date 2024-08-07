function horloge(){
          let date = new Date();
		  let dateJ =date.getDate() + '/' + '0' + (date.getMonth()+1)+ '/' + date.getFullYear();
          document.querySelector(".date").innerHTML = dateJ;
		  let heure = new Date();
var dateH = heure.getHours() + ":" + heure.getMinutes() + ":" + heure.getSeconds();
document.querySelector(".heure").innerHTML = dateH;
          setTimeout(horloge, 1000);}

          //photo aleatoire banniere
		let banniere = document.querySelector(".banniere")
		let photosBan = [
			"mada.jpg",
			"mada2.jpg",
			"mada3.jpg",
			"mada4.jpg",
			"mada5.jpg",
			"mada6.jpg",
			"mada7.jpg"
		]

		function aleatoire(max) {
			return Math.floor(Math.random() * max)
		}
		
		//banniere.style.backgroundImage = `url(${randomPhoto})`

		function change() {
			let random = aleatoire(photosBan.length)
		let randomPhoto = photosBan[random]
			banniere.style.backgroundImage = `url(${randomPhoto})`
			setTimeout(change, 7000)
			banniere.style.transitionDuration = "2000ms"


		}


        function init(){
            horloge()
            change()
        }