import React from 'react'
import { Button, Image, Position, Section } from 'jaak-primitives'
import { BodyText, HeaderText, PrimaryButton } from 'core/primitives'

const Panel = ({ gift, onContributeClick, onNextClick, onPrevClick }) => (
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
        <Image
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius="50%"
          margin={[0, 'auto']}
          size={['100px']}
          src={gift.image}
        />

        <HeaderText
          fontSize={1}
          margin={['16px', 0, '48px']}
          textAlign="center"
        >
          {gift.title}
        </HeaderText>

        <BodyText lineHeight="1.3">{gift.description}</BodyText>

        <PrimaryButton
          margin={['32px', 'auto', '16px']}
          onClick={() => onContributeClick(gift._id)}
        >
          <BodyText>Contribute</BodyText>
        </PrimaryButton>

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
)

export default Panel