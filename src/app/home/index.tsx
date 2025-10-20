import { useLocation } from "react-router-dom";
import { lazy, useMemo } from "react";

import { useSelector } from "react-redux";
import TopBar from "../components/topbar";
import HomeCard from "./card";




const Sidebar = lazy(() => import("../sidebar"));
const Charts = lazy(() => import("../components/charts"));

const Map = lazy(() => import("../map"));
const YieldPredictions = () => {
  const { pathname } = useLocation();



  return (
    <>

      {(pathname === '/') && (
        <div className="flex flex-col h-[100%] w-[100%] bg-[#EAF2FF] items-center justify-center">
        <HomeCard></HomeCard>
          <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
            <TopBar></TopBar>
          </div>
       
        
         

        





        </div>

      )
      }

    </>
  );
};

export default YieldPredictions;
