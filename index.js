const { execFile } = require(`child_process`)

module.exports = password => new Promise((resolve, reject) => {
  execFile(`tor`, [ `--hash-password`, password ], (error, stdout, stderr) => {
    error && reject(error)
    stderr.length > 0 && reject(stderr.trim())
    resolve(stdout.trim())
  })
})
