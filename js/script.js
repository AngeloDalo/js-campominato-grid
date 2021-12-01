/**
 * 1) generare casella in base ad un numero
 * 3) aggiungere valore difficolta
 * 4) fare tutto al click del button
 */

function difficultGame (choise) {
    //console.log (choise)
    if (choise == "Easy") {
        return 49; 
    } else if (choise = "Medium") {
        return 81;
    } else {
        return 100;
    }
}

const button = document.querySelector (".header-dx button");
const level = document.getElementById ("difficoltà");

button.addEventListener('click', function () {
    const element = this;
    //console.log (level.value);
    let numberSquare = difficultGame (level.value);
    //console.log (numberSquare);
});
