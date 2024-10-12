import type { AggregateRoot } from "../../aggregate/domain/aggregate-root";
import type { DomainError } from "../../errors/domain/DomainError";

class QueryHandlerResponse {
  constructor(
    public readonly data: AggregateRoot[],
    public readonly errors: DomainError[]
  ) {}
}

export { QueryHandlerResponse };
