
let LANG = prompt('Please enter a language code (es, de, [en], fr)');

switch(LANG) {
  case "es":
    console.log("Hola Mundo");
    break;
  case "de":
    console.log("Hallo Welt");
    break;
  case "fr":
    console.log("Bonjour le monde");
    break;
  default:
    console.log("Hello World");
}

// vim: ai ts=2 et 
