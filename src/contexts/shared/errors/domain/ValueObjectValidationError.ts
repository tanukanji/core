import { DomainError } from "./DomainError";

class ValueObjectValidationError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export { ValueObjectValidationError };