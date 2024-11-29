use async_trait::async_trait;

use crate::{kanjis::domain::entities::{kanji::Kanji, kanji_ideogram::KanjiIdeogram}, shared::domain::errors::DomainError};


#[async_trait]
pub trait KanjiRepository: Send + Sync + 'static {
    async fn find_many(&self) -> Result<Vec<Kanji>, DomainError>;
    async fn find_by_ideogram(&self, ideogram: &KanjiIdeogram) -> Result<Kanji, DomainError>;
    async fn create_one(&self, kanji: &Kanji) -> Result<(), DomainError>;
    async fn update_one(&self, kanji: &Kanji) -> Result<(), DomainError>;
    async fn delete_one(&self, ideogram: &KanjiIdeogram) -> Result<(), DomainError>;
}