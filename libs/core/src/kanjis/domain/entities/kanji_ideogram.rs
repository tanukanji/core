use crate::shared::domain::errors::DomainError;
use std::hash::{Hash, Hasher};

#[derive(Debug)]
pub struct KanjiIdeogram {
    value: String,
}

impl KanjiIdeogram {
    pub fn new(value: String) -> Result<Self, DomainError> {
        Ok(Self { value })
    }

    pub fn value(&self) -> String {
        self.value.clone()
    }
}

impl Clone for KanjiIdeogram {
    fn clone(&self) -> Self {
        Self::new(self.value.clone()).unwrap()
    }
}

impl PartialEq for KanjiIdeogram {
    fn eq(&self, other: &Self) -> bool {
        self.value() == other.value()
    }
}

impl Eq for KanjiIdeogram {}

impl Hash for KanjiIdeogram {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.value.hash(state);
    }
}
