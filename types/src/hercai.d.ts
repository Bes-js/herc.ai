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
* @param {string} model "v3-beta" (GPT-4)
* @param {string} model "gemini" (Google Gemini-Pro)
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @example client.question({model:"v3-beta",content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
* @async
*/
question(object:{model:"v3-beta"|"gemini",content:string}):Promise<{content:string,reply:string}>;


/**
* Tell Artificial Intelligence What You Want to Draw.
* @param {string} model "v1" , "v2" , "v2-beta" , "v3" (DALL-E) , "lexica" , "prodia"
* @param {string} prompt Tell Artificial Intelligence What You Want to Draw.
* @example client.drawImage({model:"v1",prompt:"anime girl"})
* @type {string} Tell Artificial Intelligence What You Want to Draw.
* @returns {Hercai}
* @async
*/
 drawImage(object:{model:"v1"|"v2"|"v2-beta"|"v3"|"lexica"|"prodia",prompt:string}):Promise<{model:string,prompt:string,url:string}>;


}

declare namespace Hercai { }
//# sourceMappingURL=hercai.d.ts.map
