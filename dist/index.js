// Message builder for LINE Messaging API
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function buildReplyText(text) {
    return Array.isArray(text) ? text.map(t => ({
        type: 'text',
        text: t
    })) :
        {
            type: 'text',
            text: text
        };
}
exports.buildReplyText = buildReplyText;
/**
* @Method: Returns random message into string[].
* @Param {string[]}
* @Return {Message}
*/
function buildReplyRandomText(texts) {
    return buildReplyText(texts[Math.floor(Math.random() * texts.length)]);
}
exports.buildReplyRandomText = buildReplyRandomText;
