import React from 'react'
import { Transition } from 'react-transition-group'

const Slide = ({
  appear = false,
  children,
  duration = 300,
  in: inProp,
  onExited,
}) => {
  const defaultStyle = {
    opacity: 0,
    transition: `transform ${duration}ms cubic-bezier(1,0,.31,1), opacity 300ms ease-in`,
    transform: `translateX(100%)`,
  }

  const transitionStyle = {
    entering: { opacity: 0, transform: `translateX(100%)` },
    entered: { opacity: 1, transform: `translateX(0)` },
  }

  return (
    <Transition
      appear={appear}
      in={inProp}
      onExited={onExited}
      timeout={duration}
    >
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyle[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Slide
