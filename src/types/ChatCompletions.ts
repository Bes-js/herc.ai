export namespace ChatCompletion {

export interface CreateChatCompletions {
    messages: ChatCompletionMessage[];
    model: string;
    temperature?: number;
    top_p?: number;
    top_k?: number;
    stream?: boolean;
};



export interface ChatCompletionMessage {
    role: 'system' | 'user' | 'assistant';
    content: string | ChatContentParams[];
};


export type ChatContentParams = ChatTextParam | ChatImageParam;


export type ChatTextParam = {
    type: 'text';
    text: string;
};

export type ChatImageParam = {
    type: 'image';
    image_url: ImageURLParams; 
};

export type ImageURLParams = {
    url: string;
    detail?: 'low' | 'medium' | 'high';
};


export namespace Response {

    export interface ChatCompletionsResponse {
        messages: ChatCompletionMessage[];
        top_p: number;
        top_k: number;
        temperature: number;
        reply: string;
    };

};

};