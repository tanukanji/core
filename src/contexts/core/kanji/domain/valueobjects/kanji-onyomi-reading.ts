class KanjiOnyomiReading {
    constructor(
        private readonly value: string,
    ) { }

    get val () {
        return this.value;
    }
}

export { KanjiOnyomiReading };