import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../valueobjects/kanji-onyomi-reading";

class Kanji {
    constructor(
        public readonly ideogram: KanjiIdeogram,
        public readonly onyomiReadings: KanjiOnyomiReading[],
        public readonly kunyomiReadings: KanjiKunyomiReading[],
        public readonly meanings: KanjiMeaning[],
        public readonly strokes: number,
        public readonly jlpt: number,
        public readonly grade: number,
        public readonly frequency: number,
        public readonly radicals: string[],
        public readonly parts: string[],
        public readonly examples: string[],
    ) {}
}

export { Kanji };