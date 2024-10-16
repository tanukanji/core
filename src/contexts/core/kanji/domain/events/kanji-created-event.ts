import { DomainEvent } from "../../../../shared/events/domain/domain-event";
import type { DomainEventId } from "../../../../shared/events/domain/domain-event-id";
import type { DomainEventOccurredOn } from "../../../../shared/events/domain/domain-event-occurred-on";
import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../valueobjects/kanji-onyomi-reading";
import type { KanjiRadical } from "../valueobjects/kanji-radical";
import type { KanjiStrokesNumber } from "../valueobjects/kanji-strokes-number";

class KanjiCreatedEvent extends DomainEvent {
    constructor(
        public readonly id: DomainEventId,
        public readonly occurredOn: DomainEventOccurredOn,
        public readonly ideogram: KanjiIdeogram,
        public readonly onyomiReadings: KanjiOnyomiReading[],
        public readonly kunyomiReadings: KanjiKunyomiReading[],
        public readonly meanings: KanjiMeaning[],
        public readonly strokes: KanjiStrokesNumber,
        public readonly radicals: KanjiRadical[],
    ) {
        super();
    }

    get type(): string {
        return 'tanukanji.core.core.kanji.created:1.0';
    }
}

export { KanjiCreatedEvent };