'use client';

import { useState, useEffect } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata', // Change this to your timezone
        hour12: true,
      };
      const timeString = now.toLocaleTimeString('en-US', options);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-muted">
      {time} <span className="ml-1">IST</span>
    </div>
  );
}
