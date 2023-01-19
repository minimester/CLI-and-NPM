# CLI-and-NPM We-Do

Now that we got some experience with the command line and `Node`, let's continue on and uitilze more packages. As we know, `Node` is a JavaScript runtime environment, which means we do not need a web browser to view or write JavaScript. We utilized different packages yesterday, today we will focus on some of the functionality `Node` has built in.

## Activity 1 - Command-Line Arguments
Let's capture some arguments from the command line. This will allow the application to be dynamic. Let's add the following code to our `app.js` file.
```js

let commandLineArguments = process.argv;

console.log(commandLineArguments)
```
Save the file and run `node app.js` and let's see what is returned.

<details>
<summary>Command Line Arguments variable returns. . .</summary>

```bash
['usr/path/local/node/19.2.0/bin/node','/Users/id/Desktop/CLI-and-NPM/We-Do/app.js']
```
</details>

What is this?  
We get an array returned that represents exactly what we typed in the command line to run our `app.js`. The first value is the file path where Node.js is installed, the second is the file path for the file executed. Let's add on, not to our code, but to the command we enter in our terminal.

> Note: The first two indicies may differ from person to person as the first one is the path where `Node` is installed on your machine. While the second is the location of the directory where we are in. This won't affect the functionality of our application.

```bash
node app.js 'Hello World' From the command line
```

This time we see more information, including the information we entered from the command line in our array.  

```bash
['usr/path/local/node/19.2.0/bin/node','/Users/id/Desktop/CLI-and-NPM/We-Do/app.js', 'Hello World', 'FROM', 'the', 'command', 'line']
```
> Note: The command line interprets a space as the separator between two commands, hence why we see the `FROM` and `the` etc. separated.

## Process.argv
`process` is a Node global object that represents all the things happening with the particular application.  
The `argv` property of the `process` object is an array that holds exactyl what we typed in the command line when it's executed.  

### How to access the data we want?
We could get the index of the array but everyone's node installation is at a different location, so that wouldn't work. Instead, we will use some array methods. We want to take certain values out, so this is a perfect use case for the `slice` method.

```js
const commandLineArguments = process.argv.slice(2, process.argv.length)
```

We start at the second index, and use the length of the array and take the items out.  

```js
node app.js 'first name' 'last name'
```

Awesome! This is just one of the many ways to utilize the CLI and Node.

## Activity 2 - FS Module
We can also use Node to generate files! It has a built in module that we will use. First, let's set up the code to run it.  

Let's create a  function that will take in two arguments and will return a string.
```js
function createPage(firstName, lastName) {
    return `firstName: ${firstName}, lastName: ${lastName}`
}
```
Let's add a `console.log(createPage('FirstName', ''LastName))` and run our application with `node app.js`. 

Now let's combine the code we used in Activity 1 so the user can enter their name, and it will be passed into our `createPage` function.

Since it's stored as an array into a variable called `commandLineArguments`, we can just access it via array destructuring. Let's create those new variables now and declare them above our `createPage` function.

```js
const [firstName, lastName] = commandLineArguments
```

Now let's run our app and see if it logs us back the correct information. Run our app with the following command.

```bash
node app <firstName> <lastName>
```

For the next step we want to create an HTML file that's dynamic with the information the user enters. We will add to our `createPage` function an HTML head and body.

```js
function createPage(firstName, lastName) {
    return `
        <html>
        <body>
            <h1>Welcome ${firstName} ${lastName}</h1>
        </body>
        </html>
    `
}
```
### Using the FS module
Now that we got that setup, we can leverage the `fs` module. Let's require it at the top of our file.
```js
const fs = require('fs')
```
Let's use that package. The `fs` module has functions built on it, in to generate a file, we will use the `writeFile` method.

```js
fs.writeFile('index.html', createPage(firstName, lastName), err => {
    if (err) throw err;

    console.log('File created! See the index.html')
})
``` 
Run our application with `node app.js <firstName> <lastName>`.  

Now in our `we-do` directory, we see an `index.html` file with the name the user entered. If you open up the file, you will see `Welcome <firstName> <lastName>`.

### Breaking down the writeFile method
The `writeFile` method is used to create files using the `fs` module from node. FS stands for file system.

- The first argument is the name of the file that is created. In our case, we are creating a file called `index.html`.
- The second is the content that will be in the file. We used a function that captures the user's first and last name.
- The third is an anonymous function to handle errors.
    - This states, if there was an error creating the file, we would throw an error and the file would not be created.

### Link
- [Documentation](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback)

## Activity 3 - URL Module
The URL module splits the web address into small readable parts.  
Let's include this module in our `app.js`.
```js
const url = require('url');
```
Now let's create the actual URL that we will hit, in this case we will use an API that returns fake data.

```js
const address = 'https://jsonplaceholder.typicode.com/comments?postId=1&email=Jayne_Kuhic@sydney.com';
```
Let's parse the address with the by calling the package and the `.parse()` method. This returns us a URL object with each part of the address as its properties.  

```js
const parsedUrl = url.parse(address, true);
```
Now we can `console.log` the parsedUrl` variable and different properties of the address.

```js
console.log(parsedUrl)
```
Let's run our app with `node app.js` and see what is returned.

```js
console.log(parsedUrl.host);
```
We see the host returned, in this case, it's the URL of the API we are using. Keep trying to access the different properties of this URL object.

<details>

<summary>URL Snippets</summary>

```js
console.log(parsedUrl.host); //returns 'jsonplaceholder.typicode.com'
console.log(parsedUrl.pathname); //returns '/comments'
console.log(parsedUrl.search); //returns 'postId=1&email=Jayne_Kuhic@sydney.com'
const parsedUrldata = parsedUrl.query; // returns an object: { postId:'1', email:'Jayne_Kuhic@sydney.com' }
console.log(parsedUrldata.postId); //returns '1'
console.log(parsedUrldata.email); //returns 'Jayne_Kuhic@sydney.com'
```

</details>


