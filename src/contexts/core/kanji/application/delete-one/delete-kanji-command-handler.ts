import type { CommandHandler } from "../../../../shared/cqrs/domain/command-handler";
import { CommandHandlerResponse } from "../../../../shared/cqrs/domain/command-handler-responde";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import { DeleteKanjiCommand } from "./delete-kanji-command";
import type { KanjiDeleter } from "./kanji-deleter";

class DeleteKanjiCommandHandler implements CommandHandler {
  constructor(private deleter: KanjiDeleter) {}

  get type(): string {
    return DeleteKanjiCommand.TYPE;
  }

  async handle(command: DeleteKanjiCommand): Promise<CommandHandlerResponse> {
    const ideogram = new KanjiIdeogram(command.ideogram);
    await this.deleter.run(ideogram);

    return new CommandHandlerResponse([]);
  }
}

export { DeleteKanjiCommandHandler };
