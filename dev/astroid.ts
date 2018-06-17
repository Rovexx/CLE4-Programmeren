/// <reference path="gameObject.ts"/>

class Astroid extends GameObject {
    
    private game:Game
    
    private speedX: number
    private speedY: number
    
    constructor(g:Game) {
        super()
        this.game = g
        this.div = document.createElement("astroid")
        document.body.appendChild(this.div)
                
        this.x = Math.random() * window.innerWidth
        this.y = -100;

        this.speedX = (Math.random() * 0.5)
        this.speedY = 1 + (Math.random() * 4)
    }

    public removeAstroid(){
        this.div.remove()
        this.game.currentscreen.removeFromArray(this)
    }

    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        super.update()
    }
}