class user{
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    ChangeEmail() {
        return `After changes the email 
        : ${this.email}pagol@gmail.com`;
    }
}
const userInfo = new user("MR Ishowmeet", 21, "ishow");
console.log(userInfo);
console.log(userInfo.ChangeEmail());
