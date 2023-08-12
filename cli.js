#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
quest(`${process.argv.slice(2)}`);
async function quest(content){
if(!content || content == undefined || content == null)return console.error("\x1b[38;5;160mPlease specify a question!\x1B[0m ")
try{var api = await axios.get("https://hercai.onrender.com/v2/hercai?question="+encodeURI(content),{headers: {"content-type": "application/json"}})
var data = api.data;
return console.log("\x1b[38;5;46mHerc.ai:\x1b[33m "+data.reply+"\x1B[0m")
}catch(err){console.error("\x1b[38;5;160mError:\x1B[0m "+ err.message)}}



