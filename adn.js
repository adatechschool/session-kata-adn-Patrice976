//récupération dans le code du contenu du fichier avec tout les nucléotides 
import { nucleotideList } from "./nucleotidesList.js";

//tout les trois éléments 

let proteinCode = []

let nucleotidesArray = []

let counter = 1

for (let index = 0; index < nucleotideList.length; index++) {

    //Etape : 1 créer un tableau à 3 injection 
    console.log("ETAPE 1")
    console.log("compteur",counter)

    let nucleotide = nucleotideList[index]

    proteinCode.push(nucleotide)

    console.log(proteinCode)

    if (counter == 3) {
    // Etape 2: injecter dans un tableau global 
        console.log("ETAPE 2")
        nucleotidesArray.push(proteinCode)
        proteinCode = []
        counter = 0
        console.log(nucleotidesArray)
    }
    counter = counter + 1 
}





//Crée un tableau avec ces dernier à l'intérieu 
