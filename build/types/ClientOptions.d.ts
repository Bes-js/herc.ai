export interface ClientOptions {
    apiKey?: string;
    maxRetries?: number;
    timeout?: number;
    baseUrl?: string;
    betaFeatures?: BetaFeatures;
}
export interface BetaFeatures {
    buildCode?: string;
    buildKey?: string;
}
