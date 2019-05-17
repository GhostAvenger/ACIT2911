const request = require('supertest');
const assert = require('chai').assert;
var cheerio = require('cheerio');
var should = require('chai').should();
const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(require('chai-http'));
const expect = require('chai').expect;

const firebase = require('firebase/app');
require('firebase/firestore');

// const app = require('../app.js');
const fight = require('../javascript/fighting_saves.js');

describe('function add_info', () => {
    it('should add the info into arena collection', async () => {
        await fight.add_info('Player_Name', 50, 10, 'test_fighting');

        var db = firebase.firestore();
        var arena = await db.collection('arena').doc('test_fighting').get();
        // console.log(arena.data());

        assert.equal(arena.data().player_name, 'Player_Name');
        assert.equal(arena.data().player_health, 50);
        assert.equal(arena.data().player_dps, 10);

        assert.isNumber(arena.data().enemy_health)
        // console.log(arena.data())
        // console.log(assert.isNumber(arena.data().enemy_health))
    });

    it('enemy health is less than player health by ten but greater than 5', async() => {
        await fight.add_info('Player_Name', 50, 10, 'test_fighting');

        var db = firebase.firestore();
        var arena = await db.collection('arena').doc('test_fighting').get();

        if (arena.data().player_health < arena.data().enemy_health) {
            assert.isAtLeast(arena.data().enemy_health, 50)
        }

        // console.log(arena.data())
    })
});

describe('get_info function', () => {
    it('should return an object', async () => {
        let info = await fight.get_info('test_fighting');

        // console.log(info)

        assert.typeOf(info, 'object');

        assert.equal(info.player_dps, 10);
        assert.equal(info.player_health, 50);
        assert.equal(info.player_name, 'Player_Name')
    });

    it('returns an error if email not found', async()=>{
        let info = await fight.get_info('test_fightingtest');

        assert.typeOf(info, 'undefined')
    })
});

describe('battle function', () => {
    it('updates the calculated battle damage', async () => {
        await fight.battle(50, 50, 10, 10, 'test_fighting');

        let info = await fight.get_info('test_fighting');

        // assert.equal(info.enemy_dps, 10);
        assert.equal(info.enemy_health, 40);
        assert.equal(info.player_dps, 10);
        assert.equal(info.player_health, 40);
        assert.equal(info.player_name, 'Player_Name');
        // console.log(info)
    });

    it('ensures damages does not become negative', async() => {
        await fight.battle(10, 10, 50, 50, 'test_fighting');

        let info = await fight.get_info('test_fighting');
        // console.log(info)
        assert.equal(info.enemy_health, 0);
        assert.equal(info.player_health, 0);
    })
});