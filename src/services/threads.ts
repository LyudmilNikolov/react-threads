import axios from 'axios';
import { getErrorMessage } from '../lib/utils';
import { Thread } from '../@types';

const jsonURL = '/data.json';

export const getThreads = async (): Promise<Thread[][]> => {
  try {
    const response = await axios.get(jsonURL);
    return response.data['threads'];
  } catch (err) {
    throw new Error(getErrorMessage(err));
  }
};