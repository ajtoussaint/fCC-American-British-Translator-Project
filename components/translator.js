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
      if(translatedText.indexOf(string) != -1){
        console.log(string);
        translatedText = translatedText.replace(string, americanTranslations[americanThings.indexOf(string)]);
      }
    });
    //once all british things have been replaced check for times
    let foundTimes = translatedText.match(/\d?\\.\d\d/g);
    if(foundTimes){
      foundTimes.forEach(i => {
        translatedText = translatedText.replace(i, i.replace(".", ":"));
      });
    }
    console.log("TRANSLATION: ", translatedText);
    return translatedText;
  }






  translateToBritish(text){
    let translatedText = text;
    americanThingsSort.forEach( (string, index) => {
      //If you find an instance of a british thing replace it with the american thing
      if(translatedText.indexOf(string) != -1){
        console.log("American thing:", string);
        translatedText = translatedText.replace(string, britishTranslations[americanThings.indexOf(string)]);
      }
    });
    //once all british things have been replaced check for times
    let foundTimes = translatedText.match(/\d?\:\d\d/g);
    if(foundTimes){
      foundTimes.forEach(i => {
        translatedText = translatedText.replace(i, i.replace(":", "."));
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
