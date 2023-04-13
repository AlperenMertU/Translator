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

  //latin alfabsiyle text değerimizi alıyoruz
  let inputSentence = document.getElementById("textA").value.toLowerCase().toString()
  let outputSentence = "";
  let newWord = inputSentence.split(" ")

  let yeniKelimeler = newWord.map(function (kelime) {
    let ilkHarf = kelime.charAt(0);
    let sonHarf = kelime.charAt(kelime.length - 1);
    let ortadakiHarfler = kelime.slice(1, kelime.length - 1).replace(/a/g, '').replace(/e/g, '')

    return ilkHarf + ortadakiHarfler + sonHarf;

  });




  
  console.log(yeniKelimeler);


  // Her kelimeyi tek tek kontrol edelim ve değiştirelim
  for (let i = 0; i < yeniKelimeler.length; i++) {

    let currentWord = yeniKelimeler[i];

    let replacementWord = replacementMap[currentWord];

    // objemizde girdiğimiz kelime karşılığı yoksa, içinde geçtiği objedeki diğer elamanları kontrol edelim
    if (replacementWord === undefined) {
      for (let j = 0; j < Object.keys(replacementMap).length; j++) {
        //objedeki herelemanı deişkene aktar
        const keyword = Object.keys(replacementMap)[j];

        // girdiğimz kelmenin içinde geçen bir harf veya 2harf varsa ve objemizde bulursak, yerine yazacağı kelimeyi belirleyelim
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
    if (i !== yeniKelimeler.length - 1) {
      outputSentence += " ";
    }
  }





  textB.innerText = outputSentence
}


textB.addEventListener("keydown", function (e) {
  e.preventDefault();
});