// @preval

const FS = require('fs')
const Path = require('path')

const componentsPath = Path.join(__dirname, '..', 'components')

function readFilesIn(dirPath, subpath = []) {
  const files = FS.readdirSync(Path.join.apply(Path, [dirPath].concat(subpath)))
  return files.reduce((namesToContents, fileName) => {
    const filePath = Path.join(dirPath, fileName)
    const stats = FS.statSync(filePath)
    //const key = Path.join.apply(Path, subpath.concat(fileName))
    const key = subpath.concat(fileName).join('/')
    if (stats.isDirectory()) {
      //namesToContents[key] = readFilesIn(dirPath, subpath.concat(filePath))
      namesToContents[fileName] = ''
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