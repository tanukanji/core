use std::sync::Arc;

use events::domain::domain_event::DomainEvent;

use crate::kanjis::domain::entities::{kanji_ideogram::KanjiIdeogram, kanji_kunyomi_reading::KanjiKunyomiReading, kanji_meaning::KanjiMeaning, kanji_nanori_reading::KanjiNanoriReading, kanji_onyomi_reading::KanjiOnyomiReading, kanji_radical::KanjiRadical, kanji_strokes_number::KanjiStrokesNumber};


pub struct KanjiCreatedEvent {
    pub id: String,
    pub ideogram: KanjiIdeogram,
    pub kunyomi_readings: Vec<KanjiKunyomiReading>,
    pub onyomi_readings: Vec<KanjiOnyomiReading>,
    pub nanori_readings: Vec<KanjiNanoriReading>,
    pub meanings: Vec<KanjiMeaning>,
    pub strokes: KanjiStrokesNumber,
    pub radicals: Vec<KanjiRadical>,
    pub occurred_on: String,
}

impl KanjiCreatedEvent {
    pub fn new(
        ideogram: KanjiIdeogram, 
        kunyomi_readings: Vec<KanjiKunyomiReading>, 
        onyomi_readings: Vec<KanjiOnyomiReading>, 
        nanori_readings: Vec<KanjiNanoriReading>, 
        meanings: Vec<KanjiMeaning>, 
        strokes: KanjiStrokesNumber, 
        radicals: Vec<KanjiRadical>,
    ) -> Self {
        let id = uuid::Uuid::new_v4().to_string();
        let occurred_on = chrono::Utc::now().to_rfc3339();
        Self { id, ideogram, kunyomi_readings, onyomi_readings, nanori_readings, meanings, strokes, radicals, occurred_on }
    }

    pub fn new_shared(
        ideogram: KanjiIdeogram, 
        kunyomi_readings: Vec<KanjiKunyomiReading>, 
        onyomi_readings: Vec<KanjiOnyomiReading>, 
        nanori_readings: Vec<KanjiNanoriReading>,
        meanings: Vec<KanjiMeaning>, 
        strokes: KanjiStrokesNumber, 
        radicals: Vec<KanjiRadical>
    )  -> Arc<Self> {
        std::sync::Arc::new(Self::new(ideogram, kunyomi_readings, onyomi_readings, nanori_readings, meanings, strokes, radicals))
    }
}

impl DomainEvent for KanjiCreatedEvent {
    fn event_type(&self) -> String {
        "tanukanji.kernel.kanji.created@1.0.0".to_string()
    }
}