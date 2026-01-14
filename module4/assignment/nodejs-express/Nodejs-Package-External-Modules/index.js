import boxen from "boxen"

console.log(boxen("I am using my first external module!",{title:"Hurray!!!",titleAlignment:'center',topLeft: '+',topRight: '+',vertical: '|',horizontal: '-',bottomLeft: '+',bottomRight: '+',borderStyle:"classic"}))
console.log(boxen("I am using my first external module!",{title:"Hurray!!!",titleAlignment:'center',padding: 1, margin: 1, borderStyle:"singleDouble"}));
console.log(boxen('unicorns love rainbows',{title:"Hurray!!!",titleAlignment:'center',borderStyle:"round"}))