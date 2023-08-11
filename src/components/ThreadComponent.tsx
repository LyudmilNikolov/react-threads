import React from 'react';
import CustomDate from '../services/CustomDate';
import { motion } from "framer-motion";

interface ThreadProps {
    thread: Thread;
    index: number;
    showTotalMessages: boolean;
    isSelected: boolean;
    toggleShowDetails: (thread: Thread) => void;
    threadCount: number;
}

const ThreadComponent: React.FC<ThreadProps> = ({ thread, index, showTotalMessages, isSelected, toggleShowDetails, threadCount }) => {
    
    /*const getTransformStyle = (index: number) => {
        if (index > 0 && showTotalMessages) {
            const yOffset = 190 * index;
            const translateX = index <= 1 ? 10 : 10 + (index * 5);
            const translateY = index <= 1 ? yOffset : yOffset - 200;
            return { transform: `translate3d(${translateX}px, -${translateY}px, -${100 * index}px)` };
        }
        return { transform: 'none' };
    }

    const getZIndex = (index: number) => {
        if (index > 0 && showTotalMessages) {
            return 2 - index;
        } else {
            return 2 + index;
        }
    };


    return (
        <div 
            className={`thread-box card ${getCardClass(index) ? 'compressed' : 'normal-view'}`}
            style={{ 
                ...getTransformStyle(index),
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
            {showTotalMessages && threadCount > 1 && 
                <div className="total-messages" 
                    style={{ backgroundColor: thread.score >= 6 ? '#21aae1' : '#e89d40' }}>
                    {threadCount} messages
                </div>
            }
        </div>
    );*/

    const getTransformStyle = (index: number) => {
        if (index > 0) {
            const yOffset = isSelected ? 0 : 190 * index;
            const translateX = index === 1 ? 0 : 60 + (index * 10);
            const translateY = index <= 1 ? yOffset : yOffset - 200;
            return {
                x: translateX,
                y: -translateY, 
                z: -100 * index 
            };
        }
        return {};
    };
    

    const animateProps = getTransformStyle(index);

    const getCardClass = (index: number) => {
        return index > 0 && showTotalMessages;
    }

    const getZIndex = (index: number) => {
        if (index > 0 && showTotalMessages) {
            return 2 - index;
        } else {
            return 2 + index;
        }
    };

    const zIndex = getZIndex(index);


    return (
        <motion.div 
            className={`thread-box card ${getCardClass(index) ? 'compressed' : 'normal-view'}`}
            initial={{ opacity: 0, zIndex }}
            animate={{ ...animateProps, opacity: 1, zIndex }}
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
            {!isSelected && threadCount > 1 && 
                <div className="total-messages" 
                    style={{ backgroundColor: thread.score >= 6 ? '#21aae1' : '#e89d40' }}>
                    {threadCount} messages
                </div>
            }
        </motion.div>
    );
}

export default ThreadComponent;