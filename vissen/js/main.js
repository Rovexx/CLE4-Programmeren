
for (let i = 0; i<=100; i++){
    setTimeout(fillTank, 100*i)
}

function fillTank(){
    addFish()
    addBubble()
}

function addFish(){
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    // random positie
    let xMax = (window.innerWidth - 130)
    let yMax = (window.innerHeight - 110)
    fish.style.left = getRandomInt(xMax) + "px"
    fish.style.bottom = getRandomInt(yMax) + "px"
    // random kleur tussen 0 en 360
    fish.style.webkitFilter = "hue-rotate(" + getRandomInt(360) + "deg)"
}

function addBubble(){
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)
    // random positie
    let xMaxBubble = (window.innerWidth - 55)
    let yMaxBubble = (window.innerHeight - 55)
    bubble.style.left = getRandomInt(xMaxBubble) + "px"
    bubble.style.bottom = getRandomInt(yMaxBubble) + "px"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let fishes = document.getElementsByTagName("fish")
  fishes.addEventListener("click", clickHandler)

  function clickHandler(a){
    console.log(a)
  }



// roep een functie aan als alles geladen is

window.addEventListener("load", function () {
    console.log("start het aquarium")
})
