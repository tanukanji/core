class KanjiMeaning {
  constructor(
    private readonly value: string,
    private readonly language: string
  ) { }

  get val () {
    return this.value;
  }

  get lang () {
    return this.language;
}
}

export { KanjiMeaning };