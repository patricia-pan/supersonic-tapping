let movementDisplay = movement

// Assign dimensional attributes for canvas#game.
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// Context object gets created when we have the canvas tag.
let ctx = game.getContext('2d')
let arrows = [] // Array of arrow objects. 
let arrowDirections = [0, ['up', 'right'], 0, 'down', 0, 'left', ] // Arrow choreography that is specific to each song + difficulty.
let timer = 0

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    collisionBar.render() // Render the top part of the canvas where the arrows get hit.
    arrows.render() // Render our list of active arrows on-screen. 
}
function arrowRenderer(arrowDirection) {
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