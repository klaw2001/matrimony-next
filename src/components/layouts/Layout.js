import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '@/app/globals.css';
import '@/app/mystyle.css'
import MobileMenu from "./MobileMenu";
// You can also use <link> for styles
// ..

const Layout = ({ children }) => {
 
  return (
    <>
      <Header />
      <main>
        
        {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
