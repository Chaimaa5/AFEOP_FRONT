import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tooltip} from "@nextui-org/react";
import { ReactSVG } from "react-svg";
import dashborad from "../../../assets/icons/grid.svg";
import mapIcn from "../../../assets/icons/map.svg";
import settings from "../../../assets/icons/settings.svg";
import stations from "../../../assets/icons/stations.svg";
import chart from "../../../assets/icons/chart.svg";
import guide from "../../../assets/icons/guide.svg";
import logo from "../../../assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTooltip } from "../../../store/features/home";
// import './index.scss';
interface BarItems {
    icon: string;
    info: string;
  }
export default function TopBar() {


  const activeTooltip = useSelector((state: any) => state.home.activeTooltip);
  const dispatch = useDispatch();

    const barItems: BarItems[] = [
        {
          icon: dashborad,
          info: 'Dashboard',
        },
        {
          icon: mapIcn,
          info: 'Map',
        },
        // {
        //     icon: stations,
        //     info: 'Stations',
        //   },
          {
            icon: chart,
            info: 'Scientific Applications',
          },
          {
            icon: guide,
            info: 'Guide',
          },
      ];
      const navigate = useNavigate(); 

      const handleRedirect = () => {
        navigate('/stations'); 
      };
    
  return (
    <div className="flex flex-col h-[300px] w-[60px] justify-between items-center bg-bg top-0  rounded-b-full py-8" style={{margin: "0px"}}>
    {/* <img src={logo}></img> */}
      {barItems.map((item) => (
        <Tooltip key={item.info} showArrow content={item.info} placement="left-start"  className="flex flex-col justify-center items-center" >
          <Button
            isIconOnly
            className={`flex justify-center items-center self-center bg-transparent  w-[48px] h-[48px] ${
              activeTooltip === item.info ? 'bg-darkgreen ' : 'bg-bg'
          }`}
            onClick={() => {
              // dispatch(setActiveTooltip(item.info));

              switch (item.info) {
                case 'Dashboard':
                    dispatch(setActiveTooltip(item.info));
                    handleRedirect();
                    break;
                case 'Stations':
                  dispatch(setActiveTooltip(item.info));
                    navigate('/station'); 
                    break;
                case 'Map':
                  dispatch(setActiveTooltip(item.info));

                  navigate('/app'); 
                  break;
                case 'Scientific Applications':
                  console.log(item.info);
                  dispatch(setActiveTooltip(item.info));
                  navigate('/'); 
                  break;
                case 'Settings':
                  navigate('/settings'); 
                  break;
                  case 'Guide':
                    navigate('/guide'); 
                    break;
                default:
                  break;
              }
            }}
          >
            <ReactSVG src={item.icon} className={`flex justify-center items-center w-[90%] ${
                                activeTooltip === item.info ? ' fill-white w-[60%] stroke-white' : 'fill-darkgreen  stroke-darkgreen'
                            }`}/>
          </Button>
        </Tooltip>
))}
    </div>
  );
}
