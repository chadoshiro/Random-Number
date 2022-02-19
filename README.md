### Guess that Random Number!

This is a simple game that is fun! Guess a number between 1 - 10 and see if you get the same answer as the program. Will you test your luck?

### Prerequisites
In order for students to complete this project, they will need:

- Basic knowledge of html, css, and javascript
- Basic knowledge of functions, DOM, if statements, and math methods

### Your Challenge

## Part 1:
1. Create the following files:
- HTML (index.html)
- CSS (styles.css)
- JS (App.js)

Make sure that all the files are linked correctly!

2. Set up your HTML file by creating:
- ```h1``` for the title that says "Guess that Random Number!".
- ```p``` for the description of the game that says "Guess a number between 1 - 10. You only get 1 shot. Test your luck!".
- ```input``` with an id to take the users input.
- ```button``` for when the user clicks the button. The name of the button is "Guess" and in the button tag you should have an "onclick="Random()"".
- Another ```p``` with an id that is equal to "result"
- ```div``` with an id that is equal to "image"
- Use ```br``` to space out your lines nicely if needed.

## Part 2:
1. Set up your CSS file by creating:
- A ```body``` element. In here,
  - Set the ```margin``` to 0px
  - Set the ```width``` to 100%
  - Set the ```height``` to "auto"
  - Set the ```background-color``` to "gainsboro"
  - Set the ```margin-top``` to be 20px
  - Set the ```margin-bottom``` to be 20px

- A ```.resize``` element. In here,
  - Set the ```width``` to 400px
  - Set the ```height``` to "auto"

## Part 3:
1. In your JS file:
- Initialize four variables:
  - ```user``` to get the users input
  - ```random``` that generates a random number
    - Use ```Math.floor()``` and ```Math.random()```. Look at the link at the bottom to see how to generate numbers within a range of numbers.
  - ```output``` to show an image on the screen
  - ```img``` to chose the image that you want to display
    - Set it initially as an empty string

2. Create an if-else statement that goes through all of the possibilities that could happen

- First if statement:
  - Check if the random number generated is greater than the number that the user inputted.
    - For example, ```if(random > user)```
- Second else if statement:
  - Check if the random number generated is less than the number that the user inputted.
- Third else if statement:
  - Check if the random number generated is equal to the number that the user inputted.

- To make sure that your random number generator is working, you can use ```console.log(random)``` in each of the if-else statements and run your code. If you keep on running it, it should show random numbers between 1 - 10.

- Now, try to guess negative numbers. What happens? Do we want the user to be able to input negative numbers?
- Try to guess numbers over 10. What happens? Do we want the user to be able to input numbers over 10?

- Since the generator only goes from 1 - 10, we want the user to only input numbers from 1 - 10. This means that in order to fix this we have to do error checking.
  - For the error checking, put this if statement above the previous 3 that you wrote. This if statement will check if the user inputted a number less than 1 or greater than 10.
  - You don't have to worry about them typing letters.

- For all of the 4 if statements:
  - Inside, you will use ```document.getElementById()``` and ```.innerHTML``` to get the result of the comparison.
    - Make that equal to these strings corresponding to the correct if statements:
     1. "Please pick a number between 1 - 10 :)"
     2. "Too low! The random number was" + " " + random
     3. "Too high! The random number was" + " " + random
     4. "You Got It! CONGRATS!"
  - Use the ```img``` variable we created earlier and make that equal to an img tag. This tag should have a class that connects to ```resize``` in the CSS file and a source to the image you want.
  - Finally, use ```.innerHTML``` to output the ```img``` variable.

If you followed along, you should be all done! Congrats!

***************
let them chose pictures to use
make it to where they chose between pictures and pick the correct picture, use arrays
let them change the range of guess and multiple times to guess just like what i thought of earlier
***************

### Resources
- Math.floor() and Math.random() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- DOM getElementById() method - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
- DOM innerHTML property - https://www.w3schools.com/jsref/prop_html_innerhtml.asp

### Stretch Goals
- Design the website to your liking
- Try changing the random numbers generated from 1 - 10 to another number (ex: 1 - 15).
- Check the users input to see if they inputted a string. If they did, give them an error statement.
  - For help - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
