import type { Kanji } from "../entities/kanji";
import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";

abstract class KanjiRepository {

    abstract findOneByIdeogram(ideogram: KanjiIdeogram): Promise<Kanji>;

    abstract findMany(): Promise<Kanji[]>;

    abstract createOne(kanji: Kanji): Promise<void>;

    abstract updateOne(kanji: Kanji): Promise<void>;

    abstract deleteOne(kanji: KanjiIdeogram): Promise<void>;

}

export { KanjiRepository };