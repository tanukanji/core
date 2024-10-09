import type { DomainEvent } from "../../../../shared/events/domain/domain-event";
import { DomainEventId } from "../../../../shared/events/domain/domain-event-id";
import { DomainEventOccurredOn } from "../../../../shared/events/domain/domain-event-occurred-on";
import { KanjiCreatedEvent } from "../events/kanji-created-event";
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

    static create(
        ideogram: KanjiIdeogram,
        onyomiReadings: KanjiOnyomiReading[],
        kunyomiReadings: KanjiKunyomiReading[],
        meanings: KanjiMeaning[],
        strokes: KanjiStrokesNumber,
        radicals: KanjiRadical[],
    ): [Kanji, DomainEvent] {
        const kanji = new Kanji(ideogram, onyomiReadings, kunyomiReadings, meanings, strokes, radicals);
        const event = new KanjiCreatedEvent(DomainEventId.random(), DomainEventOccurredOn.now(), ideogram, onyomiReadings, 
            kunyomiReadings, meanings, strokes, radicals);
        return [kanji, event];
    }
}

export { Kanji };