class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static ChangeEmail() {
        return  console.log ( `After changes the email: ${this.email}`)

    }
   static createId() {
        return `${this.name} id @#1287`;        
    }
}



const newUser = new user("Gourab ganguly", "gg@fb.in");
console.log(newUser)
console.log(newUser.createId())
// console.log(newUser.ChangeEmail())
// user.ChangeEmail("gourabganguly@abc.in")