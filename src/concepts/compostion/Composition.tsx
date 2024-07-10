import React from 'react'
import { Alert } from './utils/Alert'
import { Modal } from './utils/Modal';
import { Button, Card } from './utils/Card';

const Composition = () => {
  return (
    <>
      <div>
        <Alert status="error">
          <Alert.Title>Alert</Alert.Title>
          <Alert.Description>Your browser is outdated.</Alert.Description>
        </Alert>
      </div>
      <div>
        <Modal>
          <Modal.CancelAction>
            <a className="" href="url">Cancel</a>
          </Modal.CancelAction>
          <Modal.SaveAction>
            <a className="" href="url">Save</a>
          </Modal.SaveAction>
        </Modal>
      </div>
      <div>
        <Card>
          <Card.Img src="" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Hello</Card.Text>
            <Button variant="primary"></Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Composition;

