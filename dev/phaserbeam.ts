/// <reference path="gameObject.ts"/>
/// <reference path="spaceship.ts"/>

class Phaserbeam extends GameObject {
    
    constructor(x:number, y:number){
        super();
        this.div = document.createElement("phaserbeam")
        document.body.appendChild(this.div)

        this.x = x
        this.y = y
    }

    public removePhaserbeam(){
        this.div.remove()
    }

    public update() : void {
        this.y - 5

        if (this.getRectangle().top < -315){
            this.removePhaserbeam()
        }  

        super.update()
    }
}