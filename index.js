const gutil = require('gulp-util')
const through = require('through2')
const fs = require('fs')

function templates(componentsUrl) {
	return through.obj(function (file, enc, callBack) {

		try {
			//verifica se o aquivo não existe
			if (file.isNull()) {
				callBack(null, file)
				return
			}
			//se o stream tem suporte para conversão
			if (file.isStream()) {
				callBack(new gutil.PluginError('sm-vtex-local', 'Streaming not supported'))
				return
			}

			//regex
			const fileReg = /<vtex:template id="(.*)" ?\/>/gi
			//converte o conteudo do arquivo que esta em formato buffer para string
			let data = file.contents.toString()
			//substitui as tags procuradas dentro do arquivo pelo caminho passado

			let dataReplace = data.replace(fileReg, (match, componentName) => {
				return fs.readFileSync(componentsUrl + componentName + '.html', {
					encoding: 'utf8'
				})
			})

			//atualiza o buffer com o novo conteudo
			file.contents = new Buffer(dataReplace)
			file.path = gutil.replaceExtension(file.path, '.html')
			//retorna o arquivo substituido

			callBack(null, file)
		}
		catch (err) {
			const regexComponent = /\/([^/]*)$/
			let res = regexComponent.exec(err.path)
			console.log(`❗ Oops! I didn't find ⣿  ${res[1]}  ⣿  on the path  ${res.input} `)
		}
	})
}

function placeHolder(componentsUrl, number) {
	return through.obj(function (file, enc, callBack) {

		try {
			//verifica se o aquivo não existe
			if (file.isNull()) {
				callBack(null, file)
				return
			}
			//se o stream tem suporte para conversão
			if (file.isStream()) {
				callBack(new gutil.PluginError('sm-vtex-local', 'Streaming not supported'))
				return
			}

			//regex
			const fileReg = /<vtex:contentPlaceHolder id="(.*)" ?\/>/gi
			//converte o conteudo do arquivo que esta em formato buffer para string
			let data = file.contents.toString()
			//substitui as tags procuradas dentro do arquivo pelo caminho passado
			if (number !== undefined) {
				let dataReplace = data.replace(fileReg, (match, componentName) => {
					let cont = ""
					for (let i = 0; i < number; i++) {
						cont += fs.readFileSync(componentsUrl + componentName + '.html', {
							encoding: 'utf8'
						})
					}
					return cont
				})
				//atualiza o buffer com o novo conteudo

				file.contents = new Buffer(dataReplace)
				file.path = gutil.replaceExtension(file.path, '.html')
				//retorna o arquivo substituido
				callBack(null, file)
			}
			else {
				let dataReplace = data.replace(fileReg, (match, componentName) => {
					return fs.readFileSync(componentsUrl + componentName + '.html', {
						encoding: 'utf8'
					})
				})
				//atualiza o buffer com o novo conteudo

				file.contents = new Buffer(dataReplace)
				file.path = gutil.replaceExtension(file.path, '.html')
				//retorna o arquivo substituido
				callBack(null, file)
			}
		}
		catch (err) {
			const regexComponent = /\/([^/]*)$/
			let res = regexComponent.exec(err.path)
			console.log(`❗ Oops! I didn't find ⣿  ${res[1]}  ⣿  on the path  ${res.input} `)
		}
	})
}

module.exports = { templates, placeHolder }