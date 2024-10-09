import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../valueobjects/kanji-onyomi-reading";
import type { KanjiRadical } from "../valueobjects/kanji-radical";
import type { KanjiStrokesNumber } from "../valueobjects/kanji-strokes-number";

class Kanji {
    constructor(
        public ideogram: KanjiIdeogram,
        public onyomiReadings: KanjiOnyomiReading[],
        public kunyomiReadings: KanjiKunyomiReading[],
        public meanings: KanjiMeaning[],
        public strokes: KanjiStrokesNumber,
        public radicals: KanjiRadical[],
    ) {}
}

export { Kanji };