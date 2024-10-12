import { QueryHandlerResponse } from "../../../../shared/cqrs/domain/query-handler-response";
import { DomainError } from "../../../../shared/errors/domain/DomainError";
import { UnknownError } from "../../../../shared/errors/domain/UnknownError";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import type { FindKanjiQuery } from "./find-kanji-query";
import type { KanjiFinder } from "./kanji-finder";

class FindKanjiQueryHandler {
  constructor(private readonly finder: KanjiFinder) {}

  async handle(query: FindKanjiQuery): Promise<QueryHandlerResponse> {
    try {
      const ideogram = new KanjiIdeogram(query.ideogram);
      const kanji = await this.finder.run(ideogram);
      return new QueryHandlerResponse([kanji], []);
    } catch (error: unknown) {
      if (error instanceof DomainError) {
        return new QueryHandlerResponse([], [error]);
      }
      return new QueryHandlerResponse([], [new UnknownError()]);
    }
  }
}

export { FindKanjiQueryHandler };
