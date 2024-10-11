import type { Query } from "./query";
import type { QueryHandlerResponse } from "./query-handler-response";

interface QueryHandler<TQuery extends Query, TData> {
    
    ask(query: TQuery): Promise<QueryHandlerResponse<TData>>;

    get type(): string;

}

export type { QueryHandler };