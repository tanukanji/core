import type { DomainError } from "../../errors/domain/DomainError";

class QueryHandlerResponse {
  constructor(
    public readonly data: any,
    public readonly errors: DomainError[],
) {}
}

export { QueryHandlerResponse };