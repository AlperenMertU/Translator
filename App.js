   var alphabet = {
        "a": "1",
        "b": "2",
        "c": "3",
      
     
    };
    

    function convertToGokturk(text) {
      var gokturkText = "";
      for (var i = 0; i < text.length; i++) {
        var char = text[i].toLowerCase();
        if (alphabet[char]) {
          gokturkText += alphabet[char];
        } else {
          gokturkText += char;
        }
      }
      return gokturkText;
    }

    function convert() {
      var inputText = document.getElementById("textA").value;
      var output = document.getElementById("textB");
      output.innerHTML = convertToGokturk(inputText)
    }





/*
var alphabetMap = {
  "a": "𐰀",
  "b": "𐰋",
  "c": "𐰲",
  "d": "𐰓",
  "e": "𐰀",
  "f": "𐰯",
  "g": "𐰏",
  "h": "𐰚",
  "i": "𐰃",
  "j": "𐰲",
  "k": "𐰚",
  "l": "𐰠",
  "m": "𐰢",
  "n": "𐰤",
  "o": "𐰆",
  "p": "𐰏",
  "q": "𐰐",
  "r": "𐰑",
  "s": "𐰒",
  "t": "𐰓",
  "u": "𐰔",
  "v": "𐰕",
  "w": "𐰖",
  "x": "𐰗",
  "y": "𐰘",
  "z": "𐰙",
};

*/