let lien = document.querySelector(".coeur");

function password(){
    let mdp = prompt("mot de passe :")
// si le mot de passe est correct la page bravo.html s'ouvre
    if (mdp === "poulet")
    {
        location.href = "jade.html"
    }
    // si l'utilisateur n'a rien tapé on le lui signifie puis lui repropose de taper le mot de passe a 3 reprises
    else if (mdp === ""){
        for(let i=0;i<3;i++){
       alert("Vous n'avez rien entré");
       
       prompt("mot de passe :")
       }
    }
    // si le mot de passe est incorrect un message apparait 
    else {
alert("Mot de passe incorrect")
    }
}
lien.addEventListener('click', password)