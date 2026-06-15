var light="white"

if(light=="green"){
    console.log("Go!")
}
else if(light=="yellow"){
    console.log("Wait")
}
else{
    console.log("Invalid light color")
}
console.log("Outside If")
//using switch statement
var signal = "white"
switch(signal){
    case "green":
        console.log("Go!");
        break;

    case "Yellow":
        console.log("Wait");
        break;

    case "Red":
    console.log("Stop");
    break;

    default:
    console.log("Outside if");
}
