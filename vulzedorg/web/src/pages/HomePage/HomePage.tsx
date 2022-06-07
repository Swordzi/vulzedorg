import { Link, routes } from '@redwoodjs/router'
import { MetaTags, } from '@redwoodjs/web'
import { Button } from '@mantine/core';


import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='Home'>
      <MetaTags title="Home" description="Home page" />
      <Button className='Hello'>Hello there</Button>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
        <Link to={routes.calendar()}>Calendar</Link>`
      </p>
    </div>
  )
}

export default HomePage
