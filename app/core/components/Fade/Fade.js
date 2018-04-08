import React from 'react'
import { Transition } from 'react-transition-group'

const Fade = ({
  appear = false,
  children,
  duration = 300,
  in: inProp,
  onExited,
}) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
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

export default Fade
