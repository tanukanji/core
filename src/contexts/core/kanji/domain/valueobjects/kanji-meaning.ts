import { ValueObjectValidationError } from "../../../../shared/errors/domain/ValueObjectValidationError";

const validLanguages = ['en', 'ja', 'es'];

class KanjiMeaning {
  constructor(
    private readonly value: string,
    private readonly language: string
  ) {
    if (!validLanguages.includes(language))
      throw new ValueObjectValidationError(`Invalid language, should be one of ${validLanguages.join(", ")}.`);
  }

  get val () {
    return this.value;
  }

  get lang () {
    return this.language;
}
}

export { KanjiMeaning };