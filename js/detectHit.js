let detectArrowHit = (direction) => {
    for (let j = 0; j < arrows.length; j++) {
        if (arrows[j].live == false) {
                continue // Exit this iteration of the loop if the arrow has already been counted for.
            }
        // Arrow is same height as hitBox so we can compare y values instead of (y + height).
        else if (arrows[j].y < hitBox.y + 10 && // Tolerance of 10 pixels; hitBox is drawn at y = 10.
            arrows[j].y > 0 &&
            arrows[j].direction == direction) { 
                arrows[j].live = false
                arrows[j].img.src = `./img/${arrows[j].direction}ArrowGhost.png`
                if (healthScore < 100) { 
                    healthScore += 1
                }
            }
    }
}

let hitHandler = e => {
    switch(e.key) {
        case 'w': 
            detectArrowHit('up')
            break
        case 'a': 
            detectArrowHit('left')
            break
        case 's':
            detectArrowHit('down')
            break
        case 'd': 
            detectArrowHit('right')
            break
        default: 
            console.log('This doesn\'t do anything!')
    }
}

document.addEventListener('keypress', hitHandler)