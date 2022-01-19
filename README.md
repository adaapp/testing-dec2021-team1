### Testing-Assignment-dec2021-team1

### https://hardcore-almeida-ba4797.netlify.app/?#

### https://meet.google.com/tzi-hzwp-pgu

## Welcome!

### Problem Statement 

We will be creating a colour code converter. The MVP is that it will allow you to convert RGB to Hex colours and vice versa.
<div class="column">
    <img src="https://code.adonline.id.au/wp-content/uploads/excel-rgb-to-hex-01-2.png" alt="Snow" style="width:70%; ">
</div>

## Roles

|Name     | Job Roles    |
|---------|--------------|
|Nicholas Hadjioannou| Scrum Master |
|Jonathan Daniel      | DevOps       |
|Husna Dar   | UX           |
|Georgia Bond | QA           |
|Ella Margetts    | QA           |


We worked well as a team, by regularly enduring google meets created by Nick, to ensure we knew what our current and next task was and to see if anyone needed help. This made sure we were all on track for the deadline and there was no confusion; every step was completed.


## Coding Practice
We will be coding using React. Initially, we had to take some time away to research and develop our understanding. We chose to use React as not only is it flexible but fast and simple to use as a framework for handling the view of our web. It also allows for easy collaboration. 
<br>

### Continuous integration/continuous delivery
We will be following this method of deployment for code in our project
<br>
1.Write the code
<br>
2.Commit changes to a remote branch
<br>
3.Request a review of those changes that have been made
<br>
4.Make changes based on any comments that have been made
<br>
5.Check if final code deploys on netlify
<br>
6.Fix deployment issues if needed
<br>
7.Push to main repository
<br>
8.Deploy on main Netlify website

## Testing 

https://github.com/adaapp/testing-dec2021-team1.git

Code
<br>
We will be running smoke tests as our preliminary testing to confirm that our build is stable enough for further testing. Smoke tests will easily identify small failures, for us to fix. During our testing phase, we will also be 'throwing an error'; to indicate whether anything unexpected will happen to disrupt the normal flow of execution. 


A coding standard will improve the readability and maintenance of the code, as well as help us detect errors easily. We will achieve this by having standard variable and class names.
<br>

Design
<br>
We will be sending out a google form to our cohort to ensure the best design is chosen; the one thats simpler to navigate, easier to use and the most appropriate font and colour. We will also run an accessibility and performance audit on our HTML, to ensure that is running smoothly.

<br>


|Test    | What is it testing?    | Example Outcome                     |
|-------------|------------------------|-----------------------------|
|Smoke Test   | That our following tests will work |True|
|Smoke Test   | "Testing our colour converter"|"Testing our colour converter"|
|Hexconverter function  |  hex to rgb         | #8a3be2 to rgb(138, 59, 226)|
|Hexconverter function  |  rgb output length is 12-18 | .toHaveLength(18)|
|Hexconverter function  |  Case sensitivity does not matter | #aAABbb to rgb(170, 171, 187) |
|Hexconverter function  |  Not inputting a # will still give you correct rgb| AAABBB to rgb(170, 171, 187)|
|Hexconverter function  |  Letter inputted is only A-F| #CCCCCC to rgb(204, 204, 204) |
|Hexconverter function  |  Input is length 6| #123 is not rgb(1,2,3) |
|Hexconverter function  |  There is an object or function only| (hexconverter).toBeInstanceOf(Object) |
|rgbconverter function  |  rgb to hex         | rgb(12, 34, 56) to #0C2238  |
|rgbconverter function  |  There is an object or function only | (rgbconverter).not.toBeInstanceOf(Array)  |
|Throw an Error| String is not in correct format in rgb value| "Currently in invalid format"|
|Throw an Error| Value is given instead of a string  |"input.split is not a function"|
|Google Form  | Which design is better | *See UI Design Results below*|
|Google Form  | End user testing       |  *See End User Testing below*|

### Our Testing Examples

<img width="558" alt="Screenshot 2022-01-19 at 11 40 53" src="https://user-images.githubusercontent.com/90607750/150123161-a4046e95-e7c8-496d-b0ab-f50932f8267c.png">

<img width="558" alt="Screenshot 2022-01-19 at 11 41 17" src="https://user-images.githubusercontent.com/90607750/150123263-b3fdae2c-5a66-4375-ba47-5297324347ac.png">

## Testing Strategy 

