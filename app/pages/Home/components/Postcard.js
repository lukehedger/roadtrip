import React from 'react'
import { Image, Input, Position, Section } from 'jaak-primitives'

import {
  BodyText,
  Box,
  HeaderText,
  PrimaryButton,
  Textarea,
} from 'core/primitives'

// TODO: Use Recompose
const Postcard = () => (
  <Position position="absolute" size={['100%']} top={0} zIndex={4}>
    <Section
      backgroundColor="ltyellow"
      padding={['62px', 0, 0]}
      size={['100%', 'auto']}
    >
      <Position
        margin={[0, 'auto']}
        maxWidth="800px"
        position="relative"
        size={['100%']}
      >
        <Box padding={['32px', '16px']}>
          <Box>
            <Image
              backgroundSize="contain"
              size={['100px']}
              src="/img/california.svg"
            />
          </Box>

          <Box align="right">
            <Box
              align="middle"
              borderWidth={['1px']}
              flexDirection="column"
              flex="none"
              size={['100px']}
            >
              <HeaderText margin={['12px', 0, 0]} textTransform="uppercase">
                Place
              </HeaderText>
              <HeaderText margin={['12px', 0, 0]} textTransform="uppercase">
                Stamp
              </HeaderText>
              <HeaderText margin={['12px', 0, 0]} textTransform="uppercase">
                Here
              </HeaderText>
            </Box>
          </Box>
        </Box>

        <Box flexDirection="column">
          <Box align="center" borderWidth={[0, 0, '1px']} margin={[0, '16px']}>
            <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
              Gabby & Adrian
            </BodyText>
          </Box>

          <Box align="center" borderWidth={[0, 0, '1px']} margin={[0, '16px']}>
            <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
              Brighton
            </BodyText>
          </Box>

          <Box align="center" borderWidth={[0, 0, '1px']} margin={[0, '16px']}>
            <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
              England
            </BodyText>
          </Box>
        </Box>

        <Box>
          <Textarea
            backgroundColor="transparent"
            margin={['64px', '32px', '16px']}
            padding={['16px']}
            placeholder="This space for writing messages"
            size={['164px', '100%']}
            textAlign="center"
            textTransform="uppercase"
          />

          <Input
            backgroundColor="transparent"
            fontFamily="'Playfair Display SC', serif"
            margin={[0, '32px', 0]}
            padding={['16px']}
            placeholder="From"
            size={['auto', '100%']}
            textAlign="center"
            textTransform="uppercase"
          />
        </Box>

        <PrimaryButton onClick={() => console.log('TODO!')}>
          <BodyText>Post</BodyText>
        </PrimaryButton>
      </Position>
    </Section>
  </Position>
)

export default Postcard
