interface User {
    username: string;
    password: string;
}

interface ApprovedUser extends User {
    approvedSince: number;
}

class AccountManager {
    username: string;
    password: string;
    adminSince: number;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.adminSince = Date.now();
    }

    approveUser(user: User) {
        const approvedUser = user as ApprovedUser;
        approvedUser.approvedSince = Date.now();
    }

    static generateRandomNumber() { 
        // static methods can be called without instantiating a class
        return Math.random()
    };
}

const random = AccountManager.generateRandomNumber();
console.log("random - ", random);
const newAdmin = new AccountManager("newAdmin", "newPassword");
const newUser: User = {username:"newUser", password:"newPassword"}

console.log(newUser)
newAdmin.approveUser(newUser)
console.log(newUser)


