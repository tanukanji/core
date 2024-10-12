import type { Query } from "../../domain/query";
import type { QueryBus } from "../../domain/query-bus";
import type { QueryHandler } from "../../domain/query-handler";
import type { QueryHandlerResponse } from "../../domain/query-handler-response";

class InmemoryQueryBus implements QueryBus {

  private queryHandlers: Map<string, QueryHandler> = new Map();

  async ask(query: Query): Promise<QueryHandlerResponse> {
    const handler = this.queryHandlers.get(query.type);
    if (!handler) {
      throw new Error(`The query ${query.type} has no handler`);
    }
    return handler.ask(query);
  }

  subscribe(queryType: string, handler: QueryHandler): void {
    if (this.queryHandlers.has(queryType)) {
      throw new Error(`The query ${queryType} already has a handler`);
    }
    this.queryHandlers.set(queryType, handler)
  }
}

export { InmemoryQueryBus };