import nyro from 'nyro';


export default class APIRequest {

    public baseUrl: string;
    public userAgent: string = `Hercai-SDK (${process.platform} ${process.arch}) Node.js/${process.version}`;
    public apiKey: string = '';
    constructor(baseUrl?: string, apiKey: string = '') {
        this.baseUrl = baseUrl || 'https://hercai.onrender.com/v1';
        this.apiKey = `Bearer ${apiKey}`;
    };

    async *createChatStreamRequest(body: any): AsyncGenerator<any, any, any> {
        const response = await nyro({
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

        const reader = (response.body as any)[Symbol.asyncIterator]();

        try {
            for await (const chunk of reader) {
                try {
                    const data = typeof chunk === "string" 
                        ? chunk 
                        : new TextDecoder("utf-8").decode(chunk);
                    
                    yield JSON.parse(data);
                } catch (error) { };
            }
        } catch (error) { };
    };

    async createChatRequest(body: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            nyro({
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
            }).catch((err)=>{
                reject(err);
            });
        });
    };

    async createImageRequest(body: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            nyro({
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
            }).catch((err)=> {
                reject(err);
            });
        });
    };


    async createAudioSpeechRequest(body: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            nyro({
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
            }).catch((err)=> {
                reject(err);
            });
        });
    };


    async getRateLimitByModel(model: string): Promise<any> {
        return await new Promise((resolve,reject) => {
            nyro({
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
            }).catch((err)=> {
                reject(err);
            });
        });
    };


    async getRateLimitsWithCategory(type: 'image' | 'chat' | 'speech'): Promise<any> {
        return await new Promise((resolve,reject) => {
            nyro({
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
            }).catch((err)=> {
                reject(err);
            });
        });
    };

    async getModelList(type: 'image' | 'chat' | 'speech'): Promise<any> {
        return await new Promise((resolve,reject) => {
            nyro({
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
            }).catch((err)=> {
                reject(err);
            });
        });
    };

};