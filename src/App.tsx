import React, { useState, useEffect } from 'react';
import { getThreads } from './services/ThreadService';
import ThreadComponent from './components/ThreadComponent';
import './App.scss';

const App: React.FC = () => {
    const [threadGroups, setThreadGroups] = useState<Thread[][]>([]);
    const [selectedThread, setSelectedThread] = useState<Thread | null>(null);

    useEffect(() => {
        const fetchThreads = async () => {
            const data = await getThreads();
            setThreadGroups(data); 
        }
        fetchThreads();
    }, []);

    const toggleShowDetails = (thread: Thread) => {
      if (thread === selectedThread) {
        setSelectedThread(null);
      } else {
        setSelectedThread(thread);
      }
    };

    return (
      <div className='outer-container'>
        <div className="container">
            {threadGroups.map((threads, groupIndex) => (
                <div key={groupIndex} className={`thread-wrapper ${threads.length === 1 ? 'single-thread' : 'multiple-threads'}`}>
                    {threads.map((thread, index) => (
                        <ThreadComponent 
                            key={index}
                            thread={thread}
                            index={index}
                            isSelected={thread === selectedThread}
                            toggleShowDetails={toggleShowDetails}
                            threadCount={threads.length}
                        />
                    ))}
                </div>
            ))}
        </div>
      </div>
    );
}  

export default App;
