# vanillajs-spa
This projects shows how one can make a simple blog (list > details) style single page app using only plain javascript.
No frameworks or build tools are needed to run this.
But one will need a web server to serve the html and the js to the browser.uff.

## What's in this project
This is a barebones Browserify and Budo project. The idea is the build all other projects using this as the basic setup.

### index.js
This will be used by budo to start up things.

You'll include all your JS libs here

Look at the `start` script in the `package.json`

### JS Libs:
#### domready
So if you don't want to use jQuery, then [`domready`](https://www.npmjs.com/package/domready) is a very convenient (obvious) alternative.

#### jQuery
Of course, if you want to use [jQuery](https://www.npmjs.com/package/jquery), then the require is easy-peasy. 

### index.html
Has references to `main.css` and (**importantly**) `index.js`.

### main.css
Pretty obvious

### main.js
Inside `src/js/` is where all the JS is. That's where we include the one library that we use - `domready` - to generate the `index.js`

## Get going
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

That's it. If you want a project with plain vanilla JS and CSS that's all you need.

## Building the project for deployment
Well, this may be a rapo but we might still want to push this onto a prod environment. A apache server or something of the sort.

To generate a prod output, I've also created a `build.js` file that run using:
```
npm run build
```
This creates a build dir that includes all you need to push to prod.
### Testing the build
If you want to check the build - Just to make sure:
```
npm run testbuild
```
This runs `budo` on the build

## Using postcss-cli for css-declaration-sorter and autoprefixer

### Install postcss-cli globally:
`npm install -g postcss-cli`

And npx:
`npm install -g npx`

then install postcss plugins locally 

`npm install autoprefixer --save-dev`
`npm install css-declaration-sorter --save-dev`

### And then issue commands 
`npx postcss src\css\main.css -u css-declaration-sorter --replace --no-map`

`npx postcss src\css\main.css -u autoprefixer --replace`

Can also do postcss --h to see more options

