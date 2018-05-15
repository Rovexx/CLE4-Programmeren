"use strict";
var Bubble = (function () {
    function Bubble() {
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
        this.X = this.randomNumber(0, window.innerWidth - 130);
        this.Y = this.randomNumber(0, window.innerHeight - 130);
        this.element.style.left = this.X + "px";
        this.element.style.left = this.Y + "px";
    }
    Bubble.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.element = document.createElement("fish");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clickFish(); });
        this.X = this.randomNumber(0, window.innerWidth - 130);
        this.Y = this.randomNumber(0, window.innerHeight - 130);
        this.element.style.left = this.X + "px";
        this.element.style.left = this.Y + "px";
        this.color = this.randomNumber(0, 360);
        this.element.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
    }
    Fish.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Fish.prototype.clickFish = function () {
        this.element.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        console.log("new game created!");
        for (var i = 0; i <= 100; i++) {
            setTimeout(function () {
                _this.generateObjects();
            }, 100 * i);
        }
    }
    Game.prototype.generateObjects = function () {
        var fish = new Fish();
        var bubble = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () { new Game(); });
//# sourceMappingURL=main.js.map