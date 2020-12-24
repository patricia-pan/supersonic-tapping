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


let movementDisplay = movement

// Assign dimensional attributes for canvas#game.
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// Context object gets created when we have the canvas tag.
let ctx = game.getContext('2d')
let arrows = [] // Array of arrow objects. 
let arrowDirections = [0, ['up', 'right'], 0, 'down', 0, 'left', ] // Arrow choreography that is specific to each song + difficulty.
let time = 0
let health = 50

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    collisionBar.render() // Render the top part of the canvas where the arrows get hit.
    arrowMover(arrows) // Move the arrows up.
    arrowRenderer(arrows) // Render current arrows.
}

function arrowRenderer(arrows) {
    for (let i = 0; i < arrows.length; i++) {
        if (arrows[i].y <= 0 ) { // If off the screen.
            arrows.shift() // Removes first element i.e. oldest element. 
            i -= 1 // Because we popped an element off from the front and we want to look at the next element.
        }
        else {

        }
        
    }

}

function arrowMover(arrows) {
    for (let object in arrows) {

    }

}

function arrowGenerator(arrowDirection, color, velocity) {
    switch(arrowDirection) {
        case 'left':
            this.x = 0
            this.y = 0
        case 'right':
            this.x = 0
            this.y = 0
        case 'up':
            this.x = 0
            this.y = 0
        case 'down':
            this.x = 0
            this.y = 0
    }
}

// arrowDirections = ['left', 'right', 0, 'leftX', 'upX']
// arrowColors = []
// arrowVelocities []

// arrows = [[{}, {}], {}]


function animateArrows(arrows) {

}

function destroyArrows(arrows) {
    // Destroy arrows if missed arrows go off-screen.

    // Destroy arrows if they are 'hit' within their collision boxes. 

}

let gameInterval = setInterval(gameLoop, 500) // Game refreshes every 500 ms, or half second.
let stop = () => clearInterval(gameInterval)





/* MVP:

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