# line-message-builder
[![Build Status](https://travis-ci.org/ufoo68/line-message-builder.svg?branch=master)](https://travis-ci.org/ufoo68/line-message-builder)  
A Node.js module that returns ReplyMessage for [LINE Bot SDK](https://github.com/line/line-bot-sdk-nodejs)

## Installation 
```sh
npm install line-message-builder --save
```
## Usage
### Javascript
```javascript
const line = require('@line/bot-sdk');
const message = require('line-message-builder');
const client = new line.Client(config);
---
    client.replyMessage(message.buildReplyText('test'))
---
```

## Test 
```sh
npm run test
```