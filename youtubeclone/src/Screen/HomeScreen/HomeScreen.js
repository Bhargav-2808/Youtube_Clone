import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import './HomeScreen.scss'

import { Videopart } from "../../Components/VideoPart/Videopart"


const HomeScreen = () => {
   return (
      <Container className="homeScreen">
         
         <Row>
            {[...new Array(20)].map(() => (
               <Col lg={3} md={4}>
                  <Videopart/>
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default HomeScreen