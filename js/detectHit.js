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
    let leftArrowActive = document.createElement('img')
    let downArrowActive = document.createElement('img')
    let upArrowActive = document.createElement('img')
    let rightArrowActive = document.createElement('img')
    
    leftArrowActive.src = './img/leftArrowActive.png'
    downArrowActive.src = './img/downArrowActive.png'
    upArrowActive.src = './img/upArrowActive.png'
    rightArrowActive.src = './img/rightArrowActive.png'
    
    switch(e.key) {
        case 'w': 
            ctx.drawImage(upArrowActive, 355, 10, imgWidth, imgHeight) 
            detectArrowHit('up')
            break
        case 'a': 
            ctx.drawImage(leftArrowActive, 215, 10, imgWidth, imgHeight) 
            detectArrowHit('left')
            break
        case 's':
            ctx.drawImage(downArrowActive, 285, 10, imgWidth, imgHeight) 
            detectArrowHit('down')
            break
        case 'd': 
            ctx.drawImage(rightArrowActive, 425, 10, imgWidth, imgHeight) 
            detectArrowHit('right')
            break
        default: 
            console.log('Not a valid key input.')
    }
}

document.addEventListener('keypress', hitHandler)