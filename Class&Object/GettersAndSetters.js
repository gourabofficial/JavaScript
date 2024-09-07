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
         this.pass = value.toUpperCase();
    }
}

const user1 = new User("Gourab ganguly", "gourab@abc", 1234);
console.log(user1.password);// 1234
user1.password = "@5432hn"
console.log(user1.password); 



