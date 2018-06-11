/// <reference path="astroid.ts"/>
/// <reference path="phaserbeam.ts"/>

class PlayScreen {

    private astroids: Astroid[] = []
    private spaceship: Spaceship
    private game: Game
    private gamefix: number = 0

    constructor(g:Game) {
        this.game = g
        this.spaceship = new Spaceship(87, 83, 65, 68, 32)
        // Start with 10 astroids, this is the ammount that will always be on the screen
        for (var i = 0; i < 10; i++) {
            this.astroids.push(new Astroid(this.game))
        }
    }

    public update(): void {
        for (var a of this.astroids) {

            // astroid hits spaceship: gameover
            if (this.checkCollision(a.getRectangle(), this.spaceship.getRectangle())) {
                // temporary dirty fix for collison during the first spawning session of astroids
                if (this.gamefix <= 10){
                    this.gamefix ++
                }
                else {
                    allShesGot.play()
                    this.game.showGameoverScreen()
                }
            }

            // phaserbeam hits astroid: blow up astroid
            if (this.spaceship.fired == true){
                if (this.checkCollision(a.getRectangle(), this.spaceship.phaserbeam.getRectangle())) {
                    explosion.play()
                    a.removeAstroid()
                }
            }
            

            // astroid leaves the screen: spawn a new one
            if (a.getRectangle().left < 0 || 
                a.getRectangle().right > window.innerWidth ||  
                a.getRectangle().bottom > window.innerHeight) {
                    // remove old astroid
                    a.removeAstroid()
                    // spawn new astroid
                    this.astroids.push(new Astroid(this.game))
            }

            a.update()
        }
        this.spaceship.update()
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public removeFromArray(removeMe: Astroid) {

        for (let i = 0;i< this.astroids.length ;i++) {
    
            if (this.astroids[i] === removeMe) {
    
                this.astroids.splice(i, 1);
            }
        }
    }
}