//patient
class patient {
    constructor(nom,maladie,argent,poche,etatDeSante,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = [];
        this.etatDeSante = etatDeSante; 
        this.traitement = traitement;      
    }
    goTo(pax, lieux){
        pax.push(lieux);
    }
    takeCare(element){
        if(this.poche.length==0){
            this.poche.push(element);
        }else{
            this.poche.pop(element);
        }
    }
    paye(prix, creancier){
        this.argent-=prix;
        creancier+=prix;
    }
}

//variable patient
let marcus = new patient('Marcus','Mal indenté',100,'vide','malade');
let optimus = new patient('Optimus','Unsave',200, 'vide','malade');
let sangoku = new patient('Sangoku','404', 80, 'vide', 'malade');
let darthvader = new patient('DarthVader','Azmatique',110,'vide','malade');
let semicolon = new patient('Semicolon','syntaxError',60,'vide','malade');

//docteur
let docteur ={
    nom:"",
    argent:0,
    cabinet:["Sphynx", ],
    diagnostique(pax){
        switch (pax.maladie){
            case "Mal indenté":
                console.log('Votre diagnostique est le suivant : ${patient.maladie}, Voici votre traitement');
                if(pax.argent>=50){
                    pax.paye(50, this.argent);
                    pax.takeCare('ctrl+maj+f');
                }else{
                    console.log("Je ne peux vous donnez la préscription sans paiement");
                }
                break;
            case "Unsave":
                console.log('Votre diagnostique est le suivant : ${patient.maladie}, Voici votre traitement');
                if(pax.argent>=50){
                    pax.paye(50, this.argent);
                    pax.takeCare('saveOnFocusChange');
                }else{
                    console.log("Je ne peux vous donnez la préscription sans paiement");}
                    break;
            case "404":
                console.log('Votre diagnostique est le suivant : ${patient.maladie}, Voici votre traitement');
                if(pax.argent>=50){
                    pax.paye(50, this.argent);
                    pax.takeCare('CheckLinkRelation');
                }else{
                    console.log("Je ne peux vous donnez la préscription sans paiement"); }              break;
            case "Azmatique":
                console.log('Votre diagnostique est le suivant : ${patient.maladie}, Voici votre traitement');
                if(pax.argent>=50){
                    pax.paye(50, this.argent);
                    pax.takeCare('Ventoline');
                }else{
                    console.log("Je ne peux vous donnez la préscription sans paiement"); }
                break;
            case "syntaxError":
                console.log('Votre diagnostique est le suivant : ${patient.maladie}, Voici votre traitement');
                if(pax.argent>=50){
                    pax.paye(50, this.argent);
                    pax.takeCare('f12+doc');
                }else{
                    console.log("Je ne peux vous donnez la préscription sans paiement");}                break;
            default:
                console.log('Vous êtes en bonne santé !');
                break;
        }
    },
    patientIn(pax){
        this.cabinet.push(pax);
    },
    patientOut(pax){
        this.cabinet.pop(pax);
    },
}

//pharmacie
let pharmacie ={
    caisse:0,
    medoc(pax){
        switch (pax.maladie){
            case "ctrl+maj+f":
                if(pax.argent>=60){
                    pax.paye(60, this.caisse);
                    pax.poche.pop('ctrl+maj+f');
                    console.log('Voici votre médicament');
                    pax.etatDeSante == 'bonne santé';
                }else{
                    console.log("Vous n'avez pas assez d'argent");
                    goTo(cimetiere);
                    pax.etatDeSante == 'mort';
                }
                break;
            case "saveOnFocusChange":
                if(pax.argent>=100){
                    pax.paye(100, this.caisse);
                    pax.poche.pop('saveOnFocusChange');
                    console.log('Voici votre médicament');
                    pax.etatDeSante == 'bonne santé';
                }else{
                    console.log("Vous n'avez pas assez d'argent");
                    goTo(cimetiere);
                    pax.etatDeSante == 'mort';
                }
                break;
            case "CheckLinkRelation":
                if(pax.argent>=35){
                    pax.paye(35, this.caisse);
                    pax.poche.pop('CheckLinkRelation');
                    console.log('Voici votre médicament');
                    pax.etatDeSante == 'bonne santé';
                }else{
                    console.log("Vous n'avez pas assez d'argent");
                    goTo(cimetiere);
                    pax.etatDeSante == 'mort';
                }
                break;            
                case "Ventoline":
                    if(pax.argent>=40){
                        pax.paye(40, this.caisse);
                        pax.poche.pop('Ventoline');
                        console.log('Voici votre médicament');
                        pax.etatDeSante == 'bonne santé';
                    }else{
                        console.log("Vous n'avez pas assez d'argent");
                        goTo(cimetiere);
                        pax.etatDeSante == 'mort';
                    }
                    break;
            case "f12+doc":
                if(pax.argent>=20){
                    pax.paye(20, this.caisse);
                    pax.poche.pop('f12+doc');
                    console.log('Voici votre médicament');
                    pax.etatDeSante == 'bonne santé';
                }else{
                    console.log("Vous n'avez pas assez d'argent");
                    goTo(cimetiere);
                    pax.etatDeSante == 'mort';
                }
                break;
            default:
                console.log('Vous êtes en bonne santé !');
                break;
        }
    }
}

let salleAttente=[];
let cimetiere= [];
