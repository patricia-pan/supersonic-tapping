let movementDisplay = movement

// Assign dimensional attributes of our canvas with the id 'game'. 
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// Context object gets created when we have the canvas tag.
let ctx = game.getContext('2d')
let arrows = [] // Array of our arrows that are on screen.

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    arrowBar.render() // Render the top part of the canvas where the arrows get hit.
    arrows.render() // Render our list of active arrows on-screen. 
}
function arrowGenerator(arrowDirection) {
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

function arrowRenderer() {

}




/* MVP:

- 1 player
- 1 difficulty for 1 song
- Have arrows scroll up and disappear when hit at the right within 70% of the collision bar and the correct aswd key for the arrow is pressed.
- 