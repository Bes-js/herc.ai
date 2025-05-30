export declare namespace ChatCompletion {
    interface CreateChatCompletions {
        messages: ChatCompletionMessage[];
        model: string;
        temperature?: number;
        top_p?: number;
        top_k?: number;
        stream?: boolean;
    }
    interface ChatCompletionMessage {
        role: 'system' | 'user' | 'assistant';
        content: string | ChatContentParams[];
    }
    type ChatContentParams = ChatTextParam | ChatImageParam;
    type ChatTextParam = {
        type: 'text';
        text: string;
    };
    type ChatImageParam = {
        type: 'image';
        image_url: ImageURLParams;
    };
    type ImageURLParams = {
        url: string;
        detail?: 'low' | 'medium' | 'high';
    };
    namespace Response {
        interface ChatCompletionsResponse {
            messages: ChatCompletionMessage[];
            top_p: number;
            top_k: number;
            temperature: number;
            reply: string;
        }
    }
}
