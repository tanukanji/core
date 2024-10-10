import { DomainEventId } from "../../../../shared/events/domain/domain-event-id";
import { DomainEventOccurredOn } from "../../../../shared/events/domain/domain-event-occurred-on";
import type { EventBus } from "../../../../shared/events/domain/event-bus";
import { KanjiNotFoundError } from "../../domain/errors/kanji-not-found-error";
import { KanjiDeletedEvent } from "../../domain/events/kanji-deleted-event";
import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import type { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";

class KanjiDeleter {
  constructor(
    private readonly kanjiRepository: KanjiRepository,
    private readonly eventBus: EventBus,
) {}

  async deleteOne(kanjiId: KanjiIdeogram): Promise<void> {
    const kanji = await this.kanjiRepository.findOneByIdeogram(kanjiId);
    if (!kanji) {
      throw new KanjiNotFoundError(`Kanji ${kanjiId.val} not found.`);
    }
    await this.kanjiRepository.deleteOne(kanjiId);
    const event = new KanjiDeletedEvent(DomainEventId.random(), DomainEventOccurredOn.now(), kanjiId, kanji.onyomiReadings, 
                                        kanji.kunyomiReadings, kanji.meanings, kanji.strokes, kanji.radicals);
    this.eventBus.publish(event);
  }
}

export { KanjiDeleter };