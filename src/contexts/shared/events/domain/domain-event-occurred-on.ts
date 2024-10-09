
class DomainEventOccurredOn {

  constructor(private readonly value: string) {}

  public getValue(): string {
    return this.value;
  }
}

export { DomainEventOccurredOn };