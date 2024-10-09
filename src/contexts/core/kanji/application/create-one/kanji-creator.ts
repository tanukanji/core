import type { EventBus } from "../../../../shared/events/domain/event-bus";
import { Kanji } from "../../domain/entities/kanji";
import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import type { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import type { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import type { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import type { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import type { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import type { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";

class KanjiCreator {

    constructor(
        private readonly kanjiRepository: KanjiRepository,
        private readonly eventBus: EventBus,
    ) {}
    
    async createOne(
        ideogram: KanjiIdeogram,
        onyomiReadings: KanjiOnyomiReading[],
        kunyomiReadings: KanjiKunyomiReading[],
        meanings: KanjiMeaning[],
        strokes: KanjiStrokesNumber,
        radicals: KanjiRadical[],
    ): Promise<void> {
        const [kanji, event] = Kanji.create(ideogram, onyomiReadings, kunyomiReadings, meanings, strokes, radicals);
        await this.kanjiRepository.createOne(kanji);
        this.eventBus.publish(event);
    }

}