//récupération dans le code du contenu du fichier avec tout les nucléotides 
import { nucleotideList } from "../données/nucleotidesList.js";
import {convertToProtein} from "../données/conversionToProtein.js"


                                        // Fonction pour écouper le la liste de nucléotide en tableau de 3 éléments // 
export function cutTheList(nbelement) {
let proteinCode = [] //tableau pour les 3 nuclotides

let nucleotidesArray = [] //tableau global

let counter = 1 //compteur pour gérer le nombre d'élément à injecter 

for (let index = 0; index < nucleotideList.length; index++) {

    //Etape : 1 créer un tableau à 3 injection 
    let nucleotide = nucleotideList[index]

    proteinCode.push(nucleotide)

    if (counter == nbelement) { //condition pour n'injecter que 3 nucléotides 
    // Etape 2: injecter dans un tableau global 
        nucleotidesArray.push(proteinCode)
        proteinCode = []
        counter = 0
    }
    counter = counter + 1 //incrémentation du compteur 
}
return nucleotidesArray
}

// fonction pour convertir les associations de nucléotide en une string représentant la protéine 
export function proteinId(nbelement,nbsequence) {
    let nucleotidesArray = cutTheList(nbelement)
    let protein =''
    for (let index = 0; index < nucleotidesArray.length; index++) {
        const clue = nucleotidesArray[index].join("");
        protein = protein + convertToProtein[clue] 
        
    }
    return protein
}


