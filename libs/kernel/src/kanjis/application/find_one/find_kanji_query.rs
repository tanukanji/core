use std::any::Any;

use cqrs::domain::query::Query;


pub struct FindKanjiQuery {
    pub ideogram: String,
}

impl FindKanjiQuery {

    pub const QUERY_TYPE: &'static str = "FindKanjiQuery";

    pub fn new(ideogram: String) -> Self {
        Self { ideogram }
    }
}

impl Query for FindKanjiQuery {
    fn get_type(&self) -> String {
        Self::QUERY_TYPE.to_string()
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}