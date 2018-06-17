// <reference path="astroid.ts"/>

class PlayScreen {

    private phaserbeam: Phaserbeam
    private astroids: Astroid[] = []
    private spaceship: Spaceship
    private game: Game
    private gamefix: number = 0
    private score: number = 0;

    constructor(g:Game) {
        this.game = g
        this.spaceship = new Spaceship(87, 83, 65, 68, 32, this.game)
        // Start with 10 astroids
        for (var i = 0; i < 10; i++) {
            this.astroids.push(new Astroid(this.game))
        }
    }

    public update(): void {
        for (var a = this.astroids.length-1; a>=0; a--) {
            //var a of this.astroids
            // astroid hits spaceship: gameover
            if (this.checkCollision(this.astroids[a].getRectangle(), this.spaceship.getRectangle())) {
                // temporary dirty fix for collison during the first spawning session of astroids
                if (this.gamefix <= 10){
                    this.gamefix ++
                }
                else {
                    allShesGot.play()
                    this.game.showGameoverScreen()
                }
                break
            }

            // phaserbeam hits astroid: blow up astroid
            if (this.spaceship.fired == true){
                if (this.checkCollision(this.astroids[a].getRectangle(), this.phaserbeam.getRectangle())) {
                    explosion.play()
                    this.astroids[a].removeAstroid()
                    this.score++
                    console.log(this.score)
                    break
                }
            }

            // astroid leaves the screen: spawn a new one
            if (this.astroids[a].getRectangle().left < 0 || 
            this.astroids[a].getRectangle().right > window.innerWidth ||  
            this.astroids[a].getRectangle().bottom > (window.innerHeight + 50)) {
                    // remove old astroid
                    this.astroids[a].removeAstroid()
                    // spawn new astroid
                    this.astroids.push(new Astroid(this.game))
                    break
            }

            this.astroids[a].update()
        }
        // update spaceship
        this.spaceship.update()
        // if there is a phaser shot, update it
        if (this.spaceship.fired == true){
            this.phaserbeam.update()
        }
        // if you destroyed all astroids show win screen
        if (this.score == 10){
            winMusic.play()
            this.game.showWinScreen()
        }

    }
    public firePhasers(){
        if (this.spaceship.fired == false){
            this.spaceship.fired = true
            phaserFire.play()
            this.phaserbeam = new Phaserbeam(this.game)
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public removeFromArray(removedMe: Astroid) {
        let i = this.astroids.indexOf(removedMe)
        this.astroids.splice(i, 1);
    }
}