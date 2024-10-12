import type { Command } from "../../domain/command";
import type { CommandBus } from "../../domain/command-bus";
import type { CommandHandler } from "../../domain/command-handler";
import type { CommandHandlerResponse } from "../../domain/command-handler-responde";

class InmemoryCommandBus implements CommandBus {
  private handlers: Map<string, CommandHandler> = new Map();

  async dispatch(command: Command): Promise<CommandHandlerResponse> {
    const handler = this.handlers.get(command.type);
    if (!handler) {
      throw new Error(`The command ${command.type} has no handler`);
    }
    return handler.handle(command);
  }
  
  subscribe(commandType: string, handler: CommandHandler): void {
    if (this.handlers.has(commandType)) {
      throw new Error(`The command ${commandType} already has a handler`);
    }
    this.handlers.set(commandType, handler);
  }
}

export { InmemoryCommandBus };
