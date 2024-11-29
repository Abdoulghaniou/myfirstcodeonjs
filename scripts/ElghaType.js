function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}
 
 function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}
// initial

function lancerJeu(){
    
    let Score = 0
    let i = 0

    let btnmotValider = document.getElementById("btnmotValider")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listMots[i])
    btnmotValider.addEventListener ("click", () =>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === listMots[i]){
            Score++
        }
        i++
        afficherResultat(Score,i)
        inputEcriture.value = ''
        if(listMots[i] === undefined){
            afficherProposition("fin du jeu")
            btnmotValider.disabled = true
        }else{
            afficherProposition(listMots[i]) 
        }
       
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            // Si c'est le premier élément qui a été modifié, alors nous voulons
            // jouer avec la listeMots. 
            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {
                // Sinon nous voulons jouer avec la liste des phrases
                listeProposition = listePhrases
            }
            // Et on modifie l'affichage en direct. 
            afficherProposition(listeProposition[i])
        })
    }

    afficherResultat(Score, i)
    
}





