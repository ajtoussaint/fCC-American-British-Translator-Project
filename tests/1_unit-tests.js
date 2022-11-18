const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

//Translate Mangoes are my favorite fruit. to British English
test("Translate Mangoes are my favorite fruit. to British English", function() {
  let input = "Mangoes are my favorite fruit."
  let output = Translator.translateToBritish(input);
  assert.equal(output, "Mangoes are my favourite fruit.");
});

//Translate I ate yogurt for breakfast. to British English
test("Translate I ate yogurt for breakfast. to British English", function(){
  let input = "I ate yogurt for breakfast.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "I ate yoghurt for breakfast.");
});

//Translate We had a party at my friend's condo. to British English
test("Translate We had a party at my friend's condo. to British English", function(){
  let input = "We had a party at my friend's condo.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "We had a party at my friend's flat.");
});

//Translate Can you toss this in the trashcan for me? to British English
test("Translate Can you toss this in the trashcan for me? to British English", function(){
  let input = "Can you toss this in the trashcan for me?";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "Can you toss this in the bin for me?");
});

//Translate The parking lot was full. to British English
test("Translate The parking lot was full. to British English", function(){
  let input = "The parking lot was full.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "The car park was full.");
});

//Translate Like a high tech Rube Goldberg machine. to British English
test("Translate Like a high tech Rube Goldberg machine. to British English", function(){
  let input = "Like a high tech Rube Goldberg machine.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "Like a high tech Heath Robinson device.");
});

//Translate To play hooky means to skip class or work. to British English
test("Translate To play hooky means to skip class or work. to British English", function(){
  let input = "To play hooky means to skip class or work."
  let output = Translator.translateToBritish(input);
  assert.equal(output, "To bunk off means to skip class or work.");
});

//Translate No Mr. Bond, I expect you to die. to British English
test("Translate No Mr. Bond, I expect you to die. to British English", function(){
  let input = "No Mr. Bond, I expect you to die.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "No Mr Bond, I expect you to die.");
});

//Translate Dr. Grosh will see you now. to British English
test("Translate Dr. Grosh will see you now. to British English", function(){
  let input = "Dr. Grosh will see you now.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "Dr Grosh will see you now.");
});

//Translate Lunch is at 12:15 today. to British English
test("Translate Lunch is at 12:15 today. to British English", function(){
  let input = "Lunch is at 12:15 today.";
  let output = Translator.translateToBritish(input);
  assert.equal(output, "Lunch is at 12.15 today.");
});

//Translate We watched the footie match for a while. to American English
test("Translate We watched the footie match for a while. to American English", function(){
  let input = "We watched the footie match for a while.";
  let output = Translator.translateToAmerican(input);
  assert.equal(output, "We watched the soccer match for a while.");
});

//Translate Paracetamol takes up to an hour to work. to American English
test("Translate Paracetamol takes up to an hour to work. to American English", function(){
  let input = "Paracetamol takes up to an hour to work.";
  let output = Translator.translateToAmerican(input);
  assert.equal(output, "Tylenol takes up to an hour to work.");
});

//Translate First, caramelise the onions. to American English

//Translate I spent the bank holiday at the funfair. to American English

//Translate I had a bicky then went to the chippy. to American English

//Translate I've just got bits and bobs in my bum bag. to American English

//Translate The car boot sale at Boxted Airfield was called off. to American English

//Translate Have you met Mrs Kalyani? to American English

//Translate Prof Joyner of King's College, London. to American English

//Translate Tea time is usually around 4 or 4.30. to American English

//Highlight translation in Mangoes are my favorite fruit.

  //<span class="highlight"> </span> to highlight

//Highlight translation in I ate yogurt for breakfast.

//Highlight translation in We watched the footie match for a while.

//Highlight translation in Paracetamol takes up to an hour to work.

});
