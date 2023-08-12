import { useState } from 'react';
import ThreadComponent from './components/Thread';
import './App.scss';
import { Thread } from './@types';
import useThreads from './lib/hooks/useThreads';

const App = () => {
  const [selectedThreads, setSelectedThreads] = useState<Thread[]>([]);

  const { data: threadGroups = [], isLoading, error } = useThreads();

  const toggleShowDetails = (thread: Thread) => {
    if (selectedThreads.includes(thread)) {
      setSelectedThreads([]); 
    } else {
      const currentGroup = threadGroups.find(group => group.includes(thread));
      if (currentGroup) {
        setSelectedThreads(currentGroup);
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading threads</p>;

  return (
    <div className='outer-container'>
      <div className='container'>
        {threadGroups.map((threads, groupIndex) => (
          <div
            key={groupIndex}
            className={`thread-wrapper ${
              threads.length === 1 ? 'single-thread' : 'multiple-threads'
            }`} 
          >
            {threads.map((thread, index) => (
              <ThreadComponent
                key={index}
                thread={thread}
                index={index}
                showTotalMessages={threads.length > 1}
                isSelected={selectedThreads.includes(thread)}
                toggleShowDetails={toggleShowDetails}
                threadCount={threads.length}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;