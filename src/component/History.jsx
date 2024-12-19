import React from 'react';
import HistoryContent from './HistoryContent';
import HistoryTime from './HistoryTime';
import { DateTime } from 'luxon';
import { users } from '../../data';
import '../style/History.css';

function History() {
  const groupByDate = () => {
    const grouped = {};

    users.forEach((item) => {
      item.prompt.content.forEach((content) => {
        const date = DateTime.fromISO(content.time).toISODate(); // Get only the date part
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(content);
      });
    });

    return grouped;
  };

  const groupedData = groupByDate();

  const renderHistory = () => {
    const now = DateTime.now();

    return Object.entries(groupedData).map(([date, contents]) => {
      const difference = Math.floor(Math.abs(now.diff(DateTime.fromISO(date), 'days').days));
      const displayDate = difference === 0 ? 'Recent' : `Previous ${difference} Day${difference > 1 ? 's' : ''} Ago`;

      return (
        <div key={date} className="history-group">
          <HistoryTime time={displayDate} />
          {contents.map((content, index) => (
            <HistoryContent key={index} content={content.text} />
          ))}
        </div>
      );
    });
  };

  return <div className="prompt-history">{renderHistory()}</div>;
}

export default History;
