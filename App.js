
    // Dışarıdan girilen cümleyi alalım
const inputSentence = prompt("Lütfen bir cümle girin:");

// Kelimelerin değiştirileceği nesneleri tanımlayalım
const replacementMap = {
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
    "z": "𐰙",
    "iç":"𐰱",
    "ık": "𐰶",
    "ok": "𐰸",
    "uk": "𐰸",
    "ök": "𐰰",
    "ük": "𐰰",
    "nç": "𐰨",
    "ng": "𐰭",
    "ny": "𐰪",
    "nd": "1",
    "ld": "𐰡"
};

// Yeni cümleyi oluşturmak için kullanacağımız değişkeni tanımlayalım
let outputSentence = "";

// Cümleyi boşluk karakterine göre ayıralım
const wordsInSentence = inputSentence.split(" ");

// Her kelimeyi tek tek kontrol edelim ve değiştirelim
for (let i = 0; i < wordsInSentence.length; i++) {
  let currentWord = wordsInSentence[i];
  
  // Kelimenin yerine hangi kelimeyi yazacağımızı belirleyelim
  let replacementWord = replacementMap[currentWord];

  // Kelime, değiştirilecek bir kelime değilse, içinde geçtiği kelimeyi kontrol edelim
  if (replacementWord === undefined) {
    for (let j = 0; j < Object.keys(replacementMap).length; j++) {
      const keyword = Object.keys(replacementMap)[j];

      // Kelime içinde geçen bir kelimeyi değiştirme map'inde bulursak, yerine yazacağı kelimeyi belirleyelim
      if (currentWord.includes(keyword)) {
        currentWord = currentWord.replaceAll(keyword, replacementMap[keyword]);
      }
    }
  } else {
    // Eğer kelime değiştirilecek bir kelime ise, yeni kelimeyle değiştirelim
    outputSentence += replacementWord;
  }

  // Değiştirilmiş kelimeyi yeni cümleye ekleyelim
  outputSentence += currentWord;

  // Eğer son kelime değilse, bir boşluk ekleyelim
  if (i !== wordsInSentence.length - 1) {
    outputSentence += " ";
  }
}

// Sonucu ekrana yazdıralım
console.log(outputSentence);



 let convert = () => {
 let textArea = document.getElementById("textA").value
 let textAreaB = document.getElementById("textB")
 textAreaB.innerHTML = Translate(textArea)
}
