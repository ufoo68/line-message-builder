'use strict';

const chai = require('chai');
const assert = chai.assert
const index = require('../dist/index.js');


describe('build reply message', () => {
    const inputMessage = 'test'
    const outputMessage = {
        type: 'text',
        text: 'test'
    }
    it('should return object', () => {
        const result = index.buildReplyText(inputMessage)
        assert.deepEqual(result, outputMessage)
    })
    const inputMessages = ['test1', 'test2']
    const outputMessages = 
    [{
        type: 'text',
        text: 'test1'
    },
    {
        type: 'text',
        text: 'test2'
    }]
    it('should return array object', () => {
        const result = index.buildReplyText(inputMessages)
        assert.deepEqual(result, outputMessages)
    })
})

