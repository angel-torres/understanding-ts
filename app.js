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
    return AccountManager;
}());
var newAdmin = new AccountManager("newAdmin", "newPassword");

console.log("newAdmin", newAdmin)