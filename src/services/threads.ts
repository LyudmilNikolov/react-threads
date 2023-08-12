import axios from 'axios';
import { getErrorMessage } from '../lib/utils';

const jsonURL = '/data.json';

export const getThreads = async () => {
  try {
    const response = await axios.get(jsonURL);
    return response.data['threads'];
  } catch (err) {
    throw new Error(getErrorMessage(err));
  }
};
