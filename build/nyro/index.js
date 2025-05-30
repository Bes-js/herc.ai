"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nyro_1 = __importDefault(require("nyro"));
class APIRequest {
    baseUrl;
    userAgent = `Hercai-SDK (${process.platform} ${process.arch}) Node.js/${process.version}`;
    apiKey = '';
    constructor(baseUrl, apiKey = '') {
        this.baseUrl = baseUrl || 'https://hercai.onrender.com/v1';
        this.apiKey = `Bearer ${apiKey}`;
    }
    ;
    async *createChatStreamRequest(body) {
        const response = await (0, nyro_1.default)({
            baseURL: this.baseUrl,
            url: "/chat/completions",
            method: "POST",
            headers: {
                "User-Agent": this.userAgent,
                "Authorization": this.apiKey
            },
            body: body,
            useHttp2: true,
            responseType: "stream",
            isStream: true
        });
        const reader = response.body[Symbol.asyncIterator]();
        try {
            for await (const chunk of reader) {
                try {
                    const data = typeof chunk === "string"
                        ? chunk
                        : new TextDecoder("utf-8").decode(chunk);
                    yield JSON.parse(data);
                }
                catch (error) { }
                ;
            }
        }
        catch (error) { }
        ;
    }
    ;
    async createChatRequest(body) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: "/chat/completions",
                method: "POST",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey
                },
                body: body,
                useHttp2: true,
                responseType: "json",
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
    async createImageRequest(body) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: "/images/generations",
                method: "POST",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey,
                },
                body: body,
                useHttp2: true,
                responseType: "arrayBuffer"
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
    async createAudioSpeechRequest(body) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: "/audio/speech",
                method: "POST",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey,
                },
                body: body,
                useHttp2: true,
                responseType: "arrayBuffer"
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
    async getRateLimitByModel(model) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: `/ratelimits`,
                query: {
                    model: model
                },
                method: "GET",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey,
                },
                responseType: "json"
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
    async getRateLimitsWithCategory(type) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: type == "image" ? "/images/models/ratelimits" : type == "speech" ? "/speech/models/ratelimits" : "/chat/models/ratelimits",
                method: "GET",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey,
                },
                responseType: "json"
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
    async getModelList(type) {
        return await new Promise((resolve, reject) => {
            (0, nyro_1.default)({
                baseURL: this.baseUrl,
                url: type == "image" ? "/images/models" : type == "speech" ? "/speech/models" : "/chat/models",
                method: "GET",
                headers: {
                    "User-Agent": this.userAgent,
                    "Authorization": this.apiKey,
                },
                responseType: "json"
            }).then((response) => {
                resolve(response.body);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    ;
}
exports.default = APIRequest;
;
