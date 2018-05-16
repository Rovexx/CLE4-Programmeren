class Game {

    constructor(){
        console.log("new game created!")       
        // 10 keer een nieuwe vis aanmaken en in de array zetten
        for (let i = 0; i<=100; i++){
            setTimeout(()=> {
                this.generateObjects()
            }, 100*i)
        }
    }

    generateObjects(){
        let fish = new Fish();
        let bubble = new Bubble();
    }
}

// de functie ergens in plaatsen en nieuwe game maken
window.addEventListener("load", () => {new Game()})