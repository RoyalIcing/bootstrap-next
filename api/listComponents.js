// @preval

const FS = require('fs')
const Path = require('path')

const componentsPath = Path.join(__dirname, '..', 'components')

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
      namesToContents[key] = FS.readFileSync(filePath).toString()
    }
    return namesToContents
  }, {})
}

const files = FS.readdirSync(componentsPath)
const componentFiles = readFilesIn(componentsPath)

module.exports = {
  files,
  componentFiles
}