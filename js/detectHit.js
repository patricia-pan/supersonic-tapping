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
    let leftArrow = document.createElement('img')
    let downArrow = document.createElement('img')
    let upArrow = document.createElement('img')
    let rightArrow = document.createElement('img')
    
    leftArrow.src = './img/leftArrowActive.png'
    downArrow.src = './img/downArrowActive.png'
    upArrow.src = './img/upArrowActive.png'
    rightArrow.src = './img/rightArrowActive.png'
    switch(e.key) {
        case 'w': 
            ctx.drawImage(upArrow, 355, 10, imgWidth, imgHeight) 
            detectArrowHit('up')
            break
        case 'a': 
            ctx.drawImage(leftArrow, 215, 10, imgWidth, imgHeight) 
            detectArrowHit('left')
            break
        case 's':
            ctx.drawImage(downArrow, 285, 10, imgWidth, imgHeight) 
            detectArrowHit('down')
            break
        case 'd': 
            ctx.drawImage(rightArrow, 425, 10, imgWidth, imgHeight) 
            detectArrowHit('right')
            break
        default: 
            console.log('Not a valid key input.')
    }
}

document.addEventListener('keypress', hitHandler)