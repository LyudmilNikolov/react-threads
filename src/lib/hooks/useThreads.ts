import { useQuery } from 'react-query';
import { getThreads } from '../../services/threads';
import { Thread } from '../../@types';

const useThreads = () => {
  return useQuery('threads', async (): Promise<Thread[][]> => {
    const response = await getThreads();
    return response;
  });
};

export default useThreads;
