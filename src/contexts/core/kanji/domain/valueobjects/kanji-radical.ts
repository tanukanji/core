class KanjiRadical {
    constructor(
        private readonly value: string,
    ) {
        if (value.length !== 1)
            throw new Error('KanjiRadical should have only one character');
    }

    get val () {
        return this.value;
    }
}

export { KanjiRadical };