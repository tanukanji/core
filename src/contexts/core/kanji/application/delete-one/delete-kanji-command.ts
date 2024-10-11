import type { Command } from "../../../../shared/cqrs/domain/command";

class DeleteKanjiCommand implements Command {

    static readonly TYPE = "tanukanji.core.kanji.delete:1.0.0";

    constructor(
        public readonly ideogram: string
    ) {}

    get type(): string {
        return DeleteKanjiCommand.TYPE;
    }

}

export { DeleteKanjiCommand };