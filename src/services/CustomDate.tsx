import React from 'react';

interface CustomDateProps {
    date: string;
}

const CustomDate: React.FC<CustomDateProps> = ({ date }) => {
    const parsedDate = new Date(date.replace(' ', 'T') + 'Z');
    let day = parsedDate.getUTCDate();
    let suffix = '';

    if (day > 3 && day < 21) {
        suffix = 'th';
    } else {
        switch (day % 10) {
            case 1:  suffix = "st"; break;
            case 2:  suffix = "nd"; break;
            case 3:  suffix = "rd"; break;
            default: suffix = "th";
        }
    }

    const month = parsedDate.toLocaleString('default', { month: 'short' });

    return <span>{`${month} ${day}${suffix}`}</span>;
}

export default CustomDate;