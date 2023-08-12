import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getErrorMessage } from '../lib/utils';

interface QueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (err: any) => {
        err.message = getErrorMessage(err);
      },
    },
  },
});

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;