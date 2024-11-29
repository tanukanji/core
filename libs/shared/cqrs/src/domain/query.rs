
pub trait Query {
    fn get_type(&self) -> String;
    fn as_any(&self) -> &dyn std::any::Any;
}