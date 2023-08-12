import { FC } from 'react';
import { getFormattedDate } from '../lib/utils';

interface Props {
  date: string;
}

const CustomDate: FC<Props> = ({ date }) => {
  const formattedDate = getFormattedDate(date);

  return <span>{formattedDate}</span>;
};

export default CustomDate;
