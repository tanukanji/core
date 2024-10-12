import { DomainEventId } from "../../../../shared/events/domain/domain-event-id";
import { DomainEventOccurredOn } from "../../../../shared/events/domain/domain-event-occurred-on";
import type { EventBus } from "../../../../shared/events/domain/event-bus";
import { Kanji } from "../../domain/entities/kanji";
import { KanjiUpdatedEvent } from "../../domain/events/kanji-updated-event";
import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import type { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import type { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import type { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";

class KanjiUpdater {
    constructor(
        private kanjiRepository: KanjiRepository,
        private eventBus: EventBus,
    ) {}
    
    async run(
        ideogram: KanjiIdeogram,
        onyomiReadings: KanjiOnyomiReading[],
        kunyomiReadings: KanjiKunyomiReading[],
        meanings: KanjiMeaning[],
        strokes: KanjiStrokesNumber,
        radicals: KanjiRadical[],
    ): Promise<void> {
        const newKanji = new Kanji(ideogram, onyomiReadings, kunyomiReadings, meanings, strokes, radicals);
        const oldKanji = await this.kanjiRepository.findOneByIdeogram(ideogram);
        if (!oldKanji.equals(newKanji)) {
            await this.kanjiRepository.updateOne(newKanji);
            const event = new KanjiUpdatedEvent(DomainEventId.random(), DomainEventOccurredOn.now(), ideogram, oldKanji.onyomiReadings, 
                newKanji.onyomiReadings, oldKanji.kunyomiReadings, newKanji.kunyomiReadings, oldKanji.meanings, newKanji.meanings, 
                oldKanji.strokes, newKanji.strokes, oldKanji.radicals, newKanji.radicals);
            this.eventBus.publish(event);
        }

    }
}

export { KanjiUpdater };