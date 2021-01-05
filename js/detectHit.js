let detectArrowHit = () => {
    for (let j = 0; j < arrows.length; j++) {
        if (arrows[j].live == false) { // Don't want to double count.
                continue // Exit this iteration of the loop if the arrow has already been hit.
            }
        // Arrow is same height as hitBox so we can compare y values instead of (y + height).
        else if (arrows[j].y < hitBox.y + 10 && // Tolerance of 10 pixels; hitBox is drawn at y = 10.
            arrows[j].y > 0) { 
                arrows[j].live = false
                arrows[j].img.src = `./img/${arrows[j].direction}ArrowGhost.png`
                if (healthScore < 100) { 
                    healthScore += 1
                }
            }
            else if (arrows[j].y <= 0) { // If the arrow has passed the hitBox + tolerance.
                if (healthScore >0) {
                    healthScore -= 1
                }
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