import type { DomainEvent } from "./domain-event";

abstract class DomainEventHandler {
  abstract handle(event: DomainEvent): Promise<void>;
  abstract get subscriptions(): string[];
}

export { DomainEventHandler };