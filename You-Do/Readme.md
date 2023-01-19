# Building a CLI Project

## Introduction
For this portion, we will be researching packages, using said packages, and practice leverage those packages in small command line exercises.

## Activity 1 - Due Diligence 
There are millions of packages out there. So how do we decide which ones to use? There are a few factors, weekly downloads, compatibility, is the package still being maintained, does it break anything, etc. Some packages remain the de facto go to for certain use cases. Ultimately it comes down to the the reliability of the package, the application, and what you need accomplished.  

### Task
 You are working on a command line application that wants to capture user input and convert the distance the user enters to different measurements.
- Find two packages for handling user input, and two packages for converting units.
- Review the documentation and write in the `Documentation.md` and fill out the respected information on how to use the packages.
- Decide which one you are going to use and explain why you made that choice.

## Activity 2 - Implementing the user input package
Now that you have decided which one to use. Go ahead and implement the package. 

### Task
- Install the respected package and require it in the `app.js` file.
- Capture the following information via the input package you have chosen:
    - the user's name
    - the unit's value 
    - the unit they want to convert it to.
- Display the user's name in the console with the unit's value.

Example output:

```bash
<Username> wants to convert <10> meters to kilometers.
```

## Activity 3 - Implementing the unit converter package
Just like in  activity 2, you will decide on which unit converter package to use.

### Task
- Install the respected package and require it in the `app.js` file.
- Convert the captured unit the user entered and convert it to kilometers.
- Display that message in the console to the users.

Example output:

```bash
Your units are coverted to <converted-unit>.
```

## Stretch - Activity 4
Awesome! Give yourself a pat on the back for doing some research on packages and implementing them in your application. There are many packages out there that help provide more functionality to your app, so you don't have to.  

### Task
- Prompt the user and ask what units they would like converted
- Research and add packages that can display the text in the command line in a unique way. (e.g. colorful text depending on the units entered)



## Links
- [NPM](https://www.npmjs.com/)