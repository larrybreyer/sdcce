// For this script to work, ../package.json "type" must be "module"

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

console.log(path.basename(__filename))

console.log(path.dirname(__filename))

console.log(`Base file name: ${path.basename(__filename)}`)

console.log(`Directory name: ${path.dirname(__filename)}`)

console.log(`File extension: ${path.extname(__filename)}`)

console.log(path.parse(__filename))

console.log(path.parse(__filename).base)

console.log(path.join(__dirname, 'test','hello.html'))
