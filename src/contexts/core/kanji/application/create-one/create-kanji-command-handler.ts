import type { KanjiRepository } from "../../domain/repositories/kanji-repository";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";
import type { CreateKanjiCommand } from "./create-kanji-command";
import type { KanjiCreator } from "./kanji-creator";

class CreateKanjiCommandHandler {
  constructor(
    private readonly creator: KanjiCreator
) {}

  async handle(command: CreateKanjiCommand): Promise<void> {
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

    return this.creator.run(ideogram, onyomiReadings, kunyomiReadings, meanings, strokes, radicals);
  }
}

export { CreateKanjiCommandHandler };
