
let LANG = prompt('Please enter a language code (es, de, [en], fr)');

switch(LANG) {
  case "es":
    console.log("Hello World translated in Spanish is: Hola Mundo");
    break;
  case "de":
    console.log("Hello World translated in German is: Hallo Welt");
    break;
  case "fr":
    console.log("Hello World translated in French is: Bonjour le monde");
    break;
  default:
    console.log("Hello World translated in English is: Hello World");
}

// vim: ai ts=2 et 
