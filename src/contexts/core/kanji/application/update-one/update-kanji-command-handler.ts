import type { CommandHandler } from "../../../../shared/cqrs/domain/command-handler";
import { CommandHandlerResponse } from "../../../../shared/cqrs/domain/command-handler-responde";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";
import type { KanjiUpdater } from "./kanji-updater";
import { UpdateKanjiCommand } from "./update-kanji-command";

class UpdateKanjiCommandHandler implements CommandHandler {
  constructor(private readonly updater: KanjiUpdater) {}
  get type(): string {
    return UpdateKanjiCommand.TYPE;
  }

  async handle(command: UpdateKanjiCommand): Promise<CommandHandlerResponse> {
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
    const radicals = command.radicals
      .split(",")
      .map((radical) => new KanjiRadical(radical));

    await this.updater.run(
      ideogram,
      onyomiReadings,
      kunyomiReadings,
      meanings,
      strokes,
      radicals
    );

    return new CommandHandlerResponse([]);
  }
}

export { UpdateKanjiCommandHandler };
