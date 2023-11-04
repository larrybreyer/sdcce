//  COMMONJS
//  const message = {
//      name: 'Zak Ruvalcaba',
//      role: 'Instructor'
//  }
//  
//  module.exports = message
//  
//  class Message {
//      constructor(name, role) {
//          this.name = name
//          this.role = role
//      }
//  
//      sayHello() {
//          console.log(`Hello world. My name is ${this.name} and I am the ${this.role}.`)
//      }
//  }
//  
//  module.exports = Message
//  

//  ES6 MODULE LOADER
class Message {
    constructor(name, role) {
        this.name = name
        this.role = role
    }

    sayHello() {
        console.log(`Hello world. My name is ${this.name} and I am the ${this.role}.`)
    }
}

const msg = new Message("Larry","Oberver")

// Message.sayHello("Larry","Oberver")
msg.sayHello()
// export default Message
//  export { Message }
