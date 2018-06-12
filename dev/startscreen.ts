// <reference path="screen.ts"/>

class StartScreen {

    private div: HTMLElement
    private game : Game

    constructor(g:Game) {
        this.game = g
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "ENGAGE"
    }

    private splashClicked() {
        engage.play()
        this.game.showPlayScreen()
    }
}