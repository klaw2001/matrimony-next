import ResetPassword from "@/components/ResetPassword";
import Layout from "@/components/layouts/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="reset-wrapper py-5 mx-0 mx-lg-5">
          <div className="form-tit mx-0 mx-lg-5">
            <h4>Forgot Your Password ?</h4>
            <h1>Reset It By Entering Your Email</h1>
            <ResetPassword/>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
