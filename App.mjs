//Here is an example of how to use the class Obstruction
import { ObstructionModule } from "./ObstructionModule.mjs";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

var X1= await rl.question('X coordinate of Location A? ');
var Y1= await rl.question('Y coordinate of Location A? ');
var X2= await rl.question('X coordinate of Location B? ');
var Y2= await rl.question('Y coordinate of Location B? ');
var speed= await rl.question('Speed of the device? ');
var locationA = new Location(parseFloat(X1),parseFloat(Y1));
var locationB = new Location(parseFloat(X2), parseFloat(Y2));
var result = ObstructionModule.IsObstructionImpenetrable(locationA,locationB,speed);
console.log("is there a presence of impenetreable obstruction?:" + result);


