import type { Command } from "./command";
import type { CommandHandlerResponse } from "./command-handler-responde";

interface CommandHandler {

    handle(command: Command): Promise<CommandHandlerResponse>;

    get type(): string;

}

export type { CommandHandler };
