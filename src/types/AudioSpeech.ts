export namespace AudioSpeech {
  
    export type AudioBuffer = Buffer;

    export type AudioFormat = 'mp3' | 'wav' | 'pcm16';

    export type AudioModel = 'openai/Nova' | 'openai/Sage' | 'openai/Alloy' | 'openai/Echo' | 'openai/Fable' | 'openai/Onyx' | 'openai/Shimmer' | 'openai/Coral' | 'openai/Ash' | 'openai/Ballad';

    export interface CreateAudioSpeech {
        model: AudioModel;
        input: string;
        format?: AudioFormat;
        instructions?: string;
    };

};
