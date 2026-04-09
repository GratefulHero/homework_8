let player = +prompt("Твой выбор: 1-камень, 2-ножницы, 3-бумага");

let random = Math.floor(Math.random()*3)+1;

if (((player===1)&&(random===2))||((player===2)&&(random===3))||((player===3)&&(random===1))){
    console.log("Ты выиграл")
} else if (((player===2)&&(random===1))||((player===3)&&(random===2))||((player===1)&&(random===3))){
    console.log("Ты проиграл")
} else {
    console.log("Ничья")
}
    