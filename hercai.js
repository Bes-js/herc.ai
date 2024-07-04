"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios').default;
const baseurl = "https://hercai.onrender.com/v3/hercai";


/**
 * @typedef {Class} Hercai
 * @see {Hercai}
 * @param {Class} Hercai
 * @example const { Hercai } = require("hercai");
 * @example import { Hercai } from "hercai";
 * @type {Class}
 * @class
 */
class Hercai {
    constructor(apiKey="") {
    if(apiKey == undefined || apiKey == null || apiKey == "" || typeof apiKey !== "string")this.apiKey = "";
    this.apiKey = apiKey;
    };

/**
* The Question You Want to Ask Artificial Intelligence.
* @param {string} model "v3" (GPT-4)
* @param {string} model "v3-32k" (GPT-4-32k)
* @param {string} model "turbo" (GPT-3.5 Turbo)
* @param {string} model "turbo-16k" (GPT-3.5 Turbo-16k)
* @param {string} model "gemini" (Google Gemini-Pro)
* @param {string} model "llama3-70b" (Llama-3-70b)
* @param {string} model "llama3-8b" (Llama-3-8b)
* @param {string} model "mixtral-8x7b" (Mixtral-8x7b)
* @param {string} model "gemma-7b" (Gemma-7b)
* @param {string} model "gemma2-9b" (Gemma2-9b)
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @param {string} personality It includes the features that you want to be included in the output you want from artificial intelligence.
* @example client.question({model:"v3-beta",content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
* @async
*/
async question({model = "v3",content,personality=""}){
if(!["v3","gemini","v3-32k","turbo","turbo-16k","llama3-70b","llama-8b","mixtral-8x7b","gemma-7b","gemma2-9b"].some(ind => model == ind)) model = "v3";
if(!content || content == undefined || content == null)throw new Error("Please specify a question!");
try{
var api = await axios.get(`https://hercai.onrender.com/${model}/hercai?question=`+encodeURI(content),{
    headers: {
        "content-type": "application/json",
        "Authorization": this.apiKey,
    },
    data:{
        personality: personality
    }
})
return api.data;
}catch(err){
throw new Error("Error: "+ err.message)   
}
}

/**
* Tell Artificial Intelligence What You Want to Draw.
* @param {string} model "v1" , "v2" , "v2-beta" , "v3" (DALL-E) , "lexica" , "prodia", "simurg", "animefy", "raava", "shonin"
* @param {string} prompt Tell Artificial Intelligence What You Want to Draw.
* @param {string} negative_prompt It includes the features that you do not want to be included in the output you want from artificial intelligence.
* @example client.drawImage({model:"v3",prompt:"anime girl"})
* @type {string} Tell Artificial Intelligence What You Want to Draw.
* @returns {Hercai}
* @async
*/
async drawImage({model = "v3",prompt,negative_prompt=""}){
    if(!["v1","v2","v2-beta","v3","lexica","prodia","simurg","animefy","raava","shonin"].some(ind => model == ind)) model = "prodia";
    if(!prompt || prompt == undefined || prompt == null)throw new Error("Please specify a prompt!");
    try{
    var api = await axios.get(`https://hercai.onrender.com/${model}/text2image`+"?prompt="+encodeURI(prompt)+"&negative_prompt="+encodeURI(negative_prompt),{
        headers: {
            "content-type": "application/json",
            "Authorization": this.apiKey,
        },
    })
    return api.data;
    }catch(err){
    throw new Error("Error: "+ err.message)   
    }
    }


/**
 * This Model Is Still In Development And Beta Stage.
 * The Question You Want to Ask Artificial Intelligence.
 * @param {string} content The Question You Want to Ask Artificial Intelligence.
 * @param {string} user It includes the features that you want to be included in the output you want from artificial intelligence.
 * @example client.betaQuestion({content:"how are you?"})
 * @type {string} The Question You Want to Ask Artificial Intelligence.
 * @returns {Hercai}
 * @async
 */
async betaQuestion({content,personality="",user=""}){
    if(!content || content == undefined || content == null)throw new Error("Please specify a question!");
    try{
    var api = await axios.get(`https://hercai.onrender.com/beta/hercai?question=`+encodeURI(content)+`&user=`+encodeURI(user),{
    headers: {
        "content-type": "application/json",
        "Authorization": this.apiKey,
    },
    data:{
        personality: personality
    }
    })
    return api.data;
    }catch(err){
    throw new Error("Error: "+ err.message)   
    }
    }


/**
* This Model Is Still In Development And Beta Stage.
* Tell Artificial Intelligence What You Want to Draw.
* @param {string} prompt Tell Artificial Intelligence What You Want to Draw.
* @param {string} negative_prompt It includes the features that you do not want to be included in the output you want from artificial intelligence.
* @param {string} sampler "DPM-Solver" , "SA-Solver"
* @param {string} image_style "Cinematic" , "Photographic" , "Anime" , "Manga" , "Digital Art" , "Pixel art" , "Fantasy art" , "Neonpunk" , "3D Model" , "Null"
* @param {number} width The width of the image you want to draw.
* @param {number} height The height of the image you want to draw.
* @param {number} steps The number of steps you want to draw the image.
* @param {number} scale The scale of the image you want to draw.
* @example client.betaDrawImage({prompt:"anime girl"})
* @type {string} Tell Artificial Intelligence What You Want to Draw.
* @returns {Hercai}
* @async
*/  
async betaDrawImage({prompt,negative_prompt="",sampler='DPM-Solver',image_style="Null",width=1024,height=1024,steps=20,scale=5}){
if(!["DPM-Solver","SA-Solver"].some(ind => sampler == ind)) sampler = "DPM-Solver";
if(!prompt || prompt == undefined || prompt == null)throw new Error("Please specify a prompt!");
try{
    var api = await axios.get(`https://hercai.onrender.com/beta/text2image`+"?prompt="+encodeURI(prompt)+"&negative_prompt="+encodeURI(negative_prompt)+"&sampler="+encodeURI(sampler)+"&image_style="+encodeURI(image_style)+"&width="+width+"&height="+height+"&steps="+steps+"&scale="+scale,{
        headers: {
            "content-type": "application/json",
            "Authorization": this.apiKey,
        },
    })
    return api.data;
    }catch(err){
    throw new Error("Error: "+ err.message)   
    }
}

}

module.exports = Hercai;
