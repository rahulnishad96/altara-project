import React from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ date }) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  console.log(firstDayOfMonth, lastDayOfMonth, daysInMonth, startingDayOfWeek);

  const calendarCells = [];
  let currentDay = 1;

  for (let row = 0; row < 6; row++) {
    const week = [];

    for (let day = 0; day < 7; day++) {
      if ((row === 0 && day < startingDayOfWeek) || currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
        currentDay++;
      }
    }

    calendarCells.push(week);
    if (currentDay > daysInMonth) {
      break;
    }
  }

  return (
    <div className="calendar">
      <div className="month-year">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day">{day}</div>
        ))}
      </div>
      <div className="dates">
        {calendarCells.map((week, rowIndex) => (
          <div key={rowIndex} className="week">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className={`day ${day === null ? 'empty' : ''} ${day === date.getDate() ? 'selected' : ''}`}>
                {day !== null && day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
