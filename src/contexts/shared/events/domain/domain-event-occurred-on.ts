
class DomainEventOccurredOn {

  constructor(private readonly value: string) {}

  public getValue(): string {
    return this.value;
  }

  static now(): DomainEventOccurredOn {
    return new DomainEventOccurredOn(new Date().toISOString());
  }
}

export { DomainEventOccurredOn };