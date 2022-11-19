const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  //Translation with text and locale fields: POST request to /api/translate
  test("translate with all necessary fields", function(done){
    chai.request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-british"
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response is not an object");
        assert.deepEqual(res.body, {
          text: "Mangoes are my favorite fruit.",
          translation: 'Mangoes are my <span class="highlight">favourite<span> fruit.'
        }, "incorrect translation");
        done();
      });
  });

  //Translation with text and invalid locale field: POST request to /api/translate
  test("translate with text but invalid locale field", function(done){
    chai.request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "american-to-australian"
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response is not an object");
        assert.deepEqual(res.body, { error: 'Invalid value for locale field' }, "Did not reject invalid locale");
        done();
      })
  });

  //Translation with missing text field: POST request to /api/translate
  test("translate with missing text field", function(done){
    chai.request(server)
      .post('/api/translate')
      .send({
        locale:"american-to-british"
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response is not an object");
        assert.deepEqual(res.body, { error: 'Required field(s) missing' }, "Did not reject missing text field");
        done();
      });
  });

  //Translation with missing locale field: POST request to /api/translate
  test("translate with missing text field", function(done){
    chai.request(server)
      .post('/api/translate')
      .send({
        text:"Mangoes are my favorite fruit."
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response is not an object");
        assert.deepEqual(res.body, { error: 'Required field(s) missing' }, "Did not reject missing locale field");
        done();
      });
  });

  //Translation with empty text: POST request to /api/translate
  test("translate empty text", function(done){
    chai.request(server)
      .post("/api/translate")
      .send({
        text: "",
        locale: "american-to-british"
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response is not an object");
        assert.deepEqual(res.body, { error: 'No text to translate' }, "Translated empty text field");
        done();
      });
  });

  //Translation with text that needs no translation: POST request to /api/translate
  test("translate text that needs no translation", function(done){
    chai.request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "british-to-american"
      })
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isString(res.body, "response is not a string");
        assert.deepEqual(res.body, "Everything looks good to me!", "Translated unecessarily");
        done();
      });
  });

});
