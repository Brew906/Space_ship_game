class SpaceCraft{
    //build the states
    constructor(name, velocity, numOfAstronauts){
        this.name = name;
        this. velocity = velocity;
        this.numOfAstronauts = numOfAstronauts;
    }
craftInfo(){
    document.getElementById("ship1Info").innerHTML = "The spacecraft " + this.name + "is travelling at " +
        this.velocity + " mph and contains " + this.numOfAstronauts + " astronauts."; 
}
accelerate(acc,time){
    this.velocity = this.velocity + (acc * time);
    return this.velocity;
}
addAstronauts(numAdded){
    this.numOfAstronauts = this.numOfAstronauts + numAdded;
    return this.numOfAstronauts;
}
varAccel(){
    var accel = document.getElementById("formIncVelocity").value;
    var time1 = document.getElementById("formIncTime").value;
    var acc = parseInt(accel);
    var time = parseInt(time1);
    this.accelerate(acc,time);
}
varAddAstro(){
    var astro = document.getElementById("formNumAstro").value;
    var astro1 = parseInt(astro);
    this.addAstronauts(astro1);
}
}
