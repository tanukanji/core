import type { Command } from "./command";
import type { CommandHandler } from "./command-handler";
import type { CommandHandlerResponse } from "./command-handler-responde";

interface CommandBus {
  dispatch(command: Command): Promise<CommandHandlerResponse>;
  subscribe(commandType: string, handler: CommandHandler): void;
}

export type { CommandBus };
