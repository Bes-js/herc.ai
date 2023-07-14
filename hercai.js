"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const baseurl = "https://hercai.onrender.com/v1/hercai";

class Hercai {
    constructor() {
    };

/**
* question
* @param {string} model "v1" , "v2"
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @example question({model:"v1",content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
*/
async question({model = "v1",content}){
if(!["v1","v2"].some(ind => model == ind)) model = "v1";
if(!content || content == undefined || content == null)throw new Error("Please specify a question!");
try{
var api = await axios.get(`https://hercai.onrender.com/${model}/hercai?question=`+encodeURI(content),{
    headers: {
        "content-type": "application/json",
    },
})
return api.data;
}catch(err){
throw new Error("Error: "+ err.message)   
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
        },
    })
    return api.data;
    }catch(err){
    throw new Error("Error: "+ err.message)   
    }
    }


}

module.exports = Hercai;
