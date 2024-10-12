import type { Command } from "../../../../shared/cqrs/domain/command";

class UpdateKanjiCommand implements Command {
    
        static readonly TYPE = "tanukanji.core.kanji.update:1.0.0";
    
        constructor(
            public readonly ideogram: string,
            public readonly onyomi: string,
            public readonly kunyomi: string,
            public readonly meanings: string[],
            public readonly strokeCount: number,
            public readonly radicals: string,
        ) {}
    
        get type(): string {
            return UpdateKanjiCommand.TYPE;
        }
}

export { UpdateKanjiCommand };