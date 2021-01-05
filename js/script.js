// How do you display things partially on the canvas? Eg when spawning or despawning
// Math for figuring out when to remove arrows; are x and y in terms of pixels, where I'd need to know my image dimensions in pixels? 

// Will have to hard code x values for arrow spawn locations. 

// How to change the speed of scroll based on bpm of the song selected, or even how to figure out the math for one hard coded song and difficulty. 
// How do you do cases if you want to use string.includes(substring)? For having more than one arrow at a time. 

/////////////////////////////////////////////////
// Have Canvas MDN documents handy so I know what's available in terms of methods. 

// Add key listeners to show that they're working.
// Have things spawn and move up and spawn off the screen (get destroyed).
//// If arrow is past a certain y value without the correct key input, then lose a certain amount of health points. 
// Create collisionBar / hitBox
// Have arrows disappear when difference between arrow.y and collisionBar.y is < 50px etc. then it disappears. 
// Health logic based on hits. 


// Start screen, end screen

// Have things spawn based on the arrowDirections list. 
////////////////////////////////////////////////////

// SVG = scalable vector graphics for arrow image. 

// Assign dimensional attributes for canvas#game.
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// Context object gets created when we have the canvas tag.
const ctx = game.getContext('2d')
const leftArrowImg = document.getElementById('left-arrow')
const downArrowImg = document.getElementById('down-arrow')
const upArrowImg = document.getElementById('up-arrow')
const rightArrowImg = document.getElementById('right-arrow')

const leftArrowGhostImg = document.getElementById('left-arrow-ghost')
const downArrowGhostImg = document.getElementById('down-arrow-ghost')
const upArrowGhostImg = document.getElementById('up-arrow-ghost')
const rightArrowGhostImg = document.getElementById('right-arrow-ghost')

const imgHeight = 60 // img of DDR arrow. For reference, hitBox's height is 60px.
const imgWidth = imgHeight // Square image. 

const song = document.createElement('audio')
song.src = './audio/aerosol-of-my-love-by-kevin-macleod.mp3'
song.volume = 0.1

let arrows = [] // Array of arrow objects that are presently on screen. 
let arrowDirections = [['left'], ['up', 'right'], ['down'], [], ['left'], ['left'], ['up', 'down']] // Hard-coded arrow choreography for each song + difficulty.
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
        let leftArrow = document.createElement('img')
        let downArrow = document.createElement('img')
        let upArrow = document.createElement('img')
        let rightArrow = document.createElement('img')

        leftArrow.src = './img/leftArrow.png'
        downArrow.src = './img/downArrow.png'
        upArrow.src = './img/upArrow.png'
        rightArrow.src = './img/rightArrow.png'

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
            // this.img = downArrowImg
            break
        case 'up':
            this.direction = 'up'
            this.x = 355
            this.y = 500
            this.img.src = './img/upArrow.png'
            // this.img = upArrowImg
            break
        case 'right':
            this.direction = 'right'
            this.x = 425
            this.y = 500
            this.img.src = './img/rightArrow.png'
            // this.img = rightArrowImg
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

function createArrow() { // Create arrow object from arrowDirections choreography.
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
        health.style.backgroundColor = '#f55142'
        health.style.backgroundImage = 'none'
    }
    else if (healthScore < 25) {
        health.style.backgroundColor = '#f5e342'
        health.style.backgroundImage = 'none'
    } 
    else if (healthScore < 50) {
        health.style.backgroundColor = '#e0f542'
        health.style.backgroundImage = 'none'
    }
    else if (healthScore < 75) {
        health.style.backgroundColor = '42f59e'
        health.style.backgroundImage = 'none'
    }
    else if (healthScore >= 75) {
        health.style.backgroundColor = '#42f5e6'
        health.style.backgroundImage = 'none'
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
    if (i == arrowDirections - 1 && arrows.length == 0) {
        setInterval(gameOver(win), 1000) // End the game 1 seconds after the last arrow has left the screen.
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

let start = () => { // Type 'start()' into Chrome console to start game.
    arrowInterval = setInterval(createArrow, arrowCreationSpeed) 
    gameInterval = setInterval(gameLoop, gameSpeed) 
    song.play()
}

let pause = () => {
    clearInterval(gameInterval) // Stops game from refreshing and animating arrows upward. 
    clearInterval(arrowInterval) // Stops arrow objects from being cerated from arrowDirections (nested array of strings) and into arrows array (array of objects). 
    song.pause()
} 

/* MVP:

- Splash screen
- Results screen
- 1 player
- 1 difficulty for 1 song
- Have arrows scroll up and disappear when hit at the right within 70% of the collision bar and the correct aswd key for the arrow is pressed.

// Stretch goals:
- Have arrow choreography go to beat of the song
- 2 player mode
- Add additional difficulty to same song
- Be able to select song (even if you can only select one)
- Add another song
- Modify tempo according to the song or difficulty

- Add 'good' vs 'great' arrow hits, for whether arrow was hit perfectly on beat, or partially on beat. 
    - Incorporate this into health bar point system as well.
- Add half beat arrows and have them show up as a different color. 
- Have health bar be shiny rainbow if it's been at 100% for the past few beats. 
- Add combo count display

*/