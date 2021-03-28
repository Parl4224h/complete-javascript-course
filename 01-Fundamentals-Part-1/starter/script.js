let markWeight = 78;
let markheight = 1.69;
let johnWeight = 92;
let johnHeight = 1.88;

let markBMI = markWeight / markheight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markWeight = 95;
markheight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markheight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);