import Nyro from '../nyro/index';

/* Types */
import { 
    ClientOptions,
    ChatCompletion,
    ImageGenerations,
    HercaiModels,
    AudioSpeech,
    RateLimit
} from '../types/export';

export class Hercai {

    public apiKey: string;
    public maxRetries: number;
    public timeout: number;
    public baseUrl: string = 'https://hercai.onrender.com/v1';
    public beta: ClientOptions['betaFeatures'] = { };
    public config: ClientOptions;
    private _client: Nyro | undefined;
    constructor(clientOptions: ClientOptions) {
        
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

        this._client = new Nyro(this.baseUrl, this.apiKey);

    };


    chat = {
        completions: {
            create: async <AsyncStream extends boolean = false>(
                chatCompletion: ChatCompletion.CreateChatCompletions & { stream?: AsyncStream }
            ): Promise<
                AsyncStream extends true
                    ?  AsyncGenerator<ChatCompletion.Response.ChatCompletionsResponse, void, unknown>
                    : ChatCompletion.Response.ChatCompletionsResponse 
            > => {
                if (chatCompletion.stream) {
                    return Promise.resolve(this._client!.createChatStreamRequest(chatCompletion)) as any;
                } else {
                    return this._client!.createChatRequest(chatCompletion);
                }
            }
        },

        models: {
            retrieve: async (): Promise<HercaiModels.List> => {
                return this._client!.getModelList('chat');
            }
        }
    };


    images = {
        generations: async (imageGenerations: ImageGenerations.CreateImageGenerations): Promise<ImageGenerations.ImageBuffer> => {
            return this._client?.createImageRequest(imageGenerations);
        },
        models: {
            retrieve: async (): Promise<HercaiModels.List> => {
                return this._client!.getModelList('image');
            }
        }
    };

    audio = {
        speech: {
            create: async (audioSpeech: AudioSpeech.CreateAudioSpeech): Promise<AudioSpeech.AudioBuffer> => {
                return this._client?.createAudioSpeechRequest(audioSpeech);
            }
        },
        models: {
            retrieve: async (): Promise<HercaiModels.List> => {
                return this._client!.getModelList('speech');
            }
        }
    };

    ratelimits = {
        retrieveByModel: async (model: string): Promise<RateLimit.RetrieveByModel> => {
            return this._client!.getRateLimitByModel(model);
        },
        retrieveByCategory: async (type: 'image' | 'chat' | 'speech'): Promise<RateLimit.RetrieveByCategory> => {
            return this._client!.getRateLimitsWithCategory(type);
        }
    }

};