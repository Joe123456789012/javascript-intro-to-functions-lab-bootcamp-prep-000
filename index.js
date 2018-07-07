function shout (string){
  return string.toUpperCase()
}
function whisper (string){
  return string.toLowerCase()
}
function logShout (string){
  console.log (string.toUpperCase());
}
function logWhisper (string){
  console.log (string.toLowerCase())
}
function sayHiToGrandma(string){
  if (string.toLowerCase()===string){
  retun "I can't hear You"
  }
  
  if (string.toUpperCase ()===string){
    return "YES INDEED!"
  }
  
  if (string=== 'I love you, grandma'){
    retun 'I love you, too'
  }