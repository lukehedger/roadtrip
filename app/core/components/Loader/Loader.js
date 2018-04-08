import React from 'react'
import { Box } from 'jaak-primitives'
import { Car, Road, Sun } from 'core/primitives'

const Loader = () => (
  <Box align="middle" backgroundColor="yellow" size={['100vh', 'auto']}>
    <Road
      borderColor="grey"
      borderStyle="solid"
      borderWidth={[0, 0, '1px']}
      margin={[0, 'auto']}
      size={['65px', '140px']}
    >
      <Car
        backgroundSize="cover"
        margin={[0, 'auto']}
        size={['35px', '120px']}
        src="./img/car.svg"
      />

      <Sun size={['20px']} />
    </Road>
  </Box>
)

export default Loader
