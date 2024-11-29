use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiMeaning {
    value: String,
}

impl KanjiMeaning {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiMeaning {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiMeaning {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiMeaning {}

impl Hash for KanjiMeaning {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
