import type { DomainEvent } from "../../domain/domain-event";
import type { DomainEventHandler } from "../../domain/domain-event-handler";
import type { EventBus } from "../../domain/event-bus";

class InmemoryEventBus implements EventBus {
  private readonly listeners: Map<string, DomainEventHandler[]> = new Map();

  async publish(event: DomainEvent): Promise<void> {
    const handlers = this.listeners.get(event.type);
    if (!handlers) {
      return;
    }
    handlers.forEach((handler) => handler.handle(event));
  }

  subscribe(eventType: string, handler: DomainEventHandler): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)?.push(handler);
  }
}

export { InmemoryEventBus };