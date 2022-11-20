class persoT {
    constructor(name, health) {
    this.name = name;
    this.health = health;
    }
}

//class persoS{
    //constructor(name,probaM,probaD,probaMD){
        //this.name = name;
        //this.probaM = probaM;
        //this.probaD = probaD;
        //this.probaMD = probaMD;
    //}
//}

let tueur = new persoT ("Jason",100);
let Sname = ["Le blond","Le vieux","Le jeune","Le gros","Le petit","La masse","Le trouillard","Le BG","Le courageux","Le chef"]
let nbVivant = 5
let rand = 0;
let rValue = '';
let survivant = [
    ['',0.3,0.5,0.2,"vivant"],
    ['',0.2,0.4,0.4,"vivant"],
    ['',0.4,0.4,0.2,"vivant"],
    ['',0.2,0.6,0.2,"vivant"],
    ['',0.2,0.5,0.3,"vivant"],
];

// Choix aleatoire des noms des survivants //
console.log("Les combattants sont :")
for (let x =0; x < survivant.length; x++){ 
    rand = Math.random() * 10 | 0 ;
    rValue = Sname[rand];

    if (rValue != "deja pris") {
        survivant[x][0] = rValue;
        console.log(survivant[x][0])
        Sname[rand] = "deja pris";
        
    } else {
        x = x - 1;
        }
};

// Debut des combats //
let x = 0;
while (tueur.health > 0 && nbVivant > 0){
    if (survivant[x][4] = "vivant") {

        console.log("Combat avec : ",survivant[x][0])
        rand = Math.random();
        console.log("Score Probabilité : ", rand)

        //mort directe ?
        if(rand < survivant[x][1]){
            console.log("mort directe")
            console.log("Jason a tué", survivant[x][0] )
            nbVivant -- ;
            survivant[x][4] = "mort"
        }else {
            console.log("pas mort directement")
            // Esquive et blesse le tueur 
            if(rand > survivant[x][1] + survivant[x][2]){
                console.log(survivant[x][0], "a esquivé et blesse Jason de 10 points de vie")
                tueur.health = tueur.health - 10
            // blesse le tueur mais meurt
            }else {
                console.log(survivant[x][0]," blesse Jason de 15 points de vie mais meurt")
                console.log("Jason a tué", survivant[x][0] )
                nbVivant -- ;
                survivant[x][4] = "mort"
                tueur.health = tueur.health - 15
        }
        
} 
// Combattant suivant s il reste des vivants
if (x < 4){
    x = x + 1
    // console.log("Nouveau combattant n° :", x)
}else { x = 0}
}
}

if (tueur.health < 1) {
    console.log("EXPLOSION Jason est mort") 
}else {console.log("Il reste à Jason des points de vie : ", tueur.health)}

if (nbVivant < 1) {
    console.log("Jason a tué tous les combattants")
}else {
    console.log("Les survivant sont : ") 
    for (let x =0; x < survivant.length; x++)
    if (survivant[x][4] = "vivant"){ 
        console.log(survivant[x][0])
}}