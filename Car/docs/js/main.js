"use strict";
var Car = (function () {
    function Car() {
        this.x = 750;
        this.y = 350;
        this.xspeed = 1;
        this.yspeed = 1;
        this.element = document.createElement("car");
        document.body.appendChild(this.element);
        console.log("Car created");
        this.xspeed = this.randomNumber1(10);
        this.yspeed = this.randomNumber1(10);
    }
    Car.prototype.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > window.innerWidth - 20 || this.x < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y > window.innerHeight - 20 || this.y < 0) {
            this.yspeed = this.yspeed * -1;
        }
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.randomNumber1 = function (max) {
        var num = Math.floor(Math.random() * max) + 1;
        num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        return num;
    };
    Car.prototype.randomNumber2 = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.cars = [];
        for (var i = 0; i < 500; i++) {
            var c = new Car();
            this.cars.push(c);
            c.update();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var i = _a[_i];
            i.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map