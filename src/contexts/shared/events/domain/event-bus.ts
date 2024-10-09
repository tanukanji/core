import type { DomainEvent } from "./domain-event";
import type { DomainEventHandler } from "./domain-event-handler";

interface EventBus {
    publish(event: DomainEvent): Promise<void>;
    subscribe(eventType: string, handler: DomainEventHandler): void;
}

export type { EventBus };