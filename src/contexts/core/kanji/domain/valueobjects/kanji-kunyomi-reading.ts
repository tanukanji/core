import { ValueObjectValidationError } from "../../../../shared/errors/domain/ValueObjectValidationError";

class KanjiKunyomiReading {
    constructor(
        private readonly value: string,
    ) {
        if (value === '') {
            throw new ValueObjectValidationError('KanjiKunyomiReading should not be empty');
        }
    }

    get val () {
        return this.value;
    }
}

export { KanjiKunyomiReading };