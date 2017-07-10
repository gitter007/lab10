var bankAccount = (function () {
    function bankAccount() {
    }
    bankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return bankAccount;
}());
;
var myself = {
    name: "Asaad",
    bankAccount: new bankAccount(),
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
