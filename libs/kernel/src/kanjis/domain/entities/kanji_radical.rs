use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiRadical {
    value: String,
}

impl KanjiRadical {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiRadical {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiRadical {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiRadical {}

impl Hash for KanjiRadical {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
