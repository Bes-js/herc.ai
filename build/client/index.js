"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hercai = void 0;
const index_1 = __importDefault(require("../nyro/index"));
class Hercai {
    apiKey;
    maxRetries;
    timeout;
    baseUrl = 'https://hercai.onrender.com/v1';
    beta = {};
    config;
    _client;
    constructor(clientOptions) {
        this.apiKey = clientOptions.apiKey || '';
        this.maxRetries = clientOptions.maxRetries || 3;
        this.timeout = clientOptions.timeout || 10000;
        this.beta = {
            buildCode: clientOptions.betaFeatures?.buildCode || '',
            buildKey: clientOptions.betaFeatures?.buildKey || ''
        };
        this.config = {
            apiKey: this.apiKey,
            maxRetries: this.maxRetries,
            timeout: this.timeout
        };
        this._client = new index_1.default(this.baseUrl, this.apiKey);
    }
    ;
    chat = {
        completions: {
            create: async (chatCompletion) => {
                if (chatCompletion.stream) {
                    return Promise.resolve(this._client.createChatStreamRequest(chatCompletion));
                }
                else {
                    return this._client.createChatRequest(chatCompletion);
                }
            }
        },
        models: {
            retrieve: async () => {
                return this._client.getModelList('chat');
            }
        }
    };
    images = {
        generations: async (imageGenerations) => {
            return this._client?.createImageRequest(imageGenerations);
        },
        models: {
            retrieve: async () => {
                return this._client.getModelList('image');
            }
        }
    };
    audio = {
        speech: {
            create: async (audioSpeech) => {
                return this._client?.createAudioSpeechRequest(audioSpeech);
            }
        },
        models: {
            retrieve: async () => {
                return this._client.getModelList('speech');
            }
        }
    };
    ratelimits = {
        retrieveByModel: async (model) => {
            return this._client.getRateLimitByModel(model);
        },
        retrieveByCategory: async (type) => {
            return this._client.getRateLimitsWithCategory(type);
        }
    };
}
exports.Hercai = Hercai;
;
