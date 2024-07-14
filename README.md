<p align="center"> <a href="#"> <img width=500 src="https://raw.githubusercontent.com/Bes-js/herc.ai/main/hercai-logo.png"></a></p> 
<p align="center"> <a href="https://render.com?ref=hercai"> <img width=200 height=90 src="https://raw.githubusercontent.com/Bes-js/herc.ai/main/render-logo.png"></a> </p>
<p align="center"><img src="https://img.shields.io/npm/v/hercai?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/Bes-js/herc.ai?style=for-the-badge"> <img src="https://img.shields.io/npm/l/hercai?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/hercai?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/Bes-js/herc.ai?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/herc.ai/axios?style=for-the-badge"> <a href="https://discord.gg/luppux" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a><a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a></p>

# [Herc.ai](https://discord.gg/luppux)

> **A powerful library for interacting with the [Herc.ai](https://discord.gg/luppux) API.**

> **We Offer It To You For Free.**
> **[Herc.ai](https://discord.gg/luppux) Answers Your Question According To The Language, And It Supports All Languages.**

> **[✨ How about a one-time subscription to benefit from Hercai's features unlimitedly?](https://hercai-shop.onrender.com)**
**[✨ Use Hercai Unlimited with API Key!](https://hercai-shop.onrender.com)**
#
### ❔ [Support](https://discord.gg/luppux)
### 📂 [NPM](https://npmjs.com/hercai)
### 📖 [Document's](https://fivesobes.gitbook.io/hercai/)
### 📝 [Github](https://github.com/Bes-js/herc.ai)

#

# Example On CLI

<a href="https://discord.gg/luppux"><image width=550 src="https://raw.githubusercontent.com/Bes-js/herc.ai/main/hercai-cli-beta.gif"></a>

#
# Installation
**🔲 Installation For CLI**
```bash
npm i hercai -g
```

**📂 Installation**
```bash
npm i hercai
yarn add hercai
pnpm add hercai
bun add hercai
```
#
# Quick Example
 
 > **Question API; [https://hercai.onrender.com/v3/hercai?question=](https://hercai.onrender.com/v3/hercai?question=)**

**Example Question For CommonJS;**
```js
/* Importing The Package */
const { Hercai } = require('hercai');

const herc = new Hercai(); //new Hercai("your api key"); => Optional

/* Available Models */
/* "v3" , "v3-32k" , "turbo" , "turbo-16k" , "gemini" , "llama3-70b" , "llama3-8b" , "mixtral-8x7b" , "gemma-7b" , "gemma2-9b" */
/* Default Model; "v3" */
/* Premium Parameter; personality => Optional */
herc.question({model:"v3",content:"hi, how are you?"}).then(response => {
console.log(response.reply);
/* The module will reply based on the message! */

});
```
#

> **Text To Image API; [https://hercai.onrender.com/v3/text2image?prompt=](https://hercai.onrender.com/v3/text2image?prompt=)**

**Example Draw Image For CommonJS;**
```js
/* Importing The Package */
const { Hercai } = require('hercai');

const herc = new Hercai(); //new Hercai("your api key"); => Optional

/* Available Models */
/* "v1" , "v2" , "v2-beta" , "v3" (DALL-E) , "lexica" , "prodia", "simurg", "animefy", "raava", "shonin" */
/* Default Model; "v3" */
herc.drawImage({model:"v3",prompt:"anime girl",negative_prompt:""}).then(response => {
console.log(response.url);
/* The module will reply based on the prompt! */

});
```
#
**Example Interface And Usage For TypeScript;**
```ts
import { Hercai, QuestionData, DrawImageData } from "hercai";

const herc = new Hercai(); //new Hercai("your api key"); => Optional

/* Question Example For TypeScript */
herc.question({model:"v3",content:"hi, how are you?"})
.then((response:QuestionData) => {
console.log(response.reply);
});

/* DrawImage Example For TypeScript */
herc.drawImage({model:"v3",prompt:"anime girl",negative_prompt:""})
.then((response:DrawImageData) => {
console.log(response.url);
});

```
#
**Example CLI Command Usage;**
```hs
hercai <Your Question>
```
**[Herc.ai](https://discord.gg/luppux) Also Supports TypeScript And EsModule 🥳!**
#

**Example Beta Model's Usage;**
```js
import { Hercai } from "hercai";

const herc = new Hercai(); //new Hercai("your api key"); => Optional


herc.betaQuestion({content:"hi, how are you?",user:'chat-id'})
.then((response) => {
console.log(response.reply);
});

/* DrawImage Example */
herc.betaDrawImage({
prompt:"anime girl",
negative_prompt:"", 
sampler:"DPM-Solver", /* Default => DPM-Solver */
image_style:"Null", /* Default => Null */
width:1024, /* Default => 1024 */
height:1024, /* Default => 1024 */
steps:20, /* Default => 20 */
scale:5 /* Default => 5 */
}).then((response) => {
console.log(response.url);
});

```
#
# Credits
 
**Made by [FiveSoBes](https://github.com/Bes-js) And [Luppux Development](https://github.com/Luppux)**

<p align="center"> <a href="https://render.com?ref=hercai"> <img src="https://raw.githubusercontent.com/Bes-js/herc.ai/main/sponsor-logo.png"></a> </p>

# Contact & Support & Donate
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
