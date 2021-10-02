//adaptee，需要做适配的使用者
var adaptee = /** @class */ (function () {
    function adaptee() {
    }
    adaptee.prototype.specifyRequest = function () {
        return "需要电压240V";
    };
    return adaptee;
}());
//target是用来做适配的，adapter
var target = /** @class */ (function () {
    function target() {
        this.adaptee = new adaptee();
    }
    target.prototype.request = function () {
        var info = this.adaptee.specifyRequest();
        return info + "-->\u8F6C\u6362-->\u9700\u8981\u7684220V";
    };
    return target;
}());
var adapter = new target();
console.log(adapter.request());
