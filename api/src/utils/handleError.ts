import { IError } from '../types';

export default function handleError(
  error: any,
  status: number = 500,
  service: string = 'unknown',
  type: string = error?.name || 'default error',
  message: string = error?.message || 'default error message'
): IError {
  const err: IError = {
    error: error.toString(),
    service,
    type,
    message,
    status,
  };
  console.log(error);
  return err;
}
