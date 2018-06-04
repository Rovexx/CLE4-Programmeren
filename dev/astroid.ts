// <reference path="gameobject.ts"/>

class Astroid extends GameObject {

    private speedX: number
    private speedY: number
    
    constructor() {
        super()
        this.div = document.createElement("astroid")
        document.body.appendChild(this.div)
        
        this.x = window.innerWidth
        this.y = Math.random() * (window.innerHeight - 100)
        
        this.speedX = Math.random() * 6 - 3
        this.speedY = -3 - (Math.random() * 6)
    }

    public hitSpaceship(){
        this.speedY *= -1
    }

    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        if( this.y + this.getRectangle().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        if (this.x > window.innerWidth) {
            this.speedX *= -1
        } 
                        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}