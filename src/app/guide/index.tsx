import { useLocation } from "react-router-dom";
import { lazy, useMemo } from "react";

import { useSelector } from "react-redux";
import TopBar from "../components/topbar";
import GuideCard from "./card";

import "./index.css";




const Map = lazy(() => import("../map"));
const Guide = () => {
  const { pathname } = useLocation();



  return (
 <div className="flex justify-center items-center h-[100%] w-[100%] bg-bg">
      {(pathname === '/guide') && (
        <GuideCard></GuideCard>
         
       
        
         

        






      )
      }

    </div>
  );
};

export default Guide;
