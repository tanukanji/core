use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiOnyomiReading {
    value: String,
}

impl KanjiOnyomiReading {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiOnyomiReading {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiOnyomiReading {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiOnyomiReading {}

impl Hash for KanjiOnyomiReading {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
