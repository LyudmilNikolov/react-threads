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
  const parsedDate = new Date(dateString.replace(' ', 'T') + 'Z');

  if (isNaN(parsedDate.getTime())) {
    return 'Invalid Date';
  }

  const day = parsedDate.getUTCDate();
  const suffix =
    day > 3 && day < 21
      ? 'th'
      : day % 10 === 1
      ? 'st'
      : day % 10 === 2
      ? 'nd'
      : day % 10 === 3
      ? 'rd'
      : 'th';

  const month = parsedDate.toLocaleString('default', { month: 'short' });

  return `${month} ${day}${suffix}`;
};
