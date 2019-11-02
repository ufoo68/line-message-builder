// Message builder for LINE Messaging API
'use strict';
import { Message } from '@line/bot-sdk'

/**
* @Method: Return message object or Array[object].
* @Param {string | string[]}
* @Return {Message | Message[]}
*/
export function buildReplyText(text: string): Message;
export function buildReplyText(text: string[]): Message[];
export function buildReplyText(text: string | string[]) : Message | Message[] {
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
* @Return {Message}
*/
export function buildReplyRandomText(texts: string[]) : Message {
    return buildReplyText(texts[ Math.floor( Math.random() * texts.length )]) as Message
}
