import { useLocation } from "react-router-dom";
import "./index.scss";
import { lazy, useMemo } from "react";

import Rasters from "./rasters";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TopBar from "./components/topbar";
import PixelCharts from "./components/charts";
import Task from "./tasks";
import FileUploader from "./components/upload/upload";
import Analysis from "./tasks/analysis";


const Sidebar = lazy(() => import("./sidebar"));
const Charts = lazy(() => import("./components/charts"));


const Map = lazy(() => import("./map"));
const Application = () => {
  const { pathname } = useLocation();
  const addRaster = useSelector((state:RootState) => state.raster.addRaster);
  const addChart = useSelector((state:RootState) => state.analysis.addChart);
  const rasterBar = useSelector((state:RootState) => state.raster.rasterBar);
  const compare = useSelector((state: RootState) => state.map.compare)
  const sidebar = useSelector((state: RootState) => state.raster.sidebar)

  const className = useMemo(() => {
    return `flex flex-col absolute bottom-0 z-10 w-[71%] h-[25%] justify-start items-start p-4 rounded-3xl gap-4 ${
      addRaster ? 'left-0' : 'left-[15%]'
    }`;
  }, [addRaster]);
  return (
    <>

      {(pathname === '/app') && (
        //   <motion.div
        //   initial="initial"
        //   animate="in"
        //   exit="out"
        //   variants={pageVariants}
        //   transition={pageTransition}
        // >
        <div className="flex flex-col h-[100%] w-[100%] ">
          <Map></Map>
          <div className="flex absolute top-0 left-0 h-[50%]   z-40 pl-4 ">
            <TopBar></TopBar>
        
          </div>
          {
            addRaster &&   (
          <div className={` ${sidebar ? ' h-full top-0 right-0 self-end' : ' w-[100px] h-[100px] bottom-0 right-0 '}flex items-center  justify-center  w-[30vw] absolute  shadow-md z-20 p-4  lg:block md:block sm:hidden`}>
            <Task></Task>
          </div>
          )}
          <div className={` ${sidebar ? 'flex h-[100px] top-0 right-[32.5rem] self-end items-center  justify-center  w-[45vw] absolute   z-20 p-4  lg:block md:block sm:hidden' : ' hidden w-0 h-0 '} `}>

          <Analysis/>
          </div>
               {
            rasterBar && (
           <div className={className}>
           <Rasters></Rasters>
           </div>
        
            )
           }
           {/* {
            addChart && (
          <div className="flex items-center  justify-center  w-[45vw] absolute top-0 right-0 h-full shadow-md z-20 p-4  lg:block md:block sm:hidden">

            <PixelCharts></PixelCharts>

          </div>
        
            )
           } */}
         
         

        





        </div>
        // </motion.div>

      )
      }

    </>
  );
};

export default Application;
