use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiKunyomiReading {
    value: String,
}

impl KanjiKunyomiReading {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiKunyomiReading {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiKunyomiReading {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiKunyomiReading {}

impl Hash for KanjiKunyomiReading {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
