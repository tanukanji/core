import { DomainError } from "./DomainError";

class UnknownError extends DomainError {
  constructor(msg: string = "An unknown error occurred") {
    super(msg);
  }
}

export { UnknownError };