import { DomainError } from "../../../../shared/errors/domain/DomainError";

class KanjiAlreadyExistsError extends DomainError {
    constructor(message: string) {
        super(message);
    }
}