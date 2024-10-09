import type { Kanji } from "../entities/kanji";
import type { KanjiIdeogram } from "../valueobjects/kanji-ideogram";

abstract class KanjiRepository {

    abstract findOneByIdeogram(ideogram: KanjiIdeogram): Promise<Kanji>;

    abstract findMany(): Promise<Kanji[]>;

    abstract create_one(kanji: Kanji): Promise<void>;

    abstract update_one(kanji: Kanji): Promise<void>;

    abstract delete_one(kanji: Kanji): Promise<void>;
    
}