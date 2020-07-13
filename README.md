# wk3-homework

## Links:
```
Live Site: 
     https://EdenKhaos.github.io/wk3-homework/
   
Code Repo: 
     https://github.com/EdenKhaos/wk3-homework 
  
Issues & Explanation:
     https://github.com/EdenKhaos/wk3-homework/edit/master/README.md

```
## Narrative to try to accomplish:

1. Created an application that generates a random password based on user-selected criteria. 
2. This app runs in the browser and feature dynamically updated HTML and CSS powered by my JavaScript code.
3. It also features a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

For special characters in addition to normal character types I referred to this site: https://owasp.org/www-community/password-special-characters

For the majority of this set up the pseudo code is the most explanatory in achieving these goals.


## Issues Found
```
The biggest issue was determining the pseudo code to explain this process and which order the js script needed to be in. I still need more practice in pseudo code in general. For awhile I was running in circles as I naively created my variables to be the same as my function execution name. I had to make sure to define a different name next to each function that was a bit different from my variables but related to each other.

Through this process I figured if the operators where not correct and in order, the entire generator would not kick the prompts(took way too long on this one). It also took me awhile to figure this out as I was testing the html to see why the prompts were not getting activated during page activation.

Overall lots of google-foo used to find pieces of code that might work plus the last weeks in-class activities helped a lot. 

```

## Pseudo code for html

```
1. No changes made(generally already set up for use on multiple media platforms and follows given homework assets image, could be cleaned up a bit(time constraint)

```
## Pseudo code for css

```
1. No changes made(generally already set up for overall look, setup and follows given homework assets image)

```
## Pseudo code for js

```
1. Assignment Code
2. given first piece of code to generate the start of each of the character type variables
3. create variables that allow for special types of characters, standard characters by defining the character lengths and checks before defining the functions
4. first go by order of prompts needed to set up password, first create a function to determine the length of the password
5. second create a function to determine if there are uppercase letters in the password yes/no only
6. third create a function to decide to include numbers in the password
7. fourth create a function to decide if a special character will be in the password
8. create a function where all of the previous functions are combined to create a random number
9. checking all functions for character types, numbers, case type and special characters
10. random number to be generated
11. Write password to the #password input
12. new variable of the password
13. Add event listener to generate button
```
## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


