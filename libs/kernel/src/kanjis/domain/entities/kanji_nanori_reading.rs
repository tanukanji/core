use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiNanoriReading {
    value: String,
}

impl KanjiNanoriReading {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiNanoriReading {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiNanoriReading {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiNanoriReading {}

impl Hash for KanjiNanoriReading {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
