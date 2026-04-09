let secret = 7;
let y = 0;

while (y!==secret) {
    let x = +prompt("Введите число");
    y = x;
    if (x > secret) {
        console.log("Меньше, попробуй ещё.");
    }
    if (x < secret) {
        console.log("Больше, попробуй ещё.");
    }
} 