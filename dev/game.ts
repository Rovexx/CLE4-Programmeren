/// <reference path="playscreen.ts"/>
/// <reference path="audio.js"/>

class Game {
    
    public currentscreen:any
    public audio:any

    constructor() {
        this.currentscreen = new StartScreen(this)
        this.gameLoop()        
        music.play()
    }
    
    private gameLoop():void{
        this.currentscreen.update()   
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new PlayScreen(this)
    }

    public showGameoverScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new GameOver(this)
    }
} 

window.addEventListener("load", () => new Game())