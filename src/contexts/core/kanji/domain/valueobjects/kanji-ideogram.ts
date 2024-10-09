import { ValueObjectValidationError } from "../../../../shared/errors/domain/ValueObjectValidationError";

class KanjiIdeogram {
    constructor(
        private readonly value: string,
    ) {
        if (value.length !== 1)
            throw new ValueObjectValidationError('Kanji ideogram must have exactly one character');
    }

    get val () {
        return this.value;
    }
}

export { KanjiIdeogram };