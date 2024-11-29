use aggregate_root::domain::aggregate_root::AggregateRoot;

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

impl Kanji {
    pub fn new(ideogram: KanjiIdeogram, kunyomi_readings: Vec<KanjiKunyomiReading>, onyomi_readings: Vec<KanjiOnyomiReading>, 
        nanori_readings: Vec<KanjiNanoriReading>, meanings: Vec<KanjiMeaning>, strokes: KanjiStrokesNumber, radicals: Vec<KanjiRadical>) -> Self {
        Self { ideogram, kunyomi_readings, onyomi_readings, nanori_readings, meanings, strokes, radicals }
    }
}

impl AggregateRoot for Kanji {
    fn get_type() -> String {
        "tanukanji.kernel.kanji".to_string()
    }
}

impl Clone for Kanji {
    fn clone(&self) -> Self {
        Self::new(self.ideogram.clone(), self.kunyomi_readings.clone(), self.onyomi_readings.clone(), self.nanori_readings.clone(), self.meanings.clone(), self.strokes.clone(), self.radicals.clone())
    }
}
