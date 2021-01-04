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
const imgHeight = 60; // Width of each arrow image. hitBox's height is 60px.

let arrows = [] // Array of arrow objects that are on screen. 
let arrowDirections = [['left'], ['up', 'right'], ['down'], []] // Hard-coded arrow choreography that is specific to each song + difficulty. One interval for looping through indices every 1000ms in arrowChoreography to push an object into arrows array. 
let i = 0 // For reading choreography and to iterate through arrowDirections.
let health = 50
let isGameOver = false 


function Arrow(arrowDirection) {
    switch(arrowDirection) {
        case 'left':
            this.x = 50 
            this.y = 500
            this.img = leftArrowImg
            break
        case 'down':
            this.x = 110 // Each arrow has a width of 40px, and 20px of horizontal space betwixt arrows.
            this.y = 500
            this.img = downArrowImg
            break
        case 'up':
            this.x = 170
            this.y = 500
            this.img = upArrowImg
            break
        case 'right':
            this.x = 230
            this.y = 500
            this.img = rightArrowImg
            break
        default: 
            console.log('This doesn\'t do anything!')
        }
        this.width = imgHeight // Square image.
        this.height = imgHeight
        this.render = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

function createArrow() { // Creates arrow objects from arrowDirections choreography.
    console.log(i, arrowDirections[i])
    for (let j = 0; j < arrowDirections[i].length; j++) {
        arrows.push(new Arrow(arrowDirections[i][j])) // Create an arrow object in Arrow constructor function. Add object to arrows array.
    } 
    if (i < arrowDirections.length - 1) {
        i += 1 // Move on to the next choreographed arrowset. 
    }
}

let hitBox = {
    x: 10,
    y: 10,
    color: 'orange',
    width: 680,
    height: 60, // Need to make this slightly bigger than the size of the arrow svg.
    render: function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

hitBox.render()

function detectHit() {
    // for (let i = 0; i < arrows.length; i++ ) {
    }
    /* if (hero.x + hero.width > ogre.x && 
        hero.x < ogre.x + ogre.width &&
        hero.y < ogre.y + ogre.height &&
        hero.y + hero.height > ogre.y) { 
            ogre.alive = false */ 

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    // ctx.rotate(20 * Math.PI / 180); to rotate something 20 degrees clockwise. https://www.w3schools.com/tags/canvas_rotate.asp
    if (arrows.length !== 0) {
        if (arrows[0].y < -imgHeight) {
           arrows.shift() // Remove oldest arrow when it is entirely off-screen.
        }
    }
    if (arrows.length !== 0) {
        if (arrows[0].y < -imgHeight) {
            arrows.shift() // // There might be two arrows at the same y value in a combo.
        }
    }
    hitBox.render() // Render the top part of the canvas where the arrows get hit.
    for (let j = 0; j < arrows.length; j++) { // TO DO: CHANGE THIS TO ITERATOR INSTEAD OF ARROW IN ARROWS.
        arrows[j].y -= 1 // Move each arrow up the screen.
        arrows[j].render()
    }
}

// Use the below if you want a normal speed game. 
let gameSpeed = 20 // Affects speed of game.
let arrowCreationSpeed = 60 * gameSpeed // Calibrated based on arrow height and gameSpeed.

// Use below for if you want a faster game: 
// let gameSpeed = 1  
// let arrowCreationSpeed = 250 * gameSpeed */

let arrowInterval = setInterval(createArrow, arrowCreationSpeed) 
let gameInterval = setInterval(gameLoop, gameSpeed) 
let stop = () => {
    clearInterval(gameInterval)
    clearInterval(arrowInterval)
} 

//// Watch out for nested for loops when we have setIntervals firing at the same time. 

function destroyArrows(arrows) {
    // Destroy arrows if missed arrows go off-screen.

    // Destroy arrows if they are 'hit' within their collision boxes. 

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