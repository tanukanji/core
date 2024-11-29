use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiStrokesNumber {
    value: String,
}

impl KanjiStrokesNumber {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiStrokesNumber {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiStrokesNumber {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiStrokesNumber {}

impl Hash for KanjiStrokesNumber {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
