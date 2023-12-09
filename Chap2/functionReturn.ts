// function runMore(distance: number): number {
//     return distance + 10;
// }

function eat(calories: number){
    console.log("I eat" + calories + " calories.");
}

function sleepIn(hours: number): void{
    console.log("I slept" + hours + " hours");
}

let ate = eat(100);
console.log(ate);

let slept = sleepIn(8);
console.log(slept);