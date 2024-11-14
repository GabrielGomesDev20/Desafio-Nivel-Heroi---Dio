let nomeHeroi= "Veigar";
let experienciaHeroi = 10002;


if (experienciaHeroi === 1000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro!");
} else if (experienciaHeroi <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze!");
}  else if (experienciaHeroi <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata!");
} else if (experienciaHeroi <= 6000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro!");
} else if (experienciaHeroi <= 8000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina!");
} else if (experienciaHeroi <= 9000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente!");
} else if (experienciaHeroi <= 10000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal!");
} else if(experienciaHeroi >= 10000)
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante!");

console.log("Parte de cima feita com if|else ||||| Parte de baixo feita com switch|case")

switch (true) {
    case experienciaHeroi <= 1000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro!");
        break;
    case experienciaHeroi <= 2000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze!");
        break;
    case experienciaHeroi <= 5000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Prata!");
        break;
    case experienciaHeroi <= 6000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro!");
        break;
    case experienciaHeroi <= 8000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Platina!");
        break;
    case experienciaHeroi <= 9000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente!");
        break;
    case experienciaHeroi <= 10000:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal!");
        break;
    default:
        console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante!");
    }

