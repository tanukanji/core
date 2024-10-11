import type { DomainError } from "../../errors/domain/DomainError";

class CommandHandlerResponse {
    constructor(
        public readonly errors: DomainError[],
    ) {}
}

export { CommandHandlerResponse };