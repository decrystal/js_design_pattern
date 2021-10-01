var SingletonPattern = /** @class */ (function () {
    function SingletonPattern() {
    }
    SingletonPattern.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingletonPattern();
        }
        return this.instance;
    };
    return SingletonPattern;
}());
var s1 = SingletonPattern.getInstance();
var s2 = SingletonPattern.getInstance();
console.log(s1 === s2);
