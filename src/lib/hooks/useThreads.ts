import { useQuery } from 'react-query';
import { getThreads } from '../../services/threads';
import { Thread, CustomError } from '../../@types';

const useThreads = () => {
  return useQuery<Thread[][], CustomError>('threads', getThreads);
};

export default useThreads;