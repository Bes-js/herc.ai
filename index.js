"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
var packs = require("./package.json")
versionControl(packs.version);
module.exports = {
Hercai: require('./hercai'),
version: packs.version,
}
async function versionControl(version){
try{var pack = await axios.get(`https://registry.npmjs.com/-/v1/search?text=hercai`)
pack = pack.data;
if(pack && pack.objects[0].package.version !== version){
console.log(`\x1b[38;5;215mYou are using an Outdated Version for Hercai, Run the \x1b[38;5;119m' npm i hercai@${pack.objects[0].package.version} '\x1b[38;5;215m Command for the Current Version.`,`\x1B[0m`);
}}catch(err){}
}
