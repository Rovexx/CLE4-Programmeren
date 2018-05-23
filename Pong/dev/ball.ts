class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number
    private xspeed : number = 2
    private yspeed : number = 2
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }
    
    public update() : void {
        this.x += this.xspeed
        this.y += this.yspeed

        if(this.x > window.innerWidth -40 || this.x <0){
            this.xspeed *= -1
        }
        if(this.y > window.innerHeight - 40|| this.y <0){
            this.yspeed *= -1
        }
        //console.log(this.x + this.y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        
    }
    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private hitAction() : void{
        this.xspeed ++
        this.yspeed ++
    }
}