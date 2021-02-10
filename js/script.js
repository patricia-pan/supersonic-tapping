// Assign dimensional attributes for canvas#game.
game.setAttribute('width', getComputedStyle(game)['width']) // ID is game.
game.setAttribute('height', getComputedStyle(game)['height'])

// Context object gets created when we have the canvas tag.
const ctx = game.getContext('2d')

const imgHeight = 60 // img of DDR arrow. For reference, hitBox's height is 60px.
const imgWidth = imgHeight // Square image. 

const song = document.createElement('audio')
song.src = './audio/aerosol-of-my-love-by-kevin-macleod.mp3'
song.volume = 0.1

let arrows = [] // Array of arrow objects that are live on screen. 
let arrowDirections = [['up'], [], ['left'], ['up', 'right'], ['down'], ['up'], [], [], ['left'], ['left'], ['up', 'down'], [], ['right'], ['down'], [], ['up'], ['up','left'], ['up', 'right'], ['left'], ['left', 'right'], [],[], ['up'], ['left'], ['up', 'right'], ['down'], ['up', 'down'], ['left', 'right'], ['down'], ['down', 'right'], [], ['up'], ['left'], ['up', 'down']] //Hard-coded arrow choreography for each song + difficulty.
let i = 0 // For reading choreography (to iterate through arrowDirections.)
let healthScore = 50 // Out of 100.
let health = document.getElementById('health')
let isGameOver = false 

let hitBox = {
    x: 10,
    y: 10,
    color: 'orange',
    height: imgHeight, // 60px.
    margin: 10, 
    width: 680,
    render: function() {
        // let leftArrow = document.createElement('img')
        // let downArrow = document.createElement('img')
        // let upArrow = document.createElement('img')
        // let rightArrow = document.createElement('img')

        let leftArrow = new Image() // Does the same thing as above, but new Image() is a built-in JavaScript constructor function. Thanks Barent!
        let downArrow = new Image() 
        let upArrow = new Image() 
        let rightArrow = new Image() 

        leftArrow.src = './img/leftArrowGhost.png'
        downArrow.src = './img/downArrowGhost.png'
        upArrow.src = './img/upArrowGhost.png'
        rightArrow.src = './img/rightArrowGhost.png'

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(downArrow, 285, 10, imgWidth, imgHeight) 
        ctx.drawImage(leftArrow, 215, 10, imgWidth, imgHeight) 
        ctx.drawImage(upArrow, 355, 10, imgWidth, imgHeight) 
        ctx.drawImage(rightArrow, 425, 10, imgWidth, imgHeight) 
    }
}
hitBox.render()

function Arrow(arrowDirection) { // To create new arrow objects from arrowDirections choreography.
    this.img = document.createElement('img')
    switch(arrowDirection) {
        case 'left':
        this.direction = 'left'    
        this.x = 215
            this.y = 500
            this.img.src = './img/leftArrow.png'
            // leftArrowImg
            break
        case 'down':
            this.direction = 'down'
            this.x = 215 + imgWidth + 10 // 285. For a margin of 5 px between each arrow. 
            this.y = 500
            this.img.src = './img/downArrow.png'
            break
        case 'up':
            this.direction = 'up'
            this.x = 355
            this.y = 500
            this.img.src = './img/upArrow.png'
            break
        case 'right':
            this.direction = 'right'
            this.x = 425
            this.y = 500
            this.img.src = './img/rightArrow.png'
            break
        default: 
            console.log('Nothing happens.')
        }
        this.live = true // Now live, on screen.
        this.width = imgWidth 
        this.height = imgHeight
        this.render = function() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
}

function createArrow() { // Create live arrow object from arrowDirections choreography.
    if (i < arrowDirections.length) {
        for (let j = 0; j < arrowDirections[i].length; j++) {
            arrows.push(new Arrow(arrowDirections[i][j]))
        } 
        i += 1 // Move on to the next choreographed arrowset. 
    }
}

