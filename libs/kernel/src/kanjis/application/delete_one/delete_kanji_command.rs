use std::any::Any;

use cqrs::domain::command::Command;


pub struct DeleteKanjiCommand {
    pub ideogram: String,
}

impl DeleteKanjiCommand {

    pub const COMMAND_TYPE: &'static str = "DeleteKanjiCommand";

    pub fn new(ideogram: String) -> Self {
        Self { ideogram }
    }
}

impl Command for DeleteKanjiCommand {
    fn command_type(&self) -> String {
        Self::COMMAND_TYPE.to_string()
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}