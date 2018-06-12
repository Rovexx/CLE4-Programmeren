// <reference path="screen.ts"/>

class GameOverScreen {

    private div: HTMLElement
    private game: Game

    constructor(g: Game) {
        this.game = g
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", () => this.splashClicked())
        this.div.innerHTML = "I'm giving her all she's got, captain!"
    }

    private splashClicked() {
        this.game.showPlayScreen()
    }
}