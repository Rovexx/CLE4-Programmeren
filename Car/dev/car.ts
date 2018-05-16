class Car {
    private x:number = 750
    private y:number = 350
    private xspeed:number = 1
    private yspeed:number = 1
    private element:HTMLElement
    //private color:number

    constructor() {
        this.element = document.createElement("car")
        document.body.appendChild(this.element)
        console.log("Car created")

        this.xspeed = this.randomNumber1(10)
        this.yspeed = this.randomNumber1(10)

        //this.color = this.randomNumber2(0,360)
        //this.element.style.webkitFilter = "hue-rotate(" + this.color + "deg)"
    }
    public update() {
        this.x += this.xspeed
        this.y += this.yspeed

        if(this.x > window.innerWidth -20 || this.x <0){
            this.xspeed = this.xspeed * -1
        }
        if(this.y > window.innerHeight - 20|| this.y <0){
            this.yspeed = this.yspeed * -1
        }

        this.element.style.transform = `translate(${this.x}px,${this.y}px)`
    }
    
    randomNumber1(max:number):number{
        let num = Math.floor(Math.random() * max) +1;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        return num
    }
    randomNumber2(min:number, max:number):number{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
