import type { Kanji } from "../../domain/entities/kanji";
import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import type { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";

class KanjiFinder {
    constructor(
        private kanjiRepository: KanjiRepository
    ) {}

    async run(kanjiIdeogram: KanjiIdeogram): Promise<Kanji> {
        return this.kanjiRepository.findOneByIdeogram(kanjiIdeogram);
    }
}

export { KanjiFinder };