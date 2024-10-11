import type { DomainError } from "../../errors/domain/DomainError";

class QueryHandlerResponse<T> {
  constructor(
    public readonly data: T,
    public readonly errors: DomainError[],
) {}
}

export { QueryHandlerResponse };