Our first testing consisted of smoke testing, to determine whether the initial build is stable or not, to further testing. We wrote a few of these to make sure; using toBe, toEqual and toBeTruthy. 

We decided to work on testing our individual functions before incooperating the HTML/CSS, to make sure our functions worked.

First we created a describe block that converted hex to rgb. Inside each box, we created multiple assertions to test the input, output and sometimes errors being thrown. In this instance, we tested that...

Similarly, another describe block we tested was the rgb function; to ensure rgb converted to hex. An example of an assertion within this was...

To ensure certain symbols or negative numbers etc couldn't be inputted, we created a test to throw out an error when a user...

To ensure good coding practice throughout this project we regularly tested and went through our code reviews as a team on pull requests before they were merged into the main branch.

Our workflow meant that we worked well as a team; one worked on the issue relevant to their area and if they needed help, it was easy to collobrate and let the rest of the team know. Once the coding, designs or testing had been completed, it was commited to a seperate branch on GitHub to be reviewed by the team and checked for conflicts, before being added to our final project.

## UI Testing Table
|Expected Outcome| Actual Outcome    | Image
|---------|--------------|--------------|
|When the input box is clicked the border changes colour| The border changes from black to light purple when clicked which is the expected outcome|<img width="354" alt="Screenshot 2022-01-19 at 11 27 32" src="https://user-images.githubusercontent.com/91063109/150121421-5c27673c-bdc6-4478-a36f-9cf7aabf8841.png"><br><img width="354" alt="Screenshot 2022-01-19 at 11 28 27" src="https://user-images.githubusercontent.com/91063109/150121464-c450ab10-48af-46ec-8403-00ff8f3995a0.png">|
|When the RGB button is clicked a drop down appears allowing you to choose between RGB and HEX|The same as expected outcome|<img width="354" alt="Screenshot 2022-01-19 at 11 36 06" src="https://user-images.githubusercontent.com/91063109/150122405-2f2f0bf2-213c-47be-b2b7-adc47a73ef2e.png">|
|When the HEX button is clicked a drop down appears allowing you to choose between RGB and HEX|The same as expected outcome|<img width="354" alt="Screenshot 2022-01-19 at 11 36 55" src="https://user-images.githubusercontent.com/91063109/150122746-cd2437c6-13de-4e4a-8c7b-4da6ddf3f7f0.png">|
|When entering a RGB value a HEX value is produced with a hashtag(input -12,34,56)|The same as expected outcome|<img width="335" alt="Screenshot 2022-01-19 at 11 41 13" src="https://user-images.githubusercontent.com/91063109/150123156-99f19593-5170-44de-a980-67947938ee27.png">|
|Before an input is given it displayes " No Colour Yet" and when an input is given a square appears and the HEX code (in this test we did a RGB to HEX conversion )|The same as expected|<img width="335" alt="Screenshot 2022-01-19 at 11 43 03" src="https://user-images.githubusercontent.com/91063109/150123405-d4416df3-7bd4-4543-92aa-4d315c290347.png"><br><img width="335" alt="Screenshot 2022-01-19 at 11 42 49" src="https://user-images.githubusercontent.com/91063109/150123360-139f12a8-9a5e-4296-90cc-f795668f9dd4.png">|
|When the converter is change, e.g. RGB to HEX is changed to HEX to RGB, it should go back to saying "No Colour Yet" without a coloured square| The outcome was that the coloured square stays there until a new input is given|<img width="335" alt="Screenshot 2022-01-19 at 11 48 55" src="https://user-images.githubusercontent.com/91063109/150124440-da4e3c75-c48a-4d58-b13a-ac44ea771678.png"><br><img width="335" alt="Screenshot 2022-01-19 at 11 49 34" src="https://user-images.githubusercontent.com/91063109/150124472-baa74970-3e38-46ce-b686-6f6fad107aa2.png">|


## UI Design

To create the following mock designs for this app, both HTML and CSS was used on VSCode. Prior to making the final design, numerous tutorials had been watched by Husna, on how to create a simple converter app, as HTML and CSS had not been used by our team, to design an app before.  The overall process was quite easy as VSCode had a lot of inbuilt features which made it easy to call on certain functions or even to use certain colours. Adjusting the designs for the final product was therefore made more simple.


### Design 1:

<img width="300" alt="Screenshot 2022-01-14 at 12 02 01" src="https://user-images.githubusercontent.com/90607750/149512567-e4fc9eea-68e1-4f8d-92d0-3080a21572ac.png">


### Design 2:

<img width="300" alt="Screenshot 2022-01-14 at 12 02 09" src="https://user-images.githubusercontent.com/90607750/149512620-4270dfaf-28d0-4e72-86c8-edb1231dc787.png">


## Google Forms
### A/B Testing Form

To decide upon the most appropriate design we will be using A/B testing. This is a method where two versions of the webpage are taken to compare against one another and then determine which one performs better and has a more appropriate design for our converter. We will do this through the google form we created below and sent out to the rest of our cohort as it would be a website they might use for a coding project so we thought it would be the right audience to target.

The most popular will be the nearest to the final design; feedback will be taken to improve our webpage to be the most functional, beneficial and appropriate design. 

<br>

https://docs.google.com/document/d/1Te9h920ELvVzeZvVaIUvSncCxGQGHmN-BdtRUsuejzw/edit

<br>

<img width="226" alt="Screenshot 2022-01-13 at 15 04 25" src="https://user-images.githubusercontent.com/91063109/149357809-7bbe4907-e27b-4987-9972-1db99cc9f51e.png">


### Results
<br>
<img width="558" alt="Screenshot 2022-01-18 at 10 04 49" src="https://user-images.githubusercontent.com/91063109/149915771-6766f7a1-c248-44a8-820f-133c943ddb94.png">


From the google form, it is clear that the majority votes were for Design 1. The main feedback was that the colours matched better which made it more appealing as well as the Dark colours made it eye catching. UI Designer Husna went ahead and did the Html and Css for this design based on the feedback from her mockups.


### End User Testing Form
End-user testing can help us find out more information on the ease of use. The benefit is feedback on layout, navigation, errors, etc, to see where improvement can be made. Therefore, to know what to do in the future we sent out another google form based off any issues rasied from the first end user testing form after improvements have been made.We will do this through the google form we created below and sent out to the rest of our cohort as it would be a website they might use for a coding project so we thought it would be the right audience to target.

<br>

https://docs.google.com/forms/d/1Yp3g3DOv1_Yr09C5h8hONQHFA9kFIYfrBqtThiJhENk/edit

<br>
<img width="558" alt="Screenshot 2022-01-18 at 10 37 39" src="https://user-images.githubusercontent.com/91063109/149921558-719a36fa-9e13-4db5-9771-2ac6e9147cf2.png"><br><img width="558" alt="Screenshot 2022-01-18 at 10 38 09" src="https://user-images.githubusercontent.com/91063109/149921569-b57da7cd-a8e1-4857-b437-2f9facb0ccac.png">



 
### Results

From these we gathered...
This type of testing can help us improve our app and develop it. The users we sent this form out to are likely to be users of the app for coding projects. They would have also had an idea of what to expect from the app so navigation is easy. Next time we send out a user testing form, we could send it to another user group that may not have seen this time of app before.

## GitHub Pages 

We have chosen to use GitHub pages, as it is a service that takes HTML, CSS nad JavaScript files straight from a repository on GitHub and runs the files through a build process and then to publish a website. It is easy for collaboration and clearly identifies where improvements have been made and by who.

We have also setup Github Actions to run our integration tests and make sure that they are passing.

## GitHub Issues

Whilst working on our Assignment we used GitHub Issues. We created issues on GitHub around tasks we need to complete or areas we need approval or help on. This was useful in....


## Final Product

<img width="735" alt="Screenshot 2022-01-14 at 11 58 44" src="https://user-images.githubusercontent.com/90607750/149512175-9f16b16e-90a3-4955-b2b5-f5282cd42ed7.png">

https://hardcore-almeida-ba4797.netlify.app/?#

For those who are unsure of how to input their colour codes, please observe the examples shown below for the RGB and Hex formats:
<br>

RGB: 65,104,220 

- Please ensure you include a comma between each value in order for the conversion to work. You must make sure that each value you enter is a number between 0 and 255. The lower the value is, the less saturated the colour will be and vice versa.

Hex: #8a2be2  

- The Hex code must have a hashtag at the beginning, otherwise the code will be invalid. Each hex code must contain 6 values. No more and no less.
<br>
As clear, the final webpage used the design 1, with a few tweaks after gaining our UI testing results. We decided to that Design 1 was the most appropriate colour scheme. The contrast between the dark and light colours made it eye-catching. In future, we would like to develop the design so that a bigger part of the app changed colour based off the user input. for example the border colour could change.
