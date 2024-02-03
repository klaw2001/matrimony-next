import AccordianLayout from "@/components/layouts/AccordianLayout";
import Layout from "@/components/layouts/Layout";
import React from "react";
import { Accordion } from "react-bootstrap";

const faq = () => {
  return (
    <Layout>
      <section className="p-3">
        <div className="login pg-matrimony">
          <div className="container">
            <div className="row">
              <div className="inn ab-matrimony-lhs p-5">
                <div className="form-tit">
                  <h4>How It Works</h4>
                  <h1>Find Your Perfect Match</h1>
                </div>
                <AccordianLayout/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default faq;
