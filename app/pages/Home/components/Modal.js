import React from 'react'
import { Heading, List, Text } from 'jaak-primitives'
import ReactModal from 'react-modal'

const Modal = ({ isOpen, onRequestClose }) => (
  <ReactModal
    appElement={document.getElementById('Root')}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      overlay: {
        backgroundColor: 'rgba(240, 233, 216, 0.85)',
        zIndex: 99,
      },
      content: {
        border: 0,
        left: '50%',
        maxHeight: '240px',
        minWidth: '230px',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
    }}
  >
    <Heading tag="h3">For gifts over £100 please send to:</Heading>

    <List margin={['32px', 0]} textAlign="center">
      <Text>Gabrielle Elfer</Text>
      <Text>04-00-04</Text>
      <Text>35671663</Text>
    </List>

    <Text textAlign="center">Thank you so much!</Text>
  </ReactModal>
)

export default Modal
