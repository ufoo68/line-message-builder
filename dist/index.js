'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: Return message object or Array[object].
* @Param {string | string[]}
* @Return {ReplyMessage | ReplyMessage[]}
*/
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
* @Return {ReplyMessage}
*/
function buildReplyRandomText(texts) {
    return buildReplyText(texts[Math.floor(Math.random() * texts.length)]);
}
exports.buildReplyRandomText = buildReplyRandomText;
//# sourceMappingURL=index.js.map