const axios = require('axios');
const baseurl = "https://hercai.onrender.com/v1/hercai";

class Hercai {
    constructor({apiKey}) {
    if(!apiKey || apiKey == undefined || apiKey == null)throw new Error("Please specify an API key!")
    this.apiKey = apiKey;
    };


async question({content}){
if(!content || content == undefined || content == null)throw new Error("Please specify a question!");

var api = await axios.get(baseurl+"?question="+encodeURI(content),{
    headers: {
        "content-type": "application/json",
        "authorization": this.apiKey,
    },
})

return api.data;

}


}

module.exports = Hercai;
