abstract class DomainEvent {
    abstract get type(): string;
}

export { DomainEvent };