const user = {
    username: "Rana",
    age: 20,
    passion: "Footballer",
    
    wealcomeMessage: function () {
        console.log(`${this.username},wealcome to the Ground `) 
        // console.log(this);
        
    }
}
user.wealcomeMessage();


user.username = "kiran" // this: change the current context
user.wealcomeMessage();

// console.log(this); */in node always print this : {} but in console print other things /*
