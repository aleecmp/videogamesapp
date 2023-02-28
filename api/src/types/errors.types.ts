interface IError {
  error: unknown;
  status: number;
  message: string;
  service: string;
  type: string;
}

export { IError };
