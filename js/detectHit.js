let detectArrowHit = () => {
    for (let j = 0; j < arrows.length; j++) {
        if (arrows[j].live == false) { // Don't want to double count.
            // (arrows[j].img == leftArrowGhostImg || arrows[j].img == downArrowGhostImg ||
            // arrows[j].img == upArrowGhostImg || arrows[j].img == rightArrowGhostImg) {
                continue // Exit this iteration of the loop if the arrow has already been hit.
            }
        // Arrow is same height as hitBox so we can compare y values instead of (y + height).
        else if (arrows[j].y < hitBox.y + 10 && // Tolerance of 10 pixels. 
            arrows[j].y > 0) { // hitBox is drawn at y = 10.
                arrows[j].img = upArrowGhostImg
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
                // arrows[j].img = (arrows[j].direction + 'ArrowGhostImg')
                healthScore += 1
            }
            else if (arrows[j].y < 0 && arrows[j].live == true) { // If the arrow has passed the hitBox's top edge (@ 10px) by 10px (@ 0px).
            arrows[j].live = false
            healthScore -= 1
        }
    }
}
    
    // If the hero's right > ogre's left, AND hero's left < ogre's right, then there's a collision.
    // if (hero.x + hero.width > ogre.x && 
    //     hero.x < ogre.x + ogre.width &&
    //     hero.y < ogre.y + ogre.height &&
    //     hero.y + hero.height > ogre.y) { 
    //         ogre.alive = false
    //         document.querySelector('#btm-right > h2').innerText = 'You Killed Shrek'
    //     }
    // Need to update health bar as well.

let hitHandler = e => {
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