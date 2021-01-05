# supersonic-tapping
Have you ever heard of Dance Dance Revolution (DDR), Tap Tap Revenge, or Beat Saber? If you have, then you would know that's what missing from that list is the next hit browser-based rhythm game! 

Fortunately for you, you've stumbled across Super Ultra Mega Sonic Tapping of Keyboard Evolution™, this generation's next big hit game amongst savvy Github gamers. 

Be prepared to be blown away by:
- How this game has a selective audience of those familiar with making pull requests from Github and opening files in their local server. 
- The lightweight design of the application due to how everything was engineered in one page. 
- The game's AI and quick ability to predict that you only want to play one song at one difficulty as soon as you click on the 'Start' button.

## Where to Play
Click [me](https://patricia-pan.github.io/supersonic-tapping/)!

## How to Play 
Use the a, s, w, d keys to press the arrows when they reach their placeholders at the top of the screen. Hint: The timing is to the beat of the selected song!

 Hitting each arrow at the right time will give you 1 point, and missing an arrow will cost you one point. 

 You lose the game if your health goes to 0, and you win the game if you're still alive when the song is over!

## Tech Stack
* HTML
* CSS
* JavaScript

## Steps Taken
* Stub out what needs to be done in psuedocode
* Render hit bar on canvas
* Create constructor function for creating arrow objects
* Edit image of arrow to have transparent background
* Read arrow choreography to create new arrow objects
* Render arrow images on screen and have them automatically scroll up
* Calibrate arrow creation speed relative to animate (game loop) speed
* Have arrows fade out upon collision with hit bar
* Have arrows fade out upon collision with hit bar AND correct key press
* Make health bar graphic dynamic 
* Select a song and add as audio
* Add 'start' and 'pause' button
* Update game background, fonts, border radius
* Added different colors and graphics for health bar
* Edit color of arrow image 
* Add 'win' and 'lose' logic and pop-up results
* Arrow presses visually represented on screen 

## Future Updates
* Add splash screen before game starts
* Add 'Restart' button to lose pop-up
* Refactor game to be responsive using grid and have a minimum width
* Refactor buttons to be square divs that animate (for example, change color, expand, or outline) when you hover over them
* Be able to select song and difficulty
* Have the option to use the arrow keys instead of aswd
* Add two player mode 
* Understand why placeholder arrows at top of screen aren't rendering on top of hit bar before start of game. When refreshing the page, sometimes they show up, most often they don't.

## Credits
>Mastering markdown: https://guides.github.com/features/mastering-markdown/

>DDR arrow sprite: https://www.deviantart.com/inkjuse/art/DDR-Arrow-111309080

>Image editing of DDR arrow: https://github.com/ngoldstein51

>Game Background: https://ansimuz.itch.io/cyberpunk-street-environment

>Audio: Aerosol Of My Love by Kevin MacLeod
>Link: https://incompetech.filmmusic.io/song/7013-aerosol-of-my-love
>License: https://filmmusic.io/standard-license

>Gif for >98% health: https://iblog.dearbornschools.org/vietinghoffpe/2017/05/22/last-week-to-swim-2/

>Fonts: https://fonts.google.com/specimen/Bungee+Shade?query=morn&sidebar.open=true&selection.family=Bungee+Shade

### Disclaimers
###### Super Ultra Mega Sonic Tapping of Keyboard Evolution™ is not a registered trademark. Mileage may vary. Please consult a doctor to see if Super Ultra Mega Sonic Tapping of Keyboard Evolution™ is the best game, like, ever for you. This was Trisha's unit 1 project after 3 weeks into General Assembly's Software Engineering Immersive (GA SEI), as a part of the 12/14/20 'Supersonics' cohort.
