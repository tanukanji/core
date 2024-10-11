import type { Command } from "./command";

interface CommandHandler<TCommand extends Command> {

    handle(command: TCommand): Promise<void>;

    get type(): string;

}
