

import React, { useEffect, useState, useRef } from "react";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const CalendarComponent = ({ setSelectedDates }) => {
  const [selectedDates, setSelectedDatesState] = useState([]);

  // Define the event listener function
  const handleDateSelect = (date) => {
    if (!selectedDates.includes(date)) {
        setSelectedDatesState((prevSelectedDates) => [...prevSelectedDates, date]);
        setSelectedDates(date)
    }
  };

  // Keep a reference to the event listener
  const handleDateSelectRef = useRef(handleDateSelect);

  // Remove the previous event listener before adding a new one
  useEffect(() => {
    const { current: currentListener } = handleDateSelectRef;
    document.addEventListener("dateChange", currentListener);

    return () => {
      document.removeEventListener("dateChange", currentListener);
    };
  }, []);

  // Add the new event listener
  useEffect(() => {
    const { current: currentListener } = handleDateSelectRef;
    document.addEventListener("dateChange", currentListener);

    return () => {
      document.removeEventListener("dateChange", currentListener);
    };
  }, [selectedDates]);

  // Convert selected dates to a comma-separated string
 /*  const datesAsString = selectedDates
    .map((date) => date.format("DD/MM/YYYY dddd"))
    .join(", "); */

  // Define the event handler for date changes
  const handleDatesChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <>
      <Calendar
        value={selectedDates}
        onChange={handleDatesChange}
        multiple
        format="DD/MM/YYYY dddd"
        plugins={[<DatePanel />]}
      />
    </>
  );
};

export default CalendarComponent;
