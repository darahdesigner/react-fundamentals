// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back ${this.name}`);
    };

    //Methoid 2
    status(){
        console.log(`Current status: ${this.type}`);
    };
};
class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
    bannedUser(){
        console.log(`${this.name}, your account has been banned. Gratuitous overuse of the banjo emoji is a violation of community guidelines.`)
    }
};

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();
//super
class BronzeLevelUser extends User {
    //we add the ccinfo property to the user here
    constructor(username, password, ccinfo) {
        //if you are going to use 'this' n your constructoy, you must have super that points to the parent constructor
        super(username, password);
        // the 'this' keyword wouldn't work without super
        this.type = "Bronze User",
        this.ccinfo = ccinfo
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);