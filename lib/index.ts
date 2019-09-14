'use strict';
// Message builder for LINE Messaging API

export default interface ReplyMessage {
    type: string,
    text: string
}

/**
* @Method: Return message object or Array[object].
* @Param {string | string[]}
* @Return {ReplyMessage | ReplyMessage[]}
*/
export function buildReplyText(text: string | string[]) : ReplyMessage | ReplyMessage[] {
    return Array.isArray(text) ? text.map(t => 
    (
        {
            type : 'text',
            text: t
        }
    )) : 
    {
        type: 'text',
        text: text
    }
}

/**
* @Method: Returns random message into string[].
* @Param {string[]}
* @Return {ReplyMessage}
*/
export function buildReplyRandomText(texts: string[]) : ReplyMessage {
    return buildReplyText(texts[ Math.floor( Math.random() * texts.length )]) as ReplyMessage
}