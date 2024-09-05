function SetUsername(username) {
    this.username = username;
}

const testCalling = function (username, password, email) {
    SetUsername.call(this,username); // .call this is the syntex
    this.password = password;
    this.email = email; 

}

const printData = new testCalling("gourab", 1234, "gg@fb.com");
console.log(printData)