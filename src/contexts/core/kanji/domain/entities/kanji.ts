import { deepEquals } from "bun";
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
import { AggregateRoot } from "../../../../shared/aggregate/domain/aggregate-root";

class Kanji extends AggregateRoot {
    constructor(
        public ideogram: KanjiIdeogram,
        public onyomiReadings: KanjiOnyomiReading[],
        public kunyomiReadings: KanjiKunyomiReading[],
        public meanings: KanjiMeaning[],
        public strokes: KanjiStrokesNumber,
        public radicals: KanjiRadical[],
    ) {
        super();
    }

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

    toPrimitives(): any {
        const data = {
            ideogram: this.ideogram.val,
            onyomiReadings: this.onyomiReadings.map((reading) => reading.val),
            kunyomiReadings: this.kunyomiReadings.map((reading) => reading.val),
            meanings: this.meanings.map((meaning) => meaning.val),
            strokes: this.strokes.val,
            radicals: this.radicals.map((radical) => radical.val),
        }
        return data;
    }

    equals(kanji: Kanji) {
        return deepEquals(this, kanji);
    }
}

export { Kanji };