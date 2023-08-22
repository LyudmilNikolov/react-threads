import { FC, useMemo } from 'react';
import CustomDate from './CustomDate';
import { Thread } from '../@types';

interface Props {
  thread: Thread;
  index: number;
  showTotalMessages: boolean;
  isSelected: boolean;
  toggleShowDetails: (thread: Thread) => void;
  threadCount: number;
}

const ThreadComponent: FC<Props> = ({
  thread,
  index,
  showTotalMessages,
  isSelected,
  toggleShowDetails,
  threadCount,
}) => {
  
  const isCompressedCard = (index: number) => {
    return index > 0 && showTotalMessages;
  };

  const getTransformStyle = (index: number, isSelected: boolean) => {
    if (isSelected) {
      return { transform: 'none' };
    }
    if (index > 0 && showTotalMessages) {
      const yOffset = 190 * index;
      const translateX = index <= 1 ? 10 : 10 + (index * 5);
      const translateY = index <= 1 ? yOffset : yOffset - 200;
      return { transform: `translate3d(${translateX}px, -${translateY}px, -${100 * index}px)`, height: '170px' };
    }
    return { transform: 'none' };
  };

  const transformStyle = useMemo(() => getTransformStyle(index, isSelected), [index, isSelected]);

  const getZIndex = (index: number) => {
    if (index > 0 && showTotalMessages) {
      return 2 - index;
    } else {
      return 2 + index;
    }
  };

  return (
    <div 
        className={`thread-box card ${isCompressedCard(index) ? 'compressed' : 'normal-view'} ${isSelected ? 'expanded' : ''}`}
        style={{ 
            ...transformStyle,
            zIndex: getZIndex(index)
        }}
        onClick={() => toggleShowDetails(thread)}
    >
        <div className="row">
            <h3 className="subject" style={{ color: thread.score >= 6 ? '#9335ff' : '#e89d40' }}>
                {thread.subject}
            </h3>
            <p className="team">{thread.team}</p>
        </div>
        <div className="row">
            <p className="question">{thread.question}</p>
            <p className="created-at">
                <CustomDate date={thread.created_at} />
            </p>
        </div>
        <h4 className="text-entry">{thread.text}</h4>
        {showTotalMessages && threadCount > 1 && !isSelected && 
            <div className="total-messages" 
                style={{ backgroundColor: thread.score >= 6 ? '#21aae1' : '#e89d40' }}>
                {threadCount} messages
            </div>
        }
    </div>
  );
};

export default ThreadComponent;