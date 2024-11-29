use std::any::Any;

use cqrs::domain::command::Command;


pub struct UpdateKanjiCommand {
    pub ideogram: String,
    pub kunyomi_readings: Vec<String>,
    pub onyomi_readings: Vec<String>,
    pub nanori_readings: Vec<String>,
    pub meanings: Vec<String>,
    pub meaning_languages: Vec<String>,
    pub strokes: u8,
    pub radicals: Vec<String>,
}

impl UpdateKanjiCommand {

    pub const COMMAND_TYPE: &'static str = "UpdateKanjiCommand";

    pub fn new(ideogram: String, kunyomi_readings: Vec<String>, onyomi_readings: Vec<String>, 
        nanori_readings: Vec<String>, meanings: Vec<String>, meaning_languages: Vec<String>, strokes: u8, radicals: Vec<String>) -> Self {
        Self { ideogram, kunyomi_readings, onyomi_readings, nanori_readings, meanings, meaning_languages, strokes, radicals }
    }
}

impl Command for UpdateKanjiCommand {
    fn command_type(&self) -> String {
        Self::COMMAND_TYPE.to_string()
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}