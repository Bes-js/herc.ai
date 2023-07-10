<p align="center"><a href="https://nodei.co/npm/hercai/"><img src="https://nodei.co/npm/hercai.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/hercai?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/Bes-js/herc.ai?style=for-the-badge"> <img src="https://img.shields.io/npm/l/hercai?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/hercai?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/Bes-js/herc.ai?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/herc.ai/axios?style=for-the-badge"> <a href="https://discord.gg/luppux" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a></p>

# [Herc.ai](https://discord.gg/luppux)

> **A powerful library for interacting with the [Herc.ai](https://discord.gg/luppux) API.**

> **We Use GPT-4 as Artificial Intelligence Engine, And We Offer It To You For Free.**
> **[Herc.ai](https://discord.gg/luppux) Answers Your Question According To The Language, And It Supports All Languages.**

> **Question API; [https://hercai.onrender.com/v1/hercai?question=](https://hercai.onrender.com/v1/hercai?question=)**

> **Draw Image API; [https://hercai.onrender.com/v2/hercai?prompt=](https://hercai.onrender.com/v2/hercai?prompt=)**

#
### ❔ [Support](https://discord.gg/luppux)
### 📂 [NPM](https://npmjs.com/hercai)
### 📝 [Github](https://github.com/Bes-js/herc.ai)

#

# Example On CLI

<a href="https://discord.gg/luppux"><image width=550 src="https://raw.githubusercontent.com/Bes-js/herc.ai/main/hercai-cli-beta.gif"></a>

#
# Installation
```bash
npm i hercai -g
```
#
# Quick Example
 
**Example Question For CommonJS;**
```js
// Importing The Package
const { Hercai } = require('hercai');

const client = new Hercai();

client.question({content:"hi, how are you?"}).then(response => {
console.log(response.reply);
// The module will reply based on the message!

});
```

**Example Draw Image For CommonJS;**
```js
// Importing The Package
const { Hercai } = require('hercai');

const client = new Hercai();

// Available Models "v1" , "v2" , "v2-beta"
client.drawImage({model:"v1",prompt:"anime girl"}).then(response => {
console.log(response.url);
// The module will reply based on the prompt!

});
```
**Example CLI Command Usage;**
```hs
hercai <Your Question>
```
**[Herc.ai](https://discord.gg/luppux) Also Supports TypeScript And EsModule 🥳!**

#
# Credits
 
**Made by [FiveSoBes](https://github.com/Bes-js) And [Luppux Development](https://github.com/Luppux)**


# Contact & Support & Donate
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
