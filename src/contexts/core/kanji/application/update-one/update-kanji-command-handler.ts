import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";
import type { KanjiUpdater } from "./kanji-updater";
import type { UpdateKanjiCommand } from "./update-kanji-command";

class UpdateKanjiCommandHandler {
  constructor(
    private readonly updater: KanjiUpdater
) {}

  async handle(command: UpdateKanjiCommand): Promise<void> {
    const ideogram = new KanjiIdeogram(command.ideogram);
    const onyomiReadings = command.onyomi
      .split(",")
      .map((onyomi) => new KanjiOnyomiReading(onyomi));
    const kunyomiReadings = command.kunyomi
      .split(",")
      .map((kunyomi) => new KanjiKunyomiReading(kunyomi));
    const meanings = command.meanings.map((meaningRawData) => {
        const [language, content] = meaningRawData.split(":", 1);
        return new KanjiMeaning(content, language);
    });
    const strokes = new KanjiStrokesNumber(command.strokeCount);
    const radicals = command.radicals.split(",").map((radical) => new KanjiRadical(radical));

    return this.updater.run(ideogram, onyomiReadings, kunyomiReadings, meanings, strokes, radicals);
  }
}

export { UpdateKanjiCommandHandler };
