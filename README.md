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

Este pacote tem como objetivo emular componentes da vtex para otimizar o desenvolvimento front-end local.

Atualmente o pacote emula os seguintes componentes:

- <vtex:template id="sub-template-aqui.html" /> 

### :x: Erros comuns.

Use os componentes um embaixo do outro como o exemplo a seguir:
<br>
```
<vtex:template id="sub-template-aqui.html" /> 
<vtex:template id="sub-template-aqui.html" /> 
```

**NÃO** use os componentes juntos em linha:
<br>
```
<vtex:template id="sub-template-aqui.html" /> <vtex:template id="sub-template-aqui.html" />
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

Para usar este pacote você irá precisar do [Gulp](https://gulpjs.com/) e do [Node](https://nodejs.org/en/).

Partindo da seguinte estrutura:
```
Raiz da pasta
├---templates
|   |   home.html
|   |
|   └--sub-templates
|           footer.html
|           header.html
|
|---gulfile.js
|.....

```

 Na sua linha de comando:

```bash
# Instale o gulp-cli globalmente
$ npm install --global gulp-cli

# Instale o gulp 
$ npm install gulp

# Instale o sm-vtex-local 
$ npm install sm-vtex-local
```
Crie um gulpfile.js com essas configurações:

```js
const gulp = require('gulp');

const {templates} = require('sm-vtex-local');

gulp.task('components', function () {
    gulp.src('./templates/*.html') // informe o caminho dos seus templates html
        .pipe(templates('./templates/sub-templates/')) // informe o caminho dos seus sub-templates
        .pipe(gulp.dest('dist')); 
})
```

Configurações feitas agora só executar:

```bash
$ gulp components
```


## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/SamuelManoel/sm-vtex-local/blob/master/LICENCE) for more information.

---

Made with ♥ by Samuel Manoel Gomes 