export declare namespace AudioSpeech {
    type AudioBuffer = Buffer;
    type AudioFormat = 'mp3' | 'wav' | 'pcm16';
    type AudioModel = 'openai/Nova' | 'openai/Sage' | 'openai/Alloy' | 'openai/Echo' | 'openai/Fable' | 'openai/Onyx' | 'openai/Shimmer' | 'openai/Coral' | 'openai/Ash' | 'openai/Ballad';
    interface CreateAudioSpeech {
        model: AudioModel;
        input: string;
        format?: AudioFormat;
        instructions?: string;
    }
}
