import {Link, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import {Calendar, RangeCalendar} from '@mantine/dates';
import {useState} from 'react';
import './CalendarPage.scss';

function CalendarPage() {

  const [value, setValue] = useState(null);
  return (
  <div className="CalPage">
  <Calendar value={value} onChange={setValue}/>;
    <Link to={routes.home()}>Home</Link>`
    <Link to={routes.calendar()}>Calendar</Link>`
  </div>
  );
}

export default CalendarPage
