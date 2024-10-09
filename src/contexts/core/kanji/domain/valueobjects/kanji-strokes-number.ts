class KanjiStrokesNumber {

  constructor(
    private readonly value: number
  ) {
    if (value < 1) {
      throw new Error('KanjiStrokesNumber should be greater than 0');
    }
  }

  get val () {
        return this.value;
    }

}

export { KanjiStrokesNumber };