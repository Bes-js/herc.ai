export = Hercai;
/**
 * @typedef {Class} Hercai
 * @see {Hercai}
 * @example import {Hercai} from "hercai";
 * @type {Class}
 * @class
 */
declare class Hercai {
    constructor(apiKey?:string|"");
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
question(object:{model:"v3"|"v3-32k"|"turbo"|"turbo-16k"|"gemini"|"llama3-70b"|"llama3-8b"|"mixtral-8x7b"|"gemma-7b"|"gemma2-9b",content:string,personality?:string|""}):Promise<{content:string,reply:string}>;


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
 drawImage(object:{model:"v1"|"v2"|"v2-beta"|"v3"|"lexica"|"prodia"|"simurg"|"animefy"|"raava"|"shonin",prompt:string,negative_prompt?:string|""}):Promise<{model:string,prompt:string,url:string}>;


/**
 * The Question You Want to Ask Artificial Intelligence.
 * @param {string} content The Question You Want to Ask Artificial Intelligence.
 * @param {string} user It includes the features that you want to be included in the output you want from artificial intelligence.
 * @example client.betaQuestion({content:"how are you?"})
 * @type {string} The Question You Want to Ask Artificial Intelligence.
 * @returns {Hercai}
 * @async
 */
betaQuestion(object:{content:string,user?:string|""}):Promise<{content:string,reply:string}>;


/**
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
betaDrawImage(object:{prompt:string,negative_prompt?:string|"",sampler?:'DPM-Solver'|'SA-Solver',image_style?:"Cinematic"|"Photographic"|"Anime"|"Manga"|"Digital Art"|"Pixel art"| "Fantasy art"|"Neonpunk"|"3D Model"|"Null",width?:number,height?:number,steps?:number,scale?:number}):Promise<{model:string,prompt:string,url:string}>;

}

declare namespace Hercai { }
//# sourceMappingURL=hercai.d.ts.map
