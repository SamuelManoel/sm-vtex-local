<h1 align="center">
    <img alt="Vtex-Local" src="https://i.imgur.com/7M4hws6.jpg" />
</h1>
<h4 align="center">
  Local development package on the vtex platform
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/samuelmanoel/sm-vtex-local.svg">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/samuelmanoel/sm-vtex-local.svg">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/samuelmanoel/sm-vtex-local.svg">
<a href="https://github.com/samuelmanoel/sm-vtex-local/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/samuelmanoel/sm-vtex-local.svg">
  </a>
<a href="https://github.com/samuelmanoel/sm-vtex-local/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/samuelmanoel/sm-vtex-local.svg">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/samuelmanoel/sm-vtex-local.svg">
</p>

<p align="center">
  <a href="#zap-objective">Objective</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :zap: Objective

This package has as objective emulate components of vtex to optimize or develop the local front-end.

Currently the package emulates the following components:

```html
<vtex:template id="sub-template" />
<vtex:contentPlaceHolder id="shelves" />  <!-- Banner, Shelves, Html -->

```

### :x: Common mistakes.

Use the components underneath each other as the following example:
<br>

```html
<vtex:template id="sub-template" /> 
<vtex:template id="sub-template" /> 
```

**DO NOT** use the components together in line:
<br>

```html
<vtex:template id="sub-template" /> <vtex:template id="sub-template" />
```

## :rocket: Technologies

This project was developed with the following technologies:

---

-  [Gulp](https://gulpjs.com/)
-  [Gulp-util](https://www.npmjs.com/package/gulp-util)
-  [Node](https://nodejs.org/en/)
-  [Through2](https://www.npmjs.com/package/through2)
-  [File System](https://nodejs.org/api/fs.html)


## :information_source: How To Use


To use this package you will need the [Gulp](https://gulpjs.com/) and [Node](https://nodejs.org/en/).

Starting from the structure:
```
Raiz da pasta
├---Templates
|   |   home.html
|   |
|   └--sub-templates
|           footer.html
|           header.html
| 
├---Shelves
├---Banner & Html
|---gulpfile.js
```

On your command line:

```bash
# Install gulp-cli global
$ npm install --global gulp-cli

# Install gulp 
$ npm install gulp

# Install sm-vtex-local 
$ npm install sm-vtex-local
```
Create a gulpfile.js with these settings:

```js
const gulp = require('gulp');

const {templates, placeHolder} = require('sm-vtex-local');

gulp.task('components', ()=> {
    gulp.src('./templates/*.html') // template path
        .pipe(templates('./templates/sub-templates/')) // sub-template path
        .pipe(placeHolder('./Shelves/', 5)) // Shelves path & number of items on the shelf
        .pipe(placeHolder('./Banner & Html/')) // Banner & Html path
        .pipe(gulp.dest('dist')); 
})
```

Settings done, now just run:

```bash
$ gulp components
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/SamuelManoel/sm-vtex-local/blob/master/LICENCE) for more information.

---

Made with ♥ by Samuel Manoel Gomes 