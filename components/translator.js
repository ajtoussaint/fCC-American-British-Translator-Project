const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const americanThings = [...Object.keys(americanOnly), ...Object.keys(americanToBritishSpelling), ...Object.keys(americanToBritishTitles)];
const britishThings = [...Object.keys(britishOnly), ...Object.values(americanToBritishSpelling), ...Object.values(americanToBritishTitles)];

const americanThingsSort = [...americanThings].sort( (a,b) => {return (b.length - a.length)});
const britishThingsSort = [...britishThings].sort( (a,b) => {return (b.length - a.length)});

const americanTranslations = [...Object.values(britishOnly), ...Object.keys(americanToBritishSpelling), ...Object.keys(americanToBritishTitles)];
const britishTranslations =  [...Object.values(americanOnly), ...Object.values(americanToBritishSpelling), ...Object.values(americanToBritishTitles)];

class Translator {
//2 functions translateToAmerican & translateToBritish

  translateToAmerican(text){
    let translatedText = text;
    britishThingsSort.forEach( (string, index) => {
      //If you find an instance of a british thing replace it with the american thing
      if(translatedText.toLowerCase().indexOf(string.toLowerCase()) != -1){
        console.log("British thing: ", string);
        console.log("American thing:", americanTranslations[britishThings.indexOf(string)]);
        console.log("NEXT: ", translatedText[translatedText.toLowerCase().indexOf(string.toLowerCase()) + string.length]);

        //if the next character is not another letter...begin translation
        if(!(/[A-Za-z]/.test(translatedText[translatedText.toLowerCase().indexOf(string.toLowerCase()) + string.length])) && Object.values(americanToBritishTitles).indexOf(string) != -1){
          translatedText = translatedText.slice(0, translatedText.toLowerCase().indexOf(string.toLowerCase())) +
            '<span class="highlight">' +
            americanTranslations[britishThings.indexOf(string)] +
            '</span>' +
            translatedText.slice(translatedText.toLowerCase().indexOf(string.toLowerCase())+string.length, translatedText.length);
        }
      }
    });
    //once all british things have been replaced check for times
    let foundTimes = translatedText.match(/\d?\d\.\d\d/g);
    if(foundTimes){
      foundTimes.forEach(i => {
        translatedText = translatedText.replace(i, '<span class="highlight">' + i.replace(".", ":") + '</span>');
      });
    }
    console.log("TRANSLATION: ", translatedText);
    return translatedText;
  }

  translateToBritish(text){
    let translatedText = text;
    americanThingsSort.forEach( (string, index) => {
      //If you find an instance of a british thing replace it with the american thing
      if(translatedText.toLowerCase().indexOf(string.toLowerCase()) != -1){
        console.log("American thing:", string);
        if(!(/[A-Za-z]/.test(translatedText[translatedText.toLowerCase().indexOf(string.toLowerCase()) + string.length])) || Object.keys(americanToBritishTitles).indexOf(string) != -1){
          translatedText = translatedText.slice(0, translatedText.toLowerCase().indexOf(string.toLowerCase())) +
            '<span class="highlight">' +
            britishTranslations[americanThings.indexOf(string)] +
            '</span>' +
            translatedText.slice(translatedText.toLowerCase().indexOf(string.toLowerCase()) + string.length, translatedText.length);
        }
      }
    });
    //once all british things have been replaced check for times
    let foundTimes = translatedText.match(/\d?\d:\d\d/g);
    if(foundTimes){
      foundTimes.forEach(i => {
        translatedText = translatedText.replace(i,'<span class="highlight">' + i.replace(":", ".") + '</span>');
      });
    }
    console.log("TRANSLATION: ", translatedText);
    return translatedText;
  }

  highlightAmerican(text){
    return text
  }

  highlightBritish(text){
    return text
  }
}

module.exports = Translator;
