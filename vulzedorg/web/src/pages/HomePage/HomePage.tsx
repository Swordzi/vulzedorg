import {Link, routes} from '@redwoodjs/router'
import {MetaTags,} from '@redwoodjs/web'
import {Group} from '@mantine/core';
import {useState} from 'react';
import { useSpring, animated } from 'react-spring'

import './HomePage.scss'



function Text() {
  const [flip, set] = useState(false)
  let config = { mass: 5, tension: 2000, friction: 200,
    molasses: undefined
  };
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 300,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.h1 style={props}>Hello there!</animated.h1>
}

const HomePage = () => {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
  return (
    <div className='Home'>
      <MetaTags title="Home" description="Home page"/>

        <Text></Text>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
          <Link to={routes.calendar()}>Calendar</Link>`
          <Link to={routes.showcase()}>Showcase</Link>`
        </p>


    </div>
  )
}

export default HomePage
