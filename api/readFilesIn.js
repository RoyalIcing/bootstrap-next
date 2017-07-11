const FS = require('fs')
const Path = require('path')
const Babel = require('babel-core')

function readFilesIn(dirPath, subpath = './') {
  const files = FS.readdirSync(Path.join(dirPath, subpath))
  return files.reduce((namesToContents, fileName) => {
    const filePath = Path.join(dirPath, subpath, fileName)
    const stats = FS.statSync(filePath)
    //const key = Path.join.apply(Path, subpath.concat(fileName))
    const key = Path.join(subpath, fileName)
    if (stats.isDirectory()) {
      namesToContents[key] = readFilesIn(dirPath, Path.join(subpath, fileName))
      //namesToContents[key] = FS.readdirSync(Path.join(dirPath, subpath, fileName)).join('') //FS.readdirSync(Path.join(dirPath, subpath, fileName)).join(', ')
    }
    else if (stats.isFile()) {
      const content = FS.readFileSync(filePath).toString()
      namesToContents[key] = {
        isFile: true,
        content: content,
        // ast: (fileName === 'Alert.js') && Babel.transform(content, {
        //   sourceRoot: Path.join(dirPath, subpath),
        //   filename: fileName,
        //   ast: true,
        //   code: false,
        //   presets: ['next/babel'],
        //   only: '**/*.js'
        //   // extends: Path.join(__dirname, '..', '.babelrc')
        // }).ast
      }
    }
    return namesToContents
  }, {})
}

module.exports = readFilesIn