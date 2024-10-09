import { v4 as uuid } from 'uuid';

class DomainEventId {
  constructor(
    private readonly id: string
) {}

    static random(): DomainEventId {
        return new DomainEventId(uuid());
    }
}

export { DomainEventId };