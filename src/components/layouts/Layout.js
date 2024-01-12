import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "@/app/globals.css";
import "@/app/mystyle.css";
import PreLoader from "../PreLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<PreLoader />}>
        <main>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
