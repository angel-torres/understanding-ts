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
}

const newAdmin = new AccountManager("newAdmin", "newPassword");

