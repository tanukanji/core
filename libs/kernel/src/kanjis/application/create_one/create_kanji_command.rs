use std::any::Any;

use cqrs::domain::command::Command;

use crate::kanjis::domain::entities::{kanji_ideogram::KanjiIdeogram, kanji_kunyomi_reading::KanjiKunyomiReading, kanji_meaning::KanjiMeaning, kanji_nanori_reading::KanjiNanoriReading, kanji_onyomi_reading::KanjiOnyomiReading, kanji_radical::KanjiRadical, kanji_strokes_number::KanjiStrokesNumber};


pub struct CreateKanjiCommand {
    pub ideogram: KanjiIdeogram,
    pub kunyomi_readings: Vec<KanjiKunyomiReading>,
    pub onyomi_readings: Vec<KanjiOnyomiReading>,
    pub nanori_readings: Vec<KanjiNanoriReading>,
    pub meanings: Vec<KanjiMeaning>,
    pub strokes: KanjiStrokesNumber,
    pub radicals: Vec<KanjiRadical>,
}

impl CreateKanjiCommand {

    pub const COMMAND_TYPE: &'static str = "CreateKanjiCommand";

    pub fn new(ideogram: KanjiIdeogram, kunyomi_readings: Vec<KanjiKunyomiReading>, onyomi_readings: Vec<KanjiOnyomiReading>, 
        nanori_readings: Vec<KanjiNanoriReading>, meanings: Vec<KanjiMeaning>, strokes: KanjiStrokesNumber, radicals: Vec<KanjiRadical>) -> Self {
        Self { ideogram, kunyomi_readings, onyomi_readings, nanori_readings, meanings, strokes, radicals }
    }
}

impl Command for CreateKanjiCommand {
    fn command_type(&self) -> String {
        Self::COMMAND_TYPE.to_string()
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}