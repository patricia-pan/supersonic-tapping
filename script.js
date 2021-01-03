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
let ctx = game.getContext('2d')
let arrows = [] // Array of arrow objects that are on screen. 
let arrowDirections = [[], ['up', 'right'], ['down'], []] // Hard-coded arrow choreography that is specific to each song + difficulty. One interval for looping through indices every 1000ms in arrowChoreography to push an object into arrows array. 
let i = 0 // For reading choreography and to iterate through arrowDirections.
let health = 50
let isGameOver = false 


function Arrow(arrowDirection) {
    switch(arrowDirection) {
        case 'left':
            this.x = 5
            this.y = 5
            this.color = 'red'
        case 'right':
            this.x = 100
            this.y = 100
            this.color = 'blue'
        case 'up':
            this.x = 300
            this.y = 300
            this.color = 'purple'
        case 'down':
            this.x = 500
            this.y = 500
            this.color = 'green'
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    drawImg(this.x, this.y, this.imgSrc) // pseudocode
    // this.render = function() {
    //     ctx.fillStyle = this.color
    //     ctx.fillRect(this.x, this.y, this.width, this.height)
    // }
    i++
    }
}

function createArrow() {
   // arrows.push(Arrow(arrowDirections[i])) // Create an arrow object in Arrow constructor function. Add object to arrows array.
   // i += 1 // Move on to the next choreographed arrowset. 
}

let hitBox = {
    x: 50,
    y: 50,
    color: 'orange',
    width: 100,
    height: 60,
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
    for (arrow in arrows) {
        arrow.y -= 5 // Move each arrow up the screen.
        arrow.render() 
    }
    hitBox.render() // Render the top part of the canvas where the arrows get hit.
}

let arrowInterval = setInterval(createArrow, 1000) // Creating a new arrow every 1 second. 
let gameInterval = setInterval(gameLoop, 500) // Game refreshes every 500 ms, or half second.
let stop = () => clearInterval(gameInterval)

//// Watch out for nested for loops when we have setIntervals firing at the same time. 

function animateArrows(arrows) {

}

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