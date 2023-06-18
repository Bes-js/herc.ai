"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const baseurl = "https://hercai.onrender.com/v1/hercai";

class Hercai {
    constructor({apiKey}) {
    if(!apiKey || apiKey == undefined || apiKey == null)throw new Error("Please specify an API key!")
    this.apiKey = apiKey;
    };

/**
* question
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @example question({content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
*/
async question({content}){
if(!content || content == undefined || content == null)throw new Error("Please specify a question!");
try{
var api = await axios.get(baseurl+"?question="+encodeURI(content),{
    headers: {
        "content-type": "application/json",
        "authorization": this.apiKey,
    },
})
return api.data;
}catch(err){
throw new Error("Invalid API Key or Your API Coin Amount Is Not Enough To Perform This Transaction, Charge Required For Further Transactions!")   
}
}

/**
* drawImage
* @param {string} model "v1" , "v2" , "v2-beta"
* @param {string} prompt Tell Artificial Intelligence What You Want to Draw.
* @example drawImage({model:"v1",prompt:"anime girl"})
* @type {string} Tell Artificial Intelligence What You Want to Draw.
* @returns {Hercai}
*/
async drawImage({model = "v1",prompt}){
    if(!["v1","v2","v2-beta"].some(ind => model == ind)) model = "v1";
    if(!prompt || prompt == undefined || prompt == null)throw new Error("Please specify a prompt!");
    try{
    var api = await axios.get(`https://hercai.onrender.com/${model}/text2image`+"?prompt="+encodeURI(prompt),{
        headers: {
            "content-type": "application/json",
            "authorization": this.apiKey,
        },
    })
    return api.data;
    }catch(err){
    throw new Error("Invalid API Key or Your API Coin Amount Is Not Enough To Perform This Transaction, Charge Required For Further Transactions!")   
    }
    }


}

module.exports = Hercai;
