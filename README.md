# Hearthstone Memory Game

Creating a custom memory game is something you would never think would be possible.
I have decided to take one of my favorite (and addicting) video games and turn it into a memory game.
This is "Hearthstone Memory". This is to be played in the exact same way as the original memory game, from Hasbros.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, I mention all of the languages, frameworks, libraries, and any other tools that I have used to construct this project.

### Lanuages 

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Tools 
- [Autoprefixer](https://autoprefixer.github.io/)
- [Markup Validation service](https://validator.w3.org/) 
- [GitHub](https://github.com/)
- [Git](https://git-scm.com/)
- [Gitpod](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en)
- [VSC](https://code.visualstudio.com/download) 
- [Microsoft Office](https://www.office.com/)
- [favicon](https://www.favicon.cc/) and a [tutorial](https://tutorialehtml.com/en/what-is-favicon-ico-usage/)  

### Frameworks

- [Bootstrap](https://getbootstrap.com/)

### libraries
- [JQuery](https://jquery.com)


## Testing

During various branches, which have been merged to the final 
materbranch, I have tested the game on twin teenagers (16). 
They have supplied feedback wich has been taken care of as some of their input was implemented. These have 
been documented in this section. 

Initially we tried to implement testing via [jasmine](https://jasmine.github.io/) but that was not possible since I had to parce
values into a function to test it,which was not possible for the code I had written. This means that I had to 
resort to physical testing. 

- Test 1: Animating the  cards to flip 
    - Some time was spent on [researching the 3d persepctive css property](https://3dtransforms.desandro.com/perspective).
    - Then some time was spent on [how to flip cards using css](https://www.w3schools.com/howto/howto_css_flip_card.asp).
    - mutiple  attempts was made to flip cards on click (via a css class "flip"), and then the successful version was commited.
    - Cards now successfully flip with no bugs.

- Test 2: Matching the cards
    - We needed to make sure the cards match and to do this I researched the [data match attribute](https://www.w3schools.com/tags/att_data-.asp).
    - we then used the "data-match" attribute with a assigned value that will be compared in script.js.
    - cards will be given the class of "flip" and then the code will run
    - the "data-match"values will be compared and if they match the cards will not be able to flip back; for this we turned off their click fucntions and assigned different value to their variables.
    - If the "data-match" values do not match, the cards will be unflipped by removing the "flip class"
    - Some bugs were discovered at this Stage

- Test 3: Bug 1; Speed runs
    - If a user was to quickly click through the matches, more than 2 cards would be revealed
    - I created a setTimeout() function and a lock variable.
    - The setTimout functions displays the faces of the cards for a certain period of time before the cards are unflipped (the "flip" class was removed)
    - In the mean time while the card's faces were shown the board would be locked (lock variable).
    - Bug was successfully removed, a user can no longer click through the cards at random speeds. 

- Test 4: Bug 2; Single card matching with itself
    - When double clicking on a card a match would happen
    - To prevent this the cardFlipped variable was created.
    - If the card was already flipped the function which would run the match check would not be activated
    - Bug was successfully removed, no double click matches would happen

- Test 5: Cards shuffle every new game
    - I created a self invoking function that assignes a random number between 1-18 to each card
    - Then the cards are sorted in the order the random number is assigned to them.
    - This happens each time the page loads
    - Each time the page is loaded this function happens successfully.

- Test 6: Creating a new game
    - Due to the code invoked for the bugs, starting a new game without refreshing the page is a strenuous task
    - This resulted in the "new game" button becoming a page refresh button
    - This also prevented the "high score" feature to be implemented 
        - if a highscore feature was implemented then it would push the score value into an array, sort the array and then take the first 10 values and put them into an `<ol>` as `<li>` items. This would be on the local storage. 
    - page now refreshes and the game is reset properly but the highscore feature has to be removed.

Essentially, in this 
part you will want to go over all of your user stories 
from the UX section and ensure that they all work as intended, 
with the project providing an easy and straightforward way for 
the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The card back was optained from [engadget](https://www.engadget.com/2014-02-26-new-hearthstone-card-backs-revealed.html)
- The card front for Jaina Proudmoore was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Jaina_Proudmoore)
- The card front for Rexxar was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Rexxar)
- The card front for Malfurion Stormrage was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Malfurion_Stormrage)
- The card front for Uther Lightbringer was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Uther_Lightbringer)
- The card front for Anduin Wrynn was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Anduin_Wrynn)
- The card front for Valeera Sanguinar was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Valeera_Sanguinar)
- The card front for Thrall was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Thrall)
- The card front for Gul'dan was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Gul%27dan)
- The card front for Garrosh Hellscream was optained from [HearthstoneWiki](https://hearthstone.gamepedia.com/Garrosh_Hellscream)



### Acknowledgements

- I received inspiration for this project from Code Institute who recommended a memory game for my MS2. 