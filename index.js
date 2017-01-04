const { execFile } = require(`child_process`)

module.exports = hashPassword

function hashPassword (password, path = `tor`) {
  return new Promise((resolve, reject) => {
    execFile(path, [ `--hash-password`, password ], (error, stdout, stderr) => {
      error && reject(error)
      stderr.length > 0 && reject(stderr.trim())
      resolve(stdout.trim())
    })
  })
}
