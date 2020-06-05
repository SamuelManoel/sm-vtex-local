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
  <a href="#objective">Objective</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :zap: Objective

Este pacote tem como objetivo emular componentes da vtex para otimizar o desenvolvimento front-end local.

Atualmente o pacote emula os seguintes componentes:

- <vtex:template id="sub-template-aqui.html" /> 

## Erros comuns.

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

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/SamuelManoel/sm-vtex-local/blob/master/LICENCE) for more information.

---

Made with ♥ by Samuel Manoel Gomes 



