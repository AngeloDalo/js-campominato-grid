/**
 * 1) generare casella in base ad un numero
 * 3) aggiungere valore difficolta
 * 4) fare tutto al click del button
 */

function difficultGame (choise) {
    //console.log (choise)
    if (choise == "Easy") {
        return 49; 
    } else if (choise == "Medium") {
        return 81;
    } else if (choise == "Hard") {
        return 100;
    }
}

const button = document.querySelector (".header-dx button");
const level = document.getElementById ("difficoltà");

button.addEventListener('click', function () {
    const element = this;
    let gridsGame = document.querySelector (".grids-game");
    gridsGame.innerHTML = "";
    //console.log (level.value);
    let numberSquare = difficultGame (level.value);
    //console.log (numberSquare);
    for (let i=1; i<=numberSquare; i++) {
        const grid = document.createElement("div");
        grid.classList.add("square");
        grid.append (i);
        gridsGame.append(grid);
    }
});
