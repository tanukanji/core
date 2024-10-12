import type { CommandHandler } from "../../../../shared/cqrs/domain/command-handler";
import { CommandHandlerResponse } from "../../../../shared/cqrs/domain/command-handler-responde";
import { DomainError } from "../../../../shared/errors/domain/DomainError";
import { UnknownError } from "../../../../shared/errors/domain/UnknownError";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import { KanjiKunyomiReading } from "../../domain/valueobjects/kanji-kunyomi-reading";
import { KanjiMeaning } from "../../domain/valueobjects/kanji-meaning";
import { KanjiOnyomiReading } from "../../domain/valueobjects/kanji-onyomi-reading";
import { KanjiRadical } from "../../domain/valueobjects/kanji-radical";
import { KanjiStrokesNumber } from "../../domain/valueobjects/kanji-strokes-number";
import { CreateKanjiCommand } from "./create-kanji-command";
import type { KanjiCreator } from "./kanji-creator";

class CreateKanjiCommandHandler implements CommandHandler {
  constructor(private readonly creator: KanjiCreator) {}

  get type(): string {
    return CreateKanjiCommand.TYPE;
  }

  async handle(command: CreateKanjiCommand): Promise<CommandHandlerResponse> {
    try {
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

      await this.creator.run(
        ideogram,
        onyomiReadings,
        kunyomiReadings,
        meanings,
        strokes,
        radicals
      );

      return new CommandHandlerResponse([]);
    } catch (error: unknown) {
      if (error instanceof DomainError) {
        return new CommandHandlerResponse([error]);
      }
      return new CommandHandlerResponse([new UnknownError()]);
    }
  }
}

export { CreateKanjiCommandHandler };
