class Bubble {
    X:number  
    Y:number
    element:HTMLElement

    constructor(){
        this.element = document.createElement("bubble")
        document.body.appendChild(this.element)
        // generate location
        this.X = this.randomNumber(0, window.innerWidth-130)
        this.Y = this.randomNumber(0, window.innerHeight-130)
        // give locationn to the object
        this.element.style.left = this.X + "px"
        this.element.style.left = this.Y + "px"
    }

    randomNumber(min:number, max:number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}