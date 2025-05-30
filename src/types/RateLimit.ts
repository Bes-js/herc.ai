export namespace RateLimit {

    export type Tier = 'Free' | 'Elite' | 'Plus' | 'Advanced' | 'Ultimate' | 'Business';

    export interface RetrieveByModel {
        ratelimit: {
            model: string;
            limit: number;
        },
        tier: Tier;
    };

    export type RetrieveByCategory = Record<
    Tier, Record<string, { 'RPM': number; 'RPD': number; } >
    >;

};