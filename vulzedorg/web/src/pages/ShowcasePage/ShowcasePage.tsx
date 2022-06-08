import {Link, routes} from '@redwoodjs/router'
import {MetaTags,} from '@redwoodjs/web'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './showcase.scss'

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`"text" "number"`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

export default function ShowcasePage() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className="container" ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  )
}
