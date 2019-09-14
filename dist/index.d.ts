export default interface ReplyMessage {
    type: string;
    text: string;
}
/**
* @Method: Return message object or Array[object].
* @Param {string | string[]}
* @Return {ReplyMessage | ReplyMessage[]}
*/
export declare function buildReplyText(text: string | string[]): ReplyMessage | ReplyMessage[];
/**
* @Method: Returns random message into string[].
* @Param {string[]}
* @Return {ReplyMessage}
*/
export declare function buildReplyRandomText(texts: string[]): ReplyMessage;
