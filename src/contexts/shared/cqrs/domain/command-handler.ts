import type { Command } from "./command";
import type { CommandHandlerResponse } from "./command-handler-responde";

interface CommandHandler<TCommand extends Command> {

    handle(command: TCommand): Promise<CommandHandlerResponse>;

    get type(): string;

}

export type { CommandHandler };
