const next = require('next')

//const dev = process.env.NODE_ENV !== 'production'
const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

const appPromise = app.prepare()

exports.servePage = function lofiToJSON(req, res) {
  appPromise.then(() => {
    handle(req, res)
    //res.send(req.url)
  })
  .catch(error => {
    res.send(error)
  })
}