/// <reference path="ball.ts"/>

class Game {
    private balls:Ball[] = []
    private paddle:Paddle
    constructor() {
        // meerdere balls aanmaken
        this.balls = []

        for(let i = 0; i<10; i++){
            let c = new Ball()
            this.balls.push(c)
            
            c.update()
        }
        // paddle aanmaken
        this.paddle = new Paddle()

        this.gameLoop()
    }
    
    private gameLoop(){
        for(let i of this.balls){
            i.update()
            // check collison
            let hit = this.checkCollision(i.getRectangle(), this.paddle.getRectangle())
            //console.log(hit)
            if (hit == true){
                i.hitAction()
            }
        }
        this.paddle.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
    // check of er een collision is
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

window.addEventListener("load", () => new Game())