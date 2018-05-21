function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log( string.toUpperCase() )
}

function logWhisper(string) {
  console.log( string.toLowerCase() )
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === lowercase // true

var lowercase = "hello!"

uppercase.toUpperCase() === uppercase // true

var mixedCase = "Hello there!"

mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string) {
  if (string === lowercase)
  return "I can\'t hear you!"
}