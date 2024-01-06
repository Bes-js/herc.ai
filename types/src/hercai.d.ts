export = Hercai;
/**
 * @typedef {Class} Hercai
 * @see {Hercai}
 * @example import {Hercai} from "hercai";
 * @type {Class}
 * @class
 */
declare class Hercai {
    constructor(apiKey?:string);
/**
* The Question You Want to Ask Artificial Intelligence.
* @param {string} model "v3" (GPT-4)
* @param {string} model "v3-32k" (GPT-4-32k)
* @param {string} model "turbo" (GPT-3.5 Turbo)
* @param {string} model "turbo-16k" (GPT-3.5 Turbo-16k)
* @param {string} model "gemini" (Google Gemini-Pro)
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @example client.question({model:"v3-beta",content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
* @async
*/
question(object:{model:"v3"|"v3-32k"|"turbo"|"turbo-16k"|"gemini",content:string}):Promise<{content:string,reply:string}>;


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
 drawImage(object:{model:"v1"|"v2"|"v2-beta"|"v3"|"lexica"|"prodia"|"simurg"|"animefy"|"raava"|"shonin",prompt:string,negative_prompt:string|""}):Promise<{model:string,prompt:string,url:string}>;


}

declare namespace Hercai { }
//# sourceMappingURL=hercai.d.ts.map
