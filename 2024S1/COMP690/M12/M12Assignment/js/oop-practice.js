// STEP 1

class Cat {
  constructor() {
  }
}

const Dog = class {
  constructor() {
  }
}

// STEP 2

const cat = new Cat();
const dog = new class {
  constructor() {
  }
}

// STEP 3

//  class Animal {
//    constructor() {
//      console.log("The Animal has been created")
//    }
//  }
//  
//  const animal = new Animal();

// STEP 4

//  class Animal {
//    constructor(arg) {
//      this.arg = arg;
//      console.log(this.arg);
//    }
//  }
//  
//  const animal = new Animal("horse");

// STEP 5

//  class Animal {
//    constructor(type, breed, color, height, length) {
//      this.type = type;
//      this.breed = breed;
//      this.color = color;
//      this.height = height;
//      this.length = length;
//      //  console.log(this.arg);
//    }
//  }
//  
//  const animal = new Animal("cat","siamese","tan",12,30);
//  console.log(animal.type);
//  console.log(animal.breed);
//  console.log(animal.color);
//  console.log(animal.height);
//  console.log(animal.length);

// STEP 6

//  class Animal {
//    constructor(type, breed, color, height, length) {
//      this.type = type;
//      this.breed = breed;
//      this.color = color;
//      this.height = height;
//      this.length = length;
//      for ( let x in this ) {
//        console.log(x);
//      }
//    }
//  }
//  
//  const animal = new Animal("cat","siamese","tan",12,30);
//  for ( let x in animal ) {
//    console.log(x);
//  }
// STEP 7

//  class Animal {
//    constructor(type, breed, color, height, length) {
//      this.type = type;
//      this.breed = breed;
//      this.color = color;
//      this.height = height;
//      this.length = length;
//    }
//    speak () {
//      if( this.type === "cat" ) {
//        console.log(`The ${this.color} cat is meowing!`);
//      } else if ( this.type === "dog" ) {
//        console.log(`The ${this.color} dog is barking!`);
//      }
//    }
//  
//  }
//  
//  const animal1 = new Animal("dog","chihuaha","tan",12,30);
//  animal1.speak()
//  const animal2 = new Animal("cat","siamese","calico",12,30);
//  animal2.speak()

// STEP 8

//  class Animal {
//      #type;
//      #breed;
//      #color;
//      #height;
//      #length;
//    constructor(type, breed, color, height, length) {
//      this.#type = type;
//      this.#breed = breed;
//      this.#color = color;
//      this.#height = height;
//      this.#length = length;
//      this.checkType = function () {
//        if ( this.#type === "dog" ) {
//          return "dog";
//        } else {
//          return "cat";
//        }
//      }
//    }
//    speak () {
//        let animal = this.checkType();
//        console.log(`The ${animal} has made a noise!`);
//    }
//  
//  }
//  
//  const animal1 = new Animal("dog","chihuaha","tan",12,30);
//  animal1.speak()
//  const animal2 = new Animal("cat","siamese","calico",12,30);
//  animal2.speak()

// STEP 9

//  // Define the findWords method
//  String.prototype.findWords = function(word) {
//    // Convert the paragraph to lowercase for case-insensitive search
//    const lowerCaseParagraph = this.toLowerCase();
//  
//    // Use a regular expression to find all instances of the word
//    const regex = new RegExp('\\b' + word.toLowerCase() + '\\b', 'g');
//    const matches = lowerCaseParagraph.match(regex);
//  
//    // Alert the user with the number of times the word was found
//    if (matches) {
//      alert(`The word "${word}" was found ${matches.length} times.`);
//    } else {
//      alert(`The word "${word}" was not found.`);
//    }
//  };
//  
//  // Example usage
//  const paragraph = "This is a sample paragraph. This paragraph contains the word sample multiple times.";
//  paragraph.findWords("sample");
//  

// vim: ai ts=2 et nu
