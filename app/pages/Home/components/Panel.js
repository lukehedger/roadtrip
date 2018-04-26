import React, { Fragment } from 'react'
import { Button, Position, Section } from 'jaak-primitives'
import Swipeable from 'react-swipeable'

import {
  BodyText,
  GiftHeaderText,
  GiftImage,
  PrimaryButton,
} from 'core/primitives'

const Panel = ({
  gift,
  isSelectedGiftGifted,
  onContributeClick,
  onNextClick,
  onPrevClick,
}) => (
  <Swipeable
    onSwipedLeft={() => onNextClick(gift.order)}
    onSwipedRight={() => onPrevClick(gift.order)}
  >
    <Section
      backgroundColor="ltyellow"
      margin={['62px', 0, 0]}
      padding={['32px']}
      size={['100vh', '100%']}
      style={{
        boxShadow: '-4px 0 20px 0 rgba(0, 0, 0, 0.2)',
        pointerEvents: 'auto',
      }}
    >
      {gift && (
        <Position position="relative" size={['100%', 'auto']}>
          <GiftImage
            backgroundPosition="center"
            backgroundSize="cover"
            borderRadius="50%"
            margin={[0, 'auto']}
            size={['150px']}
            src={`/img/gifts/${gift.image}`}
          />

          <GiftHeaderText
            fontSize={1}
            margin={['16px', 0, '48px']}
            textAlign="center"
          >
            {gift.title}
          </GiftHeaderText>

          <BodyText
            lineHeight="1.3"
            style={{
              maxHeight: '100px',
              minHeight: '100px',
              overflow: 'scroll',
            }}
          >
            {gift.description}
          </BodyText>

          {!isSelectedGiftGifted && (
            <Fragment>
              <BodyText color="orange" margin={['16px', 0, 0]}>
                Total Cost: £{gift.value}
              </BodyText>

              <PrimaryButton
                margin={['32px', 'auto', '16px']}
                onClick={() => onContributeClick()}
              >
                <BodyText>Contribute</BodyText>
              </PrimaryButton>
            </Fragment>
          )}

          {isSelectedGiftGifted && (
            <BodyText color="pink" margin={['32px', 0, 0]} textAlign="center">
              Thanks for contributing to this gift!
            </BodyText>
          )}

          <Position position="absolute" bottom="62px" left={0}>
            <Button
              backgroundColor="transparent"
              padding={['8px']}
              onClick={() => onPrevClick(gift.order)}
            >
              <BodyText>&larr; Prev</BodyText>
            </Button>
          </Position>

          <Position position="absolute" bottom="62px" right={0}>
            <Button
              backgroundColor="transparent"
              padding={['8px']}
              onClick={() => onNextClick(gift.order)}
            >
              <BodyText>Next &rarr;</BodyText>
            </Button>
          </Position>
        </Position>
      )}
    </Section>
  </Swipeable>
)

export default Panel
