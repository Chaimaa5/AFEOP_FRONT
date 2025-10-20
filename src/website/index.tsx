import { useLocation } from "react-router-dom";
import React from "react";


const Contact = React.lazy(() => import("./pages/Contact"));
const TeamSinglePage = React.lazy(() => import("./pages/TeamSingle"));
const About = React.lazy(() => import("./pages/About"));
const Team = React.lazy(() => import("./pages/Team"));
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const  Applications = React.lazy(() => import("./pages/Applications"));
const  Integration = React.lazy(() => import("./pages/Integration"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Website = () => {
  const { pathname } = useLocation();
  return (
    <>
      {(pathname === '/home' ) && <Home/>}
      {(pathname === '/about' ) && <About/>}
      {(pathname === '/team') && <Team/>}
      {(pathname === '/contact' ) && <Contact/>}
      {(pathname === '/teamsingle' ) && <TeamSinglePage/>}
        {(pathname === '/products' ) && <Products/>}
        {(pathname === '/applications' ) && <Applications/>}
        {(pathname === '/integration' ) && <Integration/>}
        {(pathname === '/*' ) && <NotFound/>}

      
      {/* <Footer/> */}

    </>
  );
};

export default Website;
