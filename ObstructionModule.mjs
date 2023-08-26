
import {sqrt, pow, divide, mode} from "mathjs";

export class Location
{
    constructor(x,y) //The constructor has 2 parameters: x and y for the location.
    {
        this.x = x;
        this.y = y;
    }
}

//This function below determines whether there is an impenetrable obstruction
export function IsObstructionImpenetrable (locationA, locationB, speed) {
    //The calculation of the distacne by using coordinates is given here
    var distance = sqrt(pow(locationB.x - locationA.x, 2) + pow(locationB.y - locationA.y,2)) ;
    //We calculate the time by dividing the distance to the speed
    var time = divide(distance, speed);
    //This value is supposed to be exported from the TimeDuration module
var TimeDuration = 70;
    if(TimeDuration - time > 60)
    {
        return true;
    }
    else
    {
        return false;
    }
}



