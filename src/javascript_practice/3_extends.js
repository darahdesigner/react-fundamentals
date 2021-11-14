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

//Instance of TrialUser class
let trialUser = new TrialUser ('Paul')
trialUser.greet();
trialUser.trialEnding();
trialUser.status();
trialUser.bannedUser();