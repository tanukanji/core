import type { Command } from "../../../../shared/cqrs/domain/command";

class UpdateKanjiCommand implements Command {
    
        static readonly TYPE = "tanukanji.core.kanji.update:1.0.0";
    
        constructor(
            public readonly kanji: string,
            public readonly onyomi: string,
            public readonly kunyomi: string,
            public readonly meaning: string,
            public readonly strokeCount: number,
            public readonly examples: string[]
        ) {}
    
        get type(): string {
            return UpdateKanjiCommand.TYPE;
        }
}

export { UpdateKanjiCommand };