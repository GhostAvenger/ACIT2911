const request = require('supertest');
const assert = require('chai').assert;
var cheerio = require('cheerio');
var should = require('chai').should();
const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(require('chai-http'));
const expect = require('chai').expect;

const app = require('../app.js');
const user_db = require('../javascript/user_db.js');

describe('GET testing /account', () => {
    it("Return 'Redirecting to Home Page' ", (done) => {
        request(app)
            .get('/account')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .end(function(err, res) {
                console.log(res.text);

                done()
            })
    });
});

//Claire
describe('GET /login', () => {
    it("Return 'Redirecting to Home Page' ", (done) => {
        request(app)
            .get('/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .end(function(err, res) {
                // console.log(res.text);

                var pattern = /Normal Login/;
                var result = pattern.test(res.text);
                assert.equal(result, true);

                done()
            })
    });

    it("Return 'Redirecting to Home Page' ", (done) => {
        request(app)
            .get('/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .end(function(err, res) {
                // console.log(res.text);

                var pattern = /Email Address/;
                var result = pattern.test(res.text);
                assert.equal(result, true);

                done()
            })
    });
    it("Return 'Redirecting to Home Page' ", (done) => {
        request(app)
            .get('/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .end(function(err, res) {
                // console.log(res.text);

                var pattern = /Password/;
                var result = pattern.test(res.text);
                assert.equal(result, true);

                done()
            })
    });
});



//Claire
describe('GET /index_b', () => {
    var agent = chai.request(app);
    it('Should redirect to home page if not logged in', (done) => {
        agent
            .get('/index_b')
            .then((response) => {
                // console.log(response.text);
                var $ = cheerio.load(response.text);
                var title = $('title').text();
                assert.equal(title, 'Fight Simulator');
                done();
            })
            .catch((err) => {
                if (err) {
                    console.log('errorerrorerrorerrorerrorerror');
                    console.log(err);
                    console.log('errorerrorerrorerrorerrorerror')
                }
            })
    });

    it('Successful login to accounts home page', (done) => {
        chai.request.agent(app)
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                var string = response.text;
                var pattern = /Welcome jimmy/;
                var result = pattern.test(string);
                assert.equal(result, true);
                done()
            })
            .catch ((err) => {
                if (err) {
                    console.log('errorerrorerrorerrorerrorerror');
                    console.log(err);
                    console.log('errorerrorerrorerrorerrorerror')
                }
            })
    });
    it('Successful login to accounts home page', (done) => {
        chai.request.agent(app)
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                var string = response.text;
                var pattern = /Begin to Fight/;
                var result = pattern.test(string);
                assert.equal(result, true);
                done()
            })
            .catch ((err) => {
                if (err) {
                    console.log('errorerrorerrorerrorerrorerror');
                    console.log(err);
                    console.log('errorerrorerrorerrorerrorerror')
                }
            })
    })
});

//Claire
describe('GET /character', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Create new Character/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

       it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Charater Stats/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Charater Pages/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Create new Character/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Go Fighting/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Update Character Name/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
    it('Should get characters health', (done) => {
        var agent = chai.request.agent(app);
        agent
            .post('/user_logging_in')
            .send({
                email: 'test_create_character@gmail.com',
                password: 'test_create_character'
            })
            .then((response) => {
                return agent.get('/character')
                    .then((response) => {
                        // console.log(response.text)
                        var pattern = /31/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);
                        done()
                    })
                    .catch((err) => {
                        console.log('ERROR MY DUDE ERROR');
                        console.log(err);
                        console.log('ERROR MY DUDE ERROR');
                    })
            })
    })
});


//Claire
describe('GET /character_creation', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character_creation')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Character Name/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/character_creation')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Create/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
});


//Claire
describe('GET /fight', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/fight')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Fight Fight Fight!/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/fight')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Fight!/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
});




//Claire
describe('GET /update_name', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/update_name')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Update Character Name/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/update_name')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Update Name/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });


});


//Claire
describe('GET /forum', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/forum')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Fight Forum/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/forum')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Toggle message Forum/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/forum')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Add Message/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
});



//Claire
describe('GET /sign_up', () => {
    var agent = chai.request.agent(app);
    it('should show characters info', async () => {
        agent
            .post('/sign_up')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/forum')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Normal Register/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/sign_up')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/forum')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Username/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });


    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/sign_up')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Email/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/sign_up')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Password/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });
    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/sign_up')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Repeat Password/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

    it('should show characters info', async () => {
        agent
            .post('/user_logging_in')
            .send({
                email: 'asdf@gmail.com',
                password: 'asdfasdf'
            })
            .then((response) => {
                agent
                    .get('/sign_up')
                    .then(async (response) => {
                        // console.log(response.text);

                        var pattern = /Submit/;
                        var result = pattern.test(response.text);
                        assert.equal(result, true);

                        // var $ = cheerio.load(response.text);
                        // var display = $('div > ul > li > p').text();
                        // assert.equal(display, 'CREATE CHARACTER NOWCREATE CHARACTER NOWCREATE CHARACTER NOW');
                        // done()
                    })
            })
    });

});



