let detectArrowHit = () => {
    for (let j = 0; j < arrows.length; j++) {
        if (arrows[j].live == false) { // Don't want to double count.
            // (arrows[j].img == leftArrowGhostImg || arrows[j].img == downArrowGhostImg ||
            // arrows[j].img == upArrowGhostImg || arrows[j].img == rightArrowGhostImg) {
                continue // Exit this iteration of the loop if the arrow has already been hit.
            }
        // Arrow is same height as hitBox so we can compare y values instead of (y + height).
        else if (arrows[j].y < hitBox.y + 10 && // Tolerance of 10 pixels; hitBox is drawn at y = 10.
            arrows[j].y > 0) { 
                // arrows[j].img = upArrowGhostImg
                arrows[j].live = false
                // switch(arrows[j].direction) {
                //     case 'left': 
                //         arrows[j].img = leftArrowGhostImg
                //         break
                //     case 'down':
                //         arrows[j].img = downArrowGhostImg
                //         break
                //     case 'up':
                //         arrows[j].img = upArrowGhostImg
                //         break
                //     case 'right':
                //         arrows[j].img = rightArrowGhostImg
                //         break
                // }
                // Below code didn't work, also had trouble doing string interpolation.
                arrows[j].img.src = `./img/${arrows[j].direction}ArrowGhost.png`
                healthScore += 1
            }
            else if (arrows[j].y <= 0) { // If the arrow has passed the hitBox + tolerance.
            healthScore -= 1
        }
    }
}

let hitHandler = e => {
    song.play()
    switch(e.key) {
        case 'w': 
            detectArrowHit()
            break
        case 'a': 
            detectArrowHit()
            break
        case 's':
            detectArrowHit()
            break
        case 'd': // Move right.
            detectArrowHit()
            break
        default: 
            console.log('This doesn\'t do anything!')
    }
}

document.addEventListener('keypress', hitHandler)