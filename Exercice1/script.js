class perso {
    constructor(name, health) {
    this.name = name;
    this.health = health;
    }
}

class parcours {
    constructor(feu, change){
        this.feu = feu;
        this.change = change;
    }
}


let personnage = new perso ("John", 10);
let trajet = new parcours (30,0,);  
let radio = ["Anissa - Wejdene","Die - Gazo","Emotif - PLK","Rappel - Gazo","Meuda - Tiakola"]; 
let rand = 0;
let rValue = '';




while (personnage.health > 0 && trajet.feu > 0){
    trajet.feu--;
    
    rand = Math.random() * 5 | 0 ;
    rValue = radio[rand];
    console.log(rValue)
    console.log('il reste',trajet.feu,'feu')
    if(rValue == "Anissa - Wejdene"){
        personnage.health --;
        trajet.change++;
        console.log('Santé mentale à',personnage.health)
    }if(personnage.health==0){
        console.log('explosion')
    }if(trajet.feu==0){
        console.log(personnage.name,'est bien arrivé et il lui a fallut',trajet.change,'changement de taxi pour y arriver')
    }
}
