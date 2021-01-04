let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height) // Clear the canvas.
    if (arrows.length !== 0) {
        if (arrows[0].y < -imgHeight) {
           arrows.shift() // Remove oldest arrow when it is entirely off-screen.
        }
    }
    if (arrows.length !== 0) {  // There might be a combo of two arrows with the same y value, so we do this twice.
        if (arrows[0].y < -imgHeight) {
            arrows.shift()
        }
    }
    health.style.width = healthScore + 'px' // Update health bar.
    hitBox.render()
    // halfHitBox.render() // DELETE THIS ONCE COMPLETE. FOR VISUALIZING HALFWAY POINT ANYWAY.
    for (let j = 0; j < arrows.length; j++) { // Move up and draw each of the on-screen arrows.
        arrows[j].y -= 1
        arrows[j].render()
    }
}


// Use the below if you want a normal speed game. 
let gameSpeed = 20 // Affects speed of game.
let arrowCreationSpeed = 60 * gameSpeed // Calibrated based on arrow height and gameSpeed.

// Use the below if you want a faster game: 
// let gameSpeed = 1  
// let arrowCreationSpeed = 250 * gameSpeed */

let arrowInterval = setInterval(createArrow, arrowCreationSpeed) 
let gameInterval = setInterval(gameLoop, gameSpeed) 
let stop = () => {
    clearInterval(gameInterval) // Stops game from refreshing and animating arrows upward. 
    clearInterval(arrowInterval) // Stops arrow objects from being cerated from arrowDirections (nested array of strings) and into arrows array (array of objects). 
} 