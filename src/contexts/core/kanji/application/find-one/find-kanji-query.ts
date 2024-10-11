import type { Query } from "../../../../shared/cqrs/domain/query";

class FindKanjiQuery implements Query {
    
        static readonly TYPE = "tanukanji.core.kanji.find:1.0.0";
    
        constructor(
            public readonly ideogram: string
        ) {}
    
        get type(): string {
            return FindKanjiQuery.TYPE;
        }
}

export { FindKanjiQuery };