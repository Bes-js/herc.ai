export declare namespace RateLimit {
    type Tier = 'Free' | 'Elite' | 'Plus' | 'Advanced' | 'Ultimate' | 'Business';
    interface RetrieveByModel {
        ratelimit: {
            model: string;
            limit: number;
        };
        tier: Tier;
    }
    type RetrieveByCategory = Record<Tier, Record<string, {
        'RPM': number;
        'RPD': number;
    }>>;
}
