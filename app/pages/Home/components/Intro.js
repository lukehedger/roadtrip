import React from 'react'
import { Button, Image, Position, Section } from 'jaak-primitives'
import { BodyText, IntroPosition } from 'core/primitives'

const Intro = ({ onCloseClick }) => (
  <IntroPosition
    left="50%"
    position="absolute"
    size={['500px', '320px']}
    style={{ boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)' }}
    top="50%"
    transform="translate(-50%, -50%)"
  >
    <Section backgroundColor="ltyellow" padding={['16px']} size={['100%']}>
      <Position position="absolute" top="8px" right="8px">
        <Button backgroundColor="transparent" onClick={() => onCloseClick()}>
          X
        </Button>
      </Position>

      <Image
        backgroundColor="yellow"
        backgroundPosition="center"
        backgroundSize="80%"
        borderRadius="50%"
        margin={[0, 'auto', '14px']}
        size={['100px']}
        src="/img/car_orange.svg"
      />

      <Section maxHeight="330px" size={['100%']} style={{ overflow: 'scroll' }}>
        <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
          For our honeymoon we&apos;re planning a roadtrip through California;
          starting in Napa Valley, driving through Yosemite, Monterey, Santa
          Barbara and LA before finishing up in San Francisco.
        </BodyText>

        <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
          There are lots of things we&apos;d love to do so if you&apos;d like to
          buy us a wedding gift please contribute towards anything that catches
          your eye.
        </BodyText>

        <BodyText lineHeight="1.2" margin={[0, 0, '16px']}>
          You can send your contribution to us directly - just click the
          &apos;Contribute&apos; button and you&apos;ll be taken to a payment
          page.
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
    </Section>
  </IntroPosition>
)

export default Intro
