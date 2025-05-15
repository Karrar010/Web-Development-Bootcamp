// npm install superheroes (in terminal) -> in node_module file it can seen
import { randomSuperhero } from "superheroes"

var superheroName = randomSuperhero()

console.log("Hero: ",superheroName)

// For supervillain names use module supervillain
// npm install supervillains

import { randomSupervillain } from "supervillains"

var supervillainName = randomSupervillain()

console.log("Villain: ",supervillainName)

// node --no-warnings external_modules_npm.js  => run without warnings