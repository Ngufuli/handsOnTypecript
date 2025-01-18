// function addMore(value: number): number {
//     return value + 50;
// }

function eat(calories: number){
    console.log("I ate " + calories + " calories of food")
}

function sleep(hours: number): void{
    console.log("I slept " + hours + " hours today")
}

let EAT = eat(200);
console.log(EAT);

let SLEEP = sleep(8);
console.log(SLEEP)