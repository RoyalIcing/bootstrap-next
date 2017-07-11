// @preval

const Path = require('path')
const readFilesIn = require('./readFilesIn')

const componentsPath = Path.join(__dirname, '..', 'components')

module.exports = {
  componentFiles: readFilesIn(componentsPath)
}