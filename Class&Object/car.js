class car {
    start() {
        console.log("start the car ...");
    }
    stop() {
        console.log("stop the car ...");
    }
    setBrandName(brand) {
        this.brandname = brand;
        
    }
    
}

let mycar = new car();
// let maruti = new car();
mycar.setBrandName("MARUTI");
mycar.start();
mycar.stop();