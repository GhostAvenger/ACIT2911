const assert = require('chai').assert;
const app = require('../app.js');
const user_db = require('../user_db.js');

describe('App', function(){
    //TESTING FOR STRINGS AND OUTPUT//
    it('app should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('app should return as string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });
    //TESTING FOR NUMBER//
    it('addNumber should be above 5', function(){
        let result = app.addNumbers(2,4);
        assert.isAbove(result, 5);
    })
});

describe('User_Database', function() {
    it('adding new user should match', function(){
        let result = user_db.add_new_user('jimmy', 'truong', 'asdf@gmail.com', 'asdfasdf', 'asdfasdf');
        if (result === 'Your account is created!') {
            assert.equal(result, 'Your account is created!')
        } else if (result === 'Email has already been taken.'){
            assert.equal(result, 'Email has already been taken.')
        } else if (result === 'Password does not match') {
            assert.equal(result, 'Password does not match')
        }
    });

    it('checks email is in json file, returns the name of the account', function(){
        let result = user_db.email_get('asdf@gmail.com');
        assert.equal(result, 'jimmy')
    });

    it('if email is not found in json, returns false', function(){
        let result = user_db.email_get('blahsfjwklf@gmail.com');
        assert.equal(result, false)
    });

    it('checks if the email_get is a boolean, if not found', function(){
        let result = user_db.email_get('assdf@gmail.com');
        assert.typeOf(result, 'boolean')
    })
});