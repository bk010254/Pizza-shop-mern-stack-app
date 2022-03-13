import React from "react";
import { Container, Row, Col, Table,Image } from "react-bootstrap";
import { FiPhoneCall } from 'react-icons/fi';
import { ImMobile } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
          
            <h1>Welcome to the Food Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>---- Contact Details ----</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhoneCall /></td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td><ImMobile /></td>
                  <td>Call</td>
                  <td>8123234540</td>
                </tr>
                <tr>
                  <td><AiOutlineMail /></td>
                  <td>Email</td>
                  <td>balajikamble1998@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
                <Image src="images/farmhouse.jpg" style={{ width: "100%", height: "100%"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
