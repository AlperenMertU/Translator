const listItems = document.querySelectorAll("#myList li");




for (var i = 1; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {

    for (var j = 0; j < listItems.length; j++) {
      $(listItems[j]).removeClass("blue");
    }
    $(this).addClass("blue");

  });
}



let convert = () => {

  let textB = document.getElementById('textB')

  const kalin = ["a", "ı", "o", "u"]
  const ince = ["e", "i", "ö", "ü"]

  const replacementMap = {
    //Türk alfabesinde çift sesli harfler de vardır.
    "iç": "𐰱",
    "ık": "𐰶",
    "ok": "𐰸",
    "uk": "𐰸",
    "ök": "𐰰",
    "ük": "𐰰",
    "nç": "𐰨",
    "ng": "𐰭",
    "ny": "𐰪",
    "nd": "1",
    "ld": "𐰡",

    "ka": "𐰴𐰀",
    "ke": "𐰚𐰀",
    "kı": "𐰴𐰃",
    "ki": "𐰚𐰃",
    "ko": "𐰴𐰆",
    "kö": "𐰚𐰇",
    "ku": "𐰴𐰆",
    "kü": "𐰚𐰇",

    "ba": "𐰉𐰀",
    "be": "𐰋𐰀",
    "bı": "𐰉𐰃",
    "bi": "𐰋𐰃",
    "bo": "𐰉𐰆",
    "bö": "𐰋𐰇",
    "bu": "𐰉𐰆",
    "bü": "𐰋𐰇",

    "da": "𐰑𐰀",
    "de": "𐰓𐰀",
    "dı": "𐰑𐰃",
    "di": "𐰓𐰃",
    "do": "𐰑𐰆",
    "dö": "𐰓𐰇",
    "du": "𐰑𐰆",
    "dü": "𐰓𐰇",
    
    "ga": "𐰍𐰀",
    "ge": "𐰏𐰀",
    "gı": "𐰍𐰃",
    "gi": "𐰏𐰃",
    "go": "𐰍𐰆",
    "gö": "𐰏𐰇",
    "gu": "𐰍𐰆",
    "gü": "𐰏𐰇",
    
    "la": "𐰞𐰀",
    "le": "𐰠𐰀",
    "lı": "𐰞𐰃",
    "li": "𐰠𐰃",
    "lo": "𐰞𐰆",
    "lö": "𐰠𐰇",
    "lu": "𐰞𐰆",
    "lü": "𐰠𐰇",
    
    "na": "𐰣𐰀",
    "ne": "𐰤𐰀",
    "nı": "𐰣𐰃",
    "ni": "𐰤𐰃",
    "no": "𐰣𐰆",
    "nö": "𐰤𐰇",
    "nu": "𐰣𐰆",
    "nü": "𐰤𐰇",

    "ra": "𐰺𐰀",
    "re": "𐰼𐰀",
    "rı": "𐰺𐰃",
    "ri": "𐰼𐰃",
    "ro": "𐰺𐰆",
    "rö": "𐰼𐰇",
    "ru": "𐰺𐰆",
    "rü": "𐰼𐰇",

    "sa": "𐰽𐰀",
    "se": "𐰾𐰀",
    "sı": "𐰽𐰃",
    "si": "𐰾𐰃",
    "so": "𐰽𐰆",
    "sö": "𐰾𐰇",
    "su": "𐰽𐰆",
    "sü": "𐰾𐰇",

    "ta": "𐱃𐰀",
    "te": "𐱅𐰀",
    "tı": "𐱃𐰃",
    "ti": "𐱅𐰃",
    "to": "𐱃𐰆",
    "tö": "𐱅𐰇",
    "tu": "𐱃𐰆",
    "tü": "𐱅𐰇",

    "ya": "𐰖𐰀 ",
    "ye": "𐰘𐰀",
    "yı": "𐰖𐰃",
    "yi": "𐰘𐰃 ",
    "yo": "𐰖𐰆 ",
    "yö": "𐰘𐰇",
    "yu": "𐰖𐰆 ",
    "yü": "𐰘𐰇",

    "a": "𐰀",
    "b": "𐰉",
    "c": "𐰲",
    "ç": "𐰲",
    "d": "𐰓",
    "e": "𐰀",
    "f": "𐰯",
    "g": "𐰍",
    "ğ": "𐰍",
    "h": "𐰚",
    "i": "𐰃",
    "ı": "𐰃",
    "j": "𐰖",
    "k": "𐰚",
    "l": "𐰠",
    "m": "𐰢",
    "n": "𐰤",
    "o": "𐰆",
    "ö": "𐰇",
    "p": "𐰯",
    "r": "𐰼",
    "s": "𐰾",
    "ş": "𐱁",
    "t": "𐱃",
    "u": "𐰆",
    "ü": "𐰇",
    "v": "𐰉",
    "y": "𐰖",
    "z": "𐰔",

  };


  let inputSentence = document.getElementById("textA").value.toLowerCase().toString()
  let outputSentence = "";
  let newWord = inputSentence.split(" ")


  /*
   burası yüzünden yukarıda verdiğimiz ince kalın ünlü harf şekilleri çalışmıyordu çünkü a harfleri siiliniyordu bu  a harf silme kontrolünü sonra yapalım
  let yeniKelimeler = newWord.map(function (kelime) {
    let ilkHarf = kelime.charAt(0);
    let sonHarf = kelime.charAt(kelime.length - 1);
    let ortadakiHarfler = kelime.slice(1, kelime.length - 1).replace(/a/g, '').replace(/e/g, '')
 
    return ilkHarf + ortadakiHarfler + sonHarf;
 
  });
*/





  // Her kelimeyi tek tek kontrol edelim ve değiştirelim
  for (let i = 0; i < newWord.length; i++) {

    let currentWord = newWord[i];

    let replacementWord = replacementMap[currentWord];

    // objemizde girdiğimiz kelime karşılığı yoksa, içinde geçtiği objedeki diğer elamanları kontrol edelim
    if (replacementWord === undefined) {
      for (let j = 0; j < Object.keys(replacementMap).length; j++) {
        //objedeki herelemanı deişkene aktar
        const keyword = Object.keys(replacementMap)[j];

        // girdiğimz kelmenin içinde geçen bir harf veya 2 harf varsa ve objemizde bulursak, yerine yazacağı kelimeyi belirleyelim
        if (currentWord.includes(keyword)) {
          //alper de "e" harfi buluunyorsa kelimedeki tüm e harflerinin replacementMap objesindeki e harfi karşılığıyla değiştir
          currentWord = currentWord.replaceAll(keyword, replacementMap[keyword]);



        }

      }
    } else {
      // Eğer kelime değiştirilecek bir kelime ise, yeni kelimeyle değiştirelim örn "ok" un karşılığı objede direkt karşılğı olduğu için direkt değişkene ekle
      outputSentence = outputSentence + replacementWord;
    }

    // Değiştirilmiş kelimeyi yeni cümleye ekleyelim
    outputSentence += currentWord;

    // Eğer son kelime değilse, bir boşluk ekleyelim
    if (i !== newWord.length - 1) {
      outputSentence += " ";
    }
  }





  textB.innerText = outputSentence
}


textB.addEventListener("keydown", function (e) {
  e.preventDefault();
});