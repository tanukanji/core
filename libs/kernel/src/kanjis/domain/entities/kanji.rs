use super::{kanji_ideogram::KanjiIdeogram, kanji_kunyomi_reading::KanjiKunyomiReading, kanji_meaning::KanjiMeaning, kanji_nanori_reading::KanjiNanoriReading, kanji_onyomi_reading::KanjiOnyomiReading, kanji_radical::KanjiRadical, kanji_strokes_number::KanjiStrokesNumber};


pub struct Kanji {
    pub ideogram: KanjiIdeogram,
    pub kunyomi_readings: Vec<KanjiKunyomiReading>,
    pub onyomi_readings: Vec<KanjiOnyomiReading>,
    pub nanori_readings: Vec<KanjiNanoriReading>,
    pub meanings: Vec<KanjiMeaning>,
    pub strokes: KanjiStrokesNumber,
    pub radicals: Vec<KanjiRadical>,
}
