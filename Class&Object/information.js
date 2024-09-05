function information(username, passward, isLoogdin) {
    this.username = username;
    this.passward = passward;
    this.isLoogdin = isLoogdin;
    
   this.Printinfo =  function () {
        console.log(`Welcome ${this.username}`)
    }
}

const userOne = new information("Gourab", 1234, true);
const userTwo = new information("Rana", 2222, false);
console.log(userOne)
userOne.Printinfo()

console.log(userTwo)
userTwo.Printinfo()
