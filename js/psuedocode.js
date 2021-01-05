// How do you display things partially on the canvas? Eg when spawning or despawning
// Math for figuring out when to remove arrows; are x and y in terms of pixels, where I'd need to know my image dimensions in pixels? 

// Will have to hard code x values for arrow spawn locations. 

// How to change the speed of scroll based on bpm of the song selected, or even how to figure out the math for one hard coded song and difficulty. 
// How do you do cases if you want to use string.includes(substring)? For having more than one arrow at a time. 

/////////////////////////////////////////////////
// Have Canvas MDN documents handy so I know what's available in terms of methods. 

// Add key listeners to show that they're working.
// Have things spawn and move up and spawn off the screen (get destroyed).
//// If arrow is past a certain y value without the correct key input, then lose a certain amount of health points. 
// Create collisionBar / hitBox
// Have arrows disappear when difference between arrow.y and collisionBar.y is < 50px etc. then it disappears. 
// Health logic based on hits. 


// Start screen, end screen

// Have things spawn based on the arrowDirections list. 
////////////////////////////////////////////////////

// SVG = scalable vector graphics for arrow image.

/* MVP:

- Splash screen
- Results screen
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

## Project Requirements
https://gawdiseattle.gitbook.io/wdi/11-projects/project-1

## Pitch Guidelines:
https://www.notion.so/patriciapan/Supersonics-P1-Pitch-Guidelines-5f6c39c888a749be8daaafae83872cae

## Example of solid README.md
https://github.com/melissay94/gradies-grueling-grind/blob/master/README.md

## Mastering Markdowns
https://guides.github.com/features/mastering-markdown/

### Websites for designing wireframes
https://app.diagrams.net/
figma.com

### Credit for DDR arrow image:
https://www.deviantart.com/inkjuse/art/DDR-Arrow-111309080

### Credit for editing DDR arrow images:
https://github.com/ngoldstein51

### Credit for canvas background:
https://ansimuz.itch.io/cyberpunk-street-environment

### Credit for water gif: 
https://iblog.dearbornschools.org/vietinghoffpe/2017/05/22/last-week-to-swim-2/

### Credit for pink sparkle gif: 
https://giphy.com/gifs/reaction-mood-3d63YDxRJRtkZepvGm

### Credit for background music.
Aerosol Of My Love by Kevin MacLeod
Link: https://incompetech.filmmusic.io/song/7013-aerosol-of-my-love
License: https://filmmusic.io/standard-license

Maple Leaf Rag by Kevin MacLeod
Link: https://incompetech.filmmusic.io/song/5762-maple-leaf-rag
License: https://filmmusic.io/standard-license

### Credit for fonts:
https://fonts.google.com/specimen/Bungee+Shade?query=morn&sidebar.open=true&selection.family=Bungee+Shade