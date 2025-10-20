import { useLocation } from "react-router-dom";
import { lazy, useMemo } from "react";

import { useSelector } from "react-redux";
import TopBar from "../components/topbar";
import YieldCard from "./card";




const Sidebar = lazy(() => import("../sidebar"));
const Charts = lazy(() => import("../components/charts"));

const Map = lazy(() => import("../map"));
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};
const YieldPredictions = () => {
  const { pathname } = useLocation();



  return (
 <div className="flex justify-center items-center h-[100%] w-[100%] bg-bg">
      {(pathname === '/yield') && (
          <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
        <div className="flex flex-col h-[100%] w-[100%] bg-bg-400 items-center justify-center">
          <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
            <TopBar></TopBar>
          </div>
       
        <YieldCard></YieldCard>
        </div>
        </motion.div>

      )
      }

    </div>
  );
};

export default YieldPredictions;
