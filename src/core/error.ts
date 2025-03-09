export class BlockRadarError extends Error {
  statusCode: number;
  error: string;

  constructor(
    message: string,
    statusCode: number = 500,
    error: string = "Internal Server Error"
  ) {
    super(message);
    this.name = "BlockRadarError";
    this.statusCode = statusCode;
    this.error = error;
    Error.captureStackTrace(this, this.constructor);
  }
}
