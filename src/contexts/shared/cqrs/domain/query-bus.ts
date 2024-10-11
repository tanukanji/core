import type { Query } from "./query";
import type { QueryHandler } from "./query-handler";
import type { QueryHandlerResponse } from "./query-handler-response";

interface QueryBus {
    ask(query: Query): Promise<QueryHandlerResponse>;
    subscribe(queryType: string, handler: QueryHandler): void;
}

export type { QueryBus };