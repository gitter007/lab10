var person = (function () {
    function person() {
        this._firstname = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
var newperson = new person();
newperson.firstname = "Asaad";
console.log(newperson.firstname);
