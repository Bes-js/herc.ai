import { ClientOptions, ChatCompletion, ImageGenerations, HercaiModels, AudioSpeech, RateLimit } from '../types/export';
export declare class Hercai {
    apiKey: string;
    maxRetries: number;
    timeout: number;
    baseUrl: string;
    beta: ClientOptions['betaFeatures'];
    config: ClientOptions;
    private _client;
    constructor(clientOptions: ClientOptions);
    chat: {
        completions: {
            create: <AsyncStream extends boolean = false>(chatCompletion: ChatCompletion.CreateChatCompletions & {
                stream?: AsyncStream;
            }) => Promise<AsyncStream extends true ? AsyncGenerator<ChatCompletion.Response.ChatCompletionsResponse, void, unknown> : ChatCompletion.Response.ChatCompletionsResponse>;
        };
        models: {
            retrieve: () => Promise<HercaiModels.List>;
        };
    };
    images: {
        generations: (imageGenerations: ImageGenerations.CreateImageGenerations) => Promise<ImageGenerations.ImageBuffer>;
        models: {
            retrieve: () => Promise<HercaiModels.List>;
        };
    };
    audio: {
        speech: {
            create: (audioSpeech: AudioSpeech.CreateAudioSpeech) => Promise<AudioSpeech.AudioBuffer>;
        };
        models: {
            retrieve: () => Promise<HercaiModels.List>;
        };
    };
    ratelimits: {
        retrieveByModel: (model: string) => Promise<RateLimit.RetrieveByModel>;
        retrieveByCategory: (type: "image" | "chat" | "speech") => Promise<RateLimit.RetrieveByCategory>;
    };
}
