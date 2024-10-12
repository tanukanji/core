import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import type { DeleteKanjiCommand } from "./delete-kanji-command";
import type { KanjiDeleter } from "./kanji-deleter";

class DeleteKanjiCommandHandler {
    constructor(
        private deleter: KanjiDeleter
    ) {}

    async handle(command: DeleteKanjiCommand): Promise<void> {
        const ideogram = new KanjiIdeogram(command.ideogram);
        return this.deleter.run(ideogram);
    }
}

export { DeleteKanjiCommandHandler };