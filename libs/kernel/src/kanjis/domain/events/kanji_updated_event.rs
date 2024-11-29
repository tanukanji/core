use std::sync::Arc;

use events::domain::domain_event::DomainEvent;

use crate::kanjis::domain::entities::{kanji_ideogram::KanjiIdeogram, kanji_kunyomi_reading::KanjiKunyomiReading, kanji_meaning::KanjiMeaning, kanji_nanori_reading::KanjiNanoriReading, kanji_onyomi_reading::KanjiOnyomiReading, kanji_radical::KanjiRadical, kanji_strokes_number::KanjiStrokesNumber};


pub struct KanjiUpdatedEvent {
    pub id: String,
    pub ideogram: KanjiIdeogram,
    pub kunyomi_readings: Vec<KanjiKunyomiReading>,
    pub old_kunyomi_readings: Vec<KanjiKunyomiReading>,
    pub onyomi_readings: Vec<KanjiOnyomiReading>,
    pub old_onyomi_readings: Vec<KanjiOnyomiReading>,
    pub nanori_readings: Vec<KanjiNanoriReading>,
    pub old_nanori_readings: Vec<KanjiNanoriReading>,
    pub meanings: Vec<KanjiMeaning>,
    pub old_meanings: Vec<KanjiMeaning>,
    pub strokes: KanjiStrokesNumber,
    pub old_strokes: KanjiStrokesNumber,
    pub radicals: Vec<KanjiRadical>,
    pub old_radicals: Vec<KanjiRadical>,
    pub occurred_on: String,
}

impl KanjiUpdatedEvent {
    pub fn new(
        ideogram: KanjiIdeogram,
        kunyomi_readings: Vec<KanjiKunyomiReading>,
        old_kunyomi_readings: Vec<KanjiKunyomiReading>,
        onyomi_readings: Vec<KanjiOnyomiReading>,
        old_onyomi_readings: Vec<KanjiOnyomiReading>,
        nanori_readings: Vec<KanjiNanoriReading>,
        old_nanori_readings: Vec<KanjiNanoriReading>,
        meanings: Vec<KanjiMeaning>,
        old_meanings: Vec<KanjiMeaning>,
        strokes: KanjiStrokesNumber,
        old_strokes: KanjiStrokesNumber,
        radicals: Vec<KanjiRadical>,
        old_radicals: Vec<KanjiRadical>,
    ) -> Self {
        let id = uuid::Uuid::new_v4().to_string();
        let occurred_on = chrono::Utc::now().to_rfc3339();
        Self { id, ideogram, kunyomi_readings, old_kunyomi_readings, onyomi_readings, old_onyomi_readings, nanori_readings, old_nanori_readings, 
            meanings, old_meanings, strokes, old_strokes, radicals, old_radicals, occurred_on }
    }

    pub fn new_shared(
        ideogram: KanjiIdeogram,
        kunyomi_readings: Vec<KanjiKunyomiReading>,
        old_kunyomi_readings: Vec<KanjiKunyomiReading>,
        onyomi_readings: Vec<KanjiOnyomiReading>,
        old_onyomi_readings: Vec<KanjiOnyomiReading>,
        nanori_readings: Vec<KanjiNanoriReading>,
        old_nanori_readings: Vec<KanjiNanoriReading>,
        meanings: Vec<KanjiMeaning>,
        old_meanings: Vec<KanjiMeaning>,
        strokes: KanjiStrokesNumber,
        old_strokes: KanjiStrokesNumber,
        radicals: Vec<KanjiRadical>,
        old_radicals: Vec<KanjiRadical>,
    )  -> Arc<Self> {
        Arc::new(Self::new(ideogram, kunyomi_readings, old_kunyomi_readings, onyomi_readings, old_onyomi_readings, nanori_readings, old_nanori_readings, meanings, old_meanings, strokes, old_strokes, radicals, old_radicals))
    }
}

impl DomainEvent for KanjiUpdatedEvent {
    fn event_type(&self) -> String {
        "tanukanji.kernel.kanji.updated@1.0.0".to_string()
    }
}