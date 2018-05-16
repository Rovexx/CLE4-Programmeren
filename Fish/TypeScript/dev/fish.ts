class Fish {
    private color:number
    private X:number  
    private Y:number
    private element:HTMLElement

    constructor(){
        this.element = document.createElement("fish")
        document.body.appendChild(this.element)
        this.element.addEventListener("click", () => this.clickFish())
        // generate location
        this.X = this.randomNumber(0, window.innerWidth-130)
        this.Y = this.randomNumber(0, window.innerHeight-130)
        // give locationn to the object
        this.element.style.left = this.X + "px"
        this.element.style.left = this.Y + "px"
        this.color = this.randomNumber(0,360)
        this.element.style.webkitFilter = "hue-rotate(" + this.color + "deg)"
    }

    randomNumber(min:number, max:number){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    clickFish(){
        this.element.classList.add("dead")
    }
}

