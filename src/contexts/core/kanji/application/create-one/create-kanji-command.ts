import type { Command } from "../../../../shared/cqrs/domain/command";

class CreateKanjiCommand implements Command {

    static readonly TYPE = "tanukanji.core.kanji.create:1.0.0";

    constructor(
        public readonly ideogram: string,
        public readonly onyomi: string,
        public readonly kunyomi: string,
        public readonly meanings: string[],
        public readonly strokeCount: number,
        public readonly radicals: string,
    ) {}

    get type(): string {
        return CreateKanjiCommand.TYPE;
    }

}

export { CreateKanjiCommand };