let detectHit = () => {
    // If the hero's right > ogre's left, AND hero's left < ogre's right, then there's a collision.
    if (hero.x + hero.width > ogre.x && 
        hero.x < ogre.x + ogre.width &&
        hero.y < ogre.y + ogre.height &&
        hero.y + hero.height > ogre.y) { 
            ogre.alive = false
            document.querySelector('#btm-right > h2').innerText = 'You Killed Shrek'
        }
}

let movementHandler = e => {
    switch(e.key) {
        case 'w': 
            hero.y -= 10 // Move up.
            break
        case 'a': 
            hero.x -= 10 // Move left.
            break
        case 's':
            hero.y += 10 // Move down.
            break
        case 'd': // Move right.
            hero.x += 10
            break
        default: 
            console.log('This doesn\'t do anything!')
    }
    detectHit()
}

document.addEventListener('keypress', movementHandler)