let chrono = document.getElementById( 'chrono' );
let resetBtn = document.getElementById( 'reset' );
let stopBtn = document.getElementById( 'stop' );
let startBtn = document.getElementById( 'start' );

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArreter = true;

const demarrer = () => {
    if(estArreter) {
        estArreter = false;
        defilerTemps();
    }
};

const arreter = () => {
    if(!estArreter) {
        estArreter=true;
        //clear timeout
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if(estArreter){return;} 
    secondes = parseInt(secondes); //convertir une chaine de carateres en chiffres
    minutes = parseInt(minutes); //convertir une chaine de carateres en chiffres
    heures = parseInt(heures); //convertir une chaine de carateres en chiffres

    secondes++;
    if(secondes==60) {
        minutes++;
        secondes=0;
    }

    if(minutes==60) {
        heures++;
        minutes=0;
    }

    if (secondes < 10 ) {
        secondes = "0" + secondes; //Affichage
    }

    if (minutes < 10 ) {
        minutes = "0" + minutes; 
    }

    if (heures < 10 ) {
        heures = "0" + heures; 
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}`;

   timeout =  setTimeout(defilerTemps, 1000);


};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArreter  = true;
    heures=0;
    minutes=0;
    secondes=0;
    clearTimeout(timeout);
};

startBtn.addEventListener("click",demarrer);
stopBtn.addEventListener("click",arreter);
resetBtn.addEventListener("click",reset);