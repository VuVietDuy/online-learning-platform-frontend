import React from 'react';
import { Calendar } from 'antd';


const CalendarPage = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return <Calendar style={{margin: "24px 220px"}} onPanelChange={onPanelChange} />;
};

export default CalendarPage