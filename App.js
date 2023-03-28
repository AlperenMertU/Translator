   var alphabet = {
    "a": "𐰀",
    "b": "𐰉",
    "c": "𐰲",
    "ç": "𐰲",
    "d": "𐰑",
    "e": "𐰀",
    "f": "𐰯",
    "g": "𐰍",
    "ğ":"𐰍",
    "h": "𐰚",
    "i": "𐰃",
    "ı": "𐰃",
    "j": "𐰖",
    "k": "𐰚",
    "l": "𐰞",
    "m": "𐰢",
    "n": "𐰣",
    "o": "𐰆",
    "ö": "𐰇",
    "p": "1",
    "r": "𐰺",
    "s": "𐰽",
    "ş": "𐱁",
    "t": "𐱃",
    "u": "𐰆",
    "v": "𐰉",
    "y": "𐰘",
    "z": "𐰙"
    };
    


  


   let Translate = (text) => {
   let empty = ""
    for (let i = 0; i < text.length; i++) {
      let haveWord = text[i].toLowerCase()
      if (alphabet[haveWord]) {
         empty = empty + alphabet[haveWord]
         console.log(haveWord);

         console.log(alphabet);
        }

      else{
        empty = empty + haveWord
      }
    }
    return empty
   }

 let convert = () => {
 let textArea = document.getElementById("textA").value
 let textAreaB = document.getElementById("textB")
 textAreaB.innerHTML = Translate(textArea)
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