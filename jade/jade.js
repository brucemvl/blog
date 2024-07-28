let grandeImg = document.querySelector(".grandeimg")
let mini = document.querySelector(".miniatures")
let next = document.getElementById("next")
    let prev = document.getElementById("prev")

let photos = [  "Jade1.jpg",
				"Jade2.jpg",
				"Jade3.jpg",
				"Jade4.jpg",
				"Jade5.jpg",
				"Jade6.jpg",
				"Jade7.jpg",
				"Jade8.jpg",
                "Jade9.jpg",
				"Jade10.jpg",
                "Jade11.jpg",
                "Jade12.jpg",
                "Jade13.jpg",
                "Jade14.jpg",
                "Jade15.jpg",
                "Jade16.jpg",
                "Jade17.jpg",
                "Jade18.jpg",
                "Jade19.jpg",
                "Jade20.jpg",
                "Jade21.jpg",
                "Jade22.jpg",
                "Jade23.jpg",
                "Jade24.jpg",
                "Jade25.jpg",
                "Jade26.jpg",
                "Jade27.jpg",
                "Jade28.jpg",
                "Jade29.jpg",
                "Jade30.jpg",
                "Jade31.jpg",
                "Jade32.jpg",
                "Jade33.jpg",
                "Jade34.jpg",
                "Jade35.jpg",
                "Jade36.jpg",
                "Jade37.jpg",
                "Jade38.jpg",
                "Jade39.jpg",
                "Jade40.jpg",
			]


function genererImage(){
   
    
    for(let i=0; i<photos.length; i++){
    
    let miniatures = document.createElement("img")
    
	miniatures.setAttribute("src", photos[i])
	mini.appendChild(miniatures)


    const imageElement = document.createElement("img")
    imageElement.src = photos[i]
    

    
    	miniatures.addEventListener("click", (e)=>{
            
		console.log("jai clique sur la" + " "+ photos[i])
		grandeImg.innerHTML = ""
		grandeImg.appendChild(imageElement)
        console.log(e.target.src)
        
        next.addEventListener("click", (e)=>{
            i++
            imageElement.src = photos[i]            
           
            console.log([i])
            if(photos[i] === undefined){
                i = -1
            }
            else{}
        })

        prev.addEventListener("click", ()=>{
            i--
            imageElement.src = photos[i]
            console.log([i])

            if(photos[i] === undefined){
                i = photos.length
            }
            else{}
        })
        
        
        
         })


        

        


   }
   
  
  
   }
   
   
   genererImage()
   
