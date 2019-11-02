import { Message } from '@line/bot-sdk';
/**
* @Method: Return message object or Array[object].
* @Param {string | string[]}
* @Return {Message | Message[]}
*/
export declare function buildReplyText(text: string): Message;
export declare function buildReplyText(text: string[]): Message[];
/**
* @Method: Returns random message into string[].
* @Param {string[]}
* @Return {Message}
*/
export declare function buildReplyRandomText(texts: string[]): Message;
