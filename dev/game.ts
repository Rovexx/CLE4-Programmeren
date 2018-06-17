/// <reference path="../docs/js/audio.js"/>

class Game {
    
    public currentscreen:any
    public audio:any

    constructor() {
        this.currentscreen = new StartScreen(this)
        this.gameLoop()        
    }
    
    private gameLoop():void{
        this.currentscreen.update()   
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new PlayScreen(this)
        winMusic.stop()
        music.play()
    }

    public showGameoverScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new GameOverScreen(this)
        music.stop()
    }

    public showWinScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new WinScreen(this)
        music.stop()
        winMusic.play()
    }
} 

window.addEventListener("load", () => new Game())