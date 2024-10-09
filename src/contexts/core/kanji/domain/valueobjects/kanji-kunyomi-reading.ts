class KanjiKunyomiReading {
    constructor(
        private readonly value: string,
    ) { }

    get val () {
        return this.value;
    }
}

export { KanjiKunyomiReading };