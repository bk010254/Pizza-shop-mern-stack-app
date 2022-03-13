import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
          lorem ipsum dolor sit amet consecture, adipisicing elit.Nisi events
          unde vel dignissins. Cum minima isrt
        </p>
        <h1>Our Speciality</h1>

        <Row>
          <Col md={6}>
            <p>
              <h1>What are two interesting facts about pizza?</h1>
              Image result for pizza speciality 36 Amazing Facts You Didn't Know
              About Pizza The United States eats 350 slices of pizza every
              second. ... The most expensive pizza in the world costs $12,000.
              ... Breakfast Pizza, 36% of Americans believe that pizza is a
              breakfast meal. ... The most popular pizza topping is pepperoni.
              ... World's Biggest Pizza.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Varieties Name Characteristic ingredients Origin Hawaiian pizza
              Pineapple, ham or bacon Canada Pizza Margherita Tomatoes,
              mozzarella, basil Naples, Italy Pizza marinara Tomato sauce, olive
              oil, oregano, garlic. No cheese. Naples, Italy Pizza pugliese
              Tomato, onion, mozzarella Apulia, Italy
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={3}>
            A romantic dinner, a family reuinon or a gathering of friends.
            Traditional dishes or exotic flavours. Veggetarian guests, with
            intolerances or allergics. Every single private chef experience is
            unique! 
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