let removeOffScreenArrows = () => {
    if (arrows.length !== 0) {
        if (arrows[0].y < -imgHeight) {
        arrows.shift() // Remove oldest arrow when it is entirely off-screen.
        }
    }
    if (arrows.length !== 0) {  // There might be a combo of two arrows with the same y value.
        if (arrows[0].y < -imgHeight) {
            arrows.shift()
        }
    }
}

let updateHealthBar = () => {
    if (healthScore == 0) {
        gameOver('lose')
    }
    else if (healthScore < 10) {
        health.style.backgroundImage = 'none'
        health.style.backgroundColor = '#f55142'
    }
    else if (healthScore < 35) {
        health.style.backgroundImage = 'none'
        health.style.backgroundColor = '#f5e342'
    } 
    else if (healthScore < 45) {
        health.style.backgroundImage = 'none'
        health.style.backgroundColor = '#e0f542'
    }
    else if (healthScore < 75) {
        health.style.backgroundImage = 'none'
        health.style.backgroundColor = '#42f59e'
    }
    else if (healthScore >= 75) {
        health.style.backgroundImage = 'none'
        health.style.backgroundColor = '#42f5e6'
    }
    if (healthScore > 98) {
        health.style.borderRadius = '3px'
        health.style.backgroundImage = "url('./img/water.gif')" // Animated water as a special reward.
    }
    health.style.width = healthScore + 'px' // Update health bar.
}

let gameOver = (result) => {
    pause()
    switch(result) {
        case 'win': 
            document.getElementById('win').style.display = 'block'
            document.getElementById('win').innerText = `Congratulations, you've made it!! 🥳\nYour final score is ${healthScore} out of 100.`
            break
        case 'lose':
            document.getElementById('lose').style.display = 'block' 
            console.log(lose)
            break
    }
}

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    removeOffScreenArrows()
    if (healthScore >= 100) { healthScore = 100 } 
    updateHealthBar()
    hitBox.render()
    for (let j = 0; j < arrows.length; j++) { // Move up and draw each of the on-screen arrows.
        arrows[j].y -= 1
        arrows[j].render()
        if (arrows[j].y <= 0 && arrows[j].live) { // If the arrow has passed the hitBox + tolerance, lose a point. But only lose a point once for each arrow we miss.
            if (healthScore > 0) {
                healthScore -= 1
            }
            arrows[j].live = false
        }
    }
    if (i >= arrowDirections.length && arrows.length == 0) {
        setTimeout(gameOver('win'), 5000) // End the game 5 seconds after the last arrow has left the screen.
        // HAVING TROUBLE WITH THE ABOVE. CHANGING THE 5000 to 10000 DOESN'T AFFECT THE TIME. 
        // Note from Barent: Adding a setTimeout in a game loop is really hard to accomplish, so instead you can create a global variable for keeping time.

    }
}

// Use the below if you want a normal speed game: 
let gameSpeed = 20 
let arrowCreationSpeed = 60 * gameSpeed // Create a new arrow every 1200ms, or 1.2 seconds. 60/1.2 = 50, so I use a song that's either 50, 100, or 150 bpm. 

// Use the below if you want a faster game: 
// let gameSpeed = 1  
// let arrowCreationSpeed = 250 * gameSpeed */

// These need to be global variables so that I can 'pause' them from outside my 'start' function.
let arrowInterval
let gameInterval

let playSong = () => {
    song.play()
}

let start = () => { // Type 'start()' into Chrome console to start game.
    splash.style.display = 'none'
    arrowInterval = setInterval(createArrow, arrowCreationSpeed) 
    gameInterval = setInterval(gameLoop, gameSpeed) 
    setTimeout(playSong, 1200) // Offset the song start so that the choreography starts at a good spot.
}

let pause = () => {
    clearInterval(gameInterval) // Stops game from refreshing and animating arrows upward. 
    clearInterval(arrowInterval) // Stops arrow objects from being cerated from arrowDirections (nested array of strings) and into arrows array (array of objects). 
    song.pause()
} 