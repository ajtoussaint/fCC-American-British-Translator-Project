'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      //sanatize inputs and respond with errors
      if(!(req.body.hasOwnProperty("text")&&req.body.hasOwnProperty("locale"))){
        res.json({ error: 'Required field(s) missing' });
      }else if(!req.body.text){
        res.json({ error: 'No text to translate' });
      }else if(req.body.locale != "american-to-british" && req.body.locale != "british-to-american"){
        console.log(req.body.locale, " is no good");
        res.json({ error: 'Invalid value for locale field' });
      }else{
        //if everything seems in order
        let translatedText = req.body.locale == "american-to-british" ?
          translator.highlightBritish(translator.translateToBritish(req.body.text)) :
          translator.highlightAmerican(translator.translateToAmerican(req.body.text));

        if(translatedText === req.body.text){
          res.json("Everything looks good to me!");
        }else{
          res.json(translatedText);
        }

      }

    });
};
