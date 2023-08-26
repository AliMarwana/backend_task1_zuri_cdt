//Here is an example of how to use the class Obstruction
//To test the ObstructionModule, type node App.mjs in the project folder with NodeJs installed
// We set the value of timeDuration to 70 in the ObstructionModule
import { IsObstructionImpenetrable, Location } from "./ObstructionModule.mjs";
//IsObstructionImpenetrable = require("./ObstructionModule.mjs");
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

var X1= await rl.question('X coordinate of Location A? ');
var Y1= await rl.question('Y coordinate of Location A? ');
var X2= await rl.question('X coordinate of Location B? ');
var Y2= await rl.question('Y coordinate of Location B? ');
var speed= await rl.question('Speed of the device(mile/min)? ');
var locationA = new Location(parseFloat(X1),parseFloat(Y1));
var locationB = new Location(parseFloat(X2), parseFloat(Y2));
var result = IsObstructionImpenetrable(locationA,locationB,speed);
console.log("is there a presence of impenetreable obstruction?:" + result);
rl.close();


