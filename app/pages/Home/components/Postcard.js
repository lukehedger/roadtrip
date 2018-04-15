import React from 'react'
import { Image, Input, Position, Section } from 'jaak-primitives'
import { compose, withState } from 'recompose'

import {
  BodyText,
  Box,
  HeaderText,
  PostcardBox,
  PrimaryButton,
  Textarea,
} from 'core/primitives'

const Postcard = ({
  amount,
  from,
  gift,
  message,
  onPostClick,
  setAmount,
  setFrom,
  setMessage,
}) => (
  <Position position="absolute" size={['100%']} top={0} zIndex={4}>
    <Section
      backgroundColor="ltyellow"
      padding={['62px', 0, 0]}
      size={['100%', 'auto']}
      style={{ overflow: 'scroll' }}
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

        <PostcardBox>
          <Box align="center" flexDirection="column">
            <Box
              align="center"
              borderWidth={[0, 0, '1px']}
              margin={[0, '16px']}
              maxHeight="50px"
            >
              <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
                Gabby & Adrian
              </BodyText>
            </Box>

            <Box
              align="center"
              borderWidth={[0, 0, '1px']}
              margin={[0, '16px']}
              maxHeight="50px"
            >
              <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
                Brighton
              </BodyText>
            </Box>

            <Box
              align="center"
              borderWidth={[0, 0, '1px']}
              margin={[0, '16px']}
              maxHeight="50px"
            >
              <BodyText fontSize={1} padding={['16px', '16px', '8px']}>
                England
              </BodyText>
            </Box>
          </Box>

          <Box>
            <Textarea
              backgroundColor="transparent"
              onChange={({ target: { value } }) => setMessage(value)}
              margin={['56px', '32px', '16px']}
              padding={['16px']}
              placeholder="THIS SPACE FOR WRITING MESSAGES"
              size={['164px', '100%']}
              textAlign="center"
              value={message}
            />

            <Input
              backgroundColor="transparent"
              fontFamily="'Playfair Display SC', serif"
              onChange={({ target: { value } }) => setAmount(value)}
              margin={[0, '32px', '16px']}
              padding={['16px']}
              placeholder="AMOUNT"
              size={['auto', '100%']}
              textAlign="center"
              type="number"
              value={amount}
            />

            <Input
              backgroundColor="transparent"
              fontFamily="'Playfair Display SC', serif"
              margin={[0, '32px', 0]}
              onChange={({ target: { value } }) => setFrom(value)}
              padding={['16px']}
              placeholder="FROM"
              size={['auto', '100%']}
              textAlign="center"
              value={from}
            />
          </Box>
        </PostcardBox>

        <PrimaryButton
          margin={['32px', 'auto', '62px']}
          onClick={() => onPostClick(amount, from, gift, message)}
        >
          <BodyText>Post</BodyText>
        </PrimaryButton>
      </Position>
    </Section>
  </Position>
)

const enhance = compose(
  withState('amount', 'setAmount', ''),
  withState('from', 'setFrom', ''),
  withState('message', 'setMessage', '')
)

export default enhance(Postcard)
