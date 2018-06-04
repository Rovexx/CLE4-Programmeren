/// <reference path="astroid.ts"/>

class PlayScreen{

    private astroids: Astroid[] = []
    private spaceship: Spaceship
    private game: Game

    constructor(g:Game) {
        this.game = g
        this.spaceship = new Spaceship(87, 83, 65, 68)

        for (var i = 0; i < 5; i++) {
            this.astroids.push(new Astroid())
        }
    }

    public update(): void {
        for (var a of this.astroids) {

            // astroid hits spaceship
            if (this.checkCollision(a.getRectangle(), this.spaceship.getRectangle())) {
                a.hitSpaceship()
            }

            // astroid leaves the screen: gameover!
            if (a.getRectangle().left < 0) {
                this.game.showGameoverScreen()
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

}