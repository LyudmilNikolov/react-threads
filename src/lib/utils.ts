import { format, parseISO } from 'date-fns';

export const getErrorMessage = (error: any): string => {
  // error object from RTK Query
  if (error.data && typeof error.data.message === 'string') {
    return error.data.message;
  }

  // error object from other sources
  if (error.message) {
    return error.message;
  }

  if (error.error) {
    return error.error;
  }

  return 'An unknown error occurred';
};

export const getFormattedDate = (dateString: string): string => {
  try {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, 'MMM do');
  } catch (error) {
    return 'Invalid Date';
  }
};