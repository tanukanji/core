import { DomainError } from "../../../../shared/errors/domain/DomainError";

class KanjiNotFoundError extends DomainError {
    constructor(message: string) {
        super(message);
    }
}

export { KanjiNotFoundError };