import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Livedaten() {
  return (
    <div className='livedaten'>
      <Row>
        <Col md="8">
            <div className='gateway-card'>
                <h2><i></i>Gateway 1 (1 von 2)<i></i></h2>
            </div>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  )
}

export default Livedaten
