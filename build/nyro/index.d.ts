export default class APIRequest {
    baseUrl: string;
    userAgent: string;
    apiKey: string;
    constructor(baseUrl?: string, apiKey?: string);
    createChatStreamRequest(body: any): AsyncGenerator<any, any, any>;
    createChatRequest(body: any): Promise<any>;
    createImageRequest(body: any): Promise<any>;
    createAudioSpeechRequest(body: any): Promise<any>;
    getRateLimitByModel(model: string): Promise<any>;
    getRateLimitsWithCategory(type: 'image' | 'chat' | 'speech'): Promise<any>;
    getModelList(type: 'image' | 'chat' | 'speech'): Promise<any>;
}
