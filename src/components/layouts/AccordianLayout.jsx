"use client"
import React from "react";
import { Accordion } from "react-bootstrap";

const AccordianLayout = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          How does our Matrimonial website work?
        </Accordion.Header>
        <Accordion.Body>
          Discover the magic of finding your life partner on our Matrimonial
          website. Our platform utilizes advanced matchmaking algorithms to help
          you connect with potential matches based on compatibility, interests,
          and values.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What sets us apart in the Matrimonial industry?
        </Accordion.Header>
        <Accordion.Body>
          Unlike others in the Matrimonial industry, we focus on providing a
          personalized experience. Our commitment to privacy and security
          ensures a safe environment for your search for a life partner.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Why choose our Matrimonial platform?
        </Accordion.Header>
        <Accordion.Body>
          Experience a seamless journey towards marital bliss. Our Matrimonial
          platform is designed to simplify the search for your soulmate,
          providing genuine profiles and meaningful connections.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordianLayout;
