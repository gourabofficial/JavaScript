class User  {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.pass = password;
    }
    get password() {
        return this.pass;
    }
    set password(value) {
        if (value.length < 6) {
            console.log("Password is too short");
           
        } else {
            console.log("Password is set");
            this.pass = value.toUpperCase();
        }
         
    }
}

const user1 = new User();
// console.log(user1.password);// 1234
// user1.password = "@5hn"
user1.password = "@5hnas"
console.log(user1.password); 



