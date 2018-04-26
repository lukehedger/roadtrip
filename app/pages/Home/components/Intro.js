import React from 'react'
import { Image, Section } from 'jaak-primitives'
import { BodyText, IntroPosition } from 'core/primitives'

const Intro = ({ onCloseClick }) => (
  <IntroPosition
    left="50%"
    position="absolute"
    size={['500px', '300px']}
    style={{ boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)' }}
    top="50%"
    transform="translate(-50%, -50%)"
  >
    <Section backgroundColor="ltyellow" padding={['32px']} size={['100%']}>
      <Image
        backgroundColor="yellow"
        backgroundPosition="center"
        backgroundSize="80%"
        borderRadius="50%"
        margin={[0, 'auto', '32px']}
        size={['100px']}
        src="/img/car_orange.svg"
      />

      <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
        Click on the flag markers to reveal some of the things we&apos;ll be
        doing on our Honeymoon in California.
      </BodyText>

      <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
        If you&apos;d like to buy us a wedding gift please contribute towards
        anything that catches your eye!
      </BodyText>

      <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
        You can send your contribution to us directly - just click the
        &apos;Contribute&apos; button on the gift you like and you&apos;ll be
        taken to a payment page.
      </BodyText>

      <BodyText
        color="blue"
        cursor="pointer"
        onClick={() => onCloseClick()}
        textAlign="center"
        textDecoration="underline"
      >
        Take a look at the map!
      </BodyText>
    </Section>
  </IntroPosition>
)

export default Intro
