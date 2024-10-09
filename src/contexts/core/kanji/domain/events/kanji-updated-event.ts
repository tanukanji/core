import { DomainEvent } from "../../../../shared/events/domain/domain-event";
import type { DomainEventId } from "../../../../shared/events/domain/domain-event-id";
import type { DomainEventOccurredOn } from "../../../../shared/events/domain/domain-event-occurred-on";
import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../valueobjects/kanji-onyomi-reading";
import type { KanjiRadical } from "../valueobjects/kanji-radical";
import type { KanjiStrokesNumber } from "../valueobjects/kanji-strokes-number";

class KanjiUpdatedEvent extends DomainEvent {
    constructor(
        public readonly id: DomainEventId,
        public readonly occurredOn: DomainEventOccurredOn,
        public readonly ideogram: KanjiIdeogram,
        public readonly oldOnyomiReadings: KanjiOnyomiReading[],
        public readonly newOnyomiReadings: KanjiOnyomiReading[],
        public readonly oldKunyomiReadings: KanjiKunyomiReading[],
        public readonly newKunyomiReadings: KanjiKunyomiReading[],
        public readonly oldMeanings: KanjiMeaning[],
        public readonly newMeanings: KanjiMeaning[],
        public readonly oldStrokes: KanjiStrokesNumber,
        public readonly newStrokes: KanjiStrokesNumber,
        public readonly oldRadicals: KanjiRadical[],
        public readonly newRadicals: KanjiRadical[],
    ) {
        super();
    }

    get type(): string {
        return 'tanukanji.core.core.kanji.updated:1.0';
    }
}

export { KanjiUpdatedEvent };