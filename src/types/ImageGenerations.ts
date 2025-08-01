export namespace ImageGenerations {

    export type ImageBuffer = Buffer;


    export interface CreateImageGenerations {
        prompt: string;
        model: string;
        negative_prompt?: string;
        steps?: number;
        size?: '256x256' | '512x512' | '1024x1024' | '1:1' | '4:3' | '3:2' | '16:9' | '9:16' & string;
        seed?: string;
        response_format?: ImageResponse;
    };

    export type ImageResponse = 'buffer';

};