
// const myhero = [
//     "ronaldo","messi"
// ]

// const heroPower = {
//     rondldo: "speed",
//     messi: "dribble"
// }

// Object.prototype.football = function () {
    // console.log("all are best footballer in the world ")
// }

// console.log(myhero.football());
// console.log(heroPower);


let name = "GourabGanguly    ";
let name2 = "rana     "
let name3 = "kiran"

String.prototype.realLength = function () {
    console.log(` ${this}`);
    console.log(`The length is : ${this.trim().length}`);
    
}

name.realLength();
name2.realLength();
name3.realLength();

"hitesh".realLength()
"hitesh chowdhary".realLength()
