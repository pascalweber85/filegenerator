const fs = require('fs')

function writeFileSync(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}(){

}`
  )
}

module.exports = writeFile
