import math from "mathjs";
import {sqrt, pow, divide} from math;
//This value is supposed to be exported from the TimeDuration module
var TimeDuration = 40;
class Location
{
    constructor(x,y) //The constructor has 2 parameters: x and y for the location.
    {
        this.x = x;
        this.y = y;
    }
}

//This arrow function below determines whether there is an impenetrable obstruction
IsObstructionImpenetrable = (locationA, locationB, speed) =>{
    //The calculation of the distacne by using coordinates is given here
    var distance = sqrt(pow(locationB.x - locationA.x, 2) + pow(locationB.y - locationA.y,2)) ;
    //We calculate the time by dividing the distance to the speed
    var time = divide(distance, speed);
    if(TimeDuration - time > 60)
    {
        return true;
    }
    else
    {
        return false;
    }
}


