import { QueryHandlerResponse } from "../../../../shared/cqrs/domain/query-handler-response";
import { KanjiIdeogram } from "../../domain/valueobjects/kanji-ideogram";
import type { FindKanjiQuery } from "./find-kanji-query";
import type { KanjiFinder } from "./kanji-finder";

class FindKanjiQueryHandler {
  constructor(private readonly finder: KanjiFinder) {}

  async handle(query: FindKanjiQuery): Promise<QueryHandlerResponse> {
    const ideogram = new KanjiIdeogram(query.ideogram);
    const kanji = await this.finder.run(ideogram);
    return new QueryHandlerResponse([kanji], []);
  }
}

export { FindKanjiQueryHandler };
