import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="App">
      <h1>Date Picker</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>Selected Date: {selectedDate}</p>
      { selectedDate && <Calendar date={new Date(selectedDate)}/>}
    </div>
  );
}

export default App;
