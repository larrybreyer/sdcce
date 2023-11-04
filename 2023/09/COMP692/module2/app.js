//  COMMONJS
//  const message = require('./message')
//  console.log(message)
//  console.log(message.name)
//  console.log(message.role)

//  const Message = require('./message')
//  const message1 = new Message('Zak Ruvalcaba', 'Instructor')
//  message1.sayHello()

//  ES6 MODULE LOADER
import Message from './message.js'
//  import { Message } from './message.js'

const message1 = new Message('Zak Ruvalcaba', 'Instructor')
message1.sayHello()

