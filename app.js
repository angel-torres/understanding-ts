var AccountManager = /** @class */ (function () {
    function AccountManager(username, password) {
        this.username = username;
        this.password = password;
        this.adminSince = Date.now();
    }
    AccountManager.prototype.approveUser = function (user) {
        var approvedUser = user;
        approvedUser.approvedSince = Date.now();
    };
    AccountManager.generateRandomNumber = function () {
        return Math.random();
    };
    ;
    return AccountManager;
}());
var random = AccountManager.generateRandomNumber();
console.log("random - ", random);
var newAdmin = new AccountManager("newAdmin", "newPassword");
var newUser = { username: "newUser", password: "newPassword" };
console.log(newUser);
newAdmin.approveUser(newUser);
console.log(newUser);
