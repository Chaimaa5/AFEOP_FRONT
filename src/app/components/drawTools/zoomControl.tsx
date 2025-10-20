import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Tooltip} from "@nextui-org/react";
import { ReactSVG } from "react-svg";
import plusIcn from "../../../assets/icons/plus.svg";
import minusIcn from "../../../assets/icons/minus.svg";
import { useMap } from "react-leaflet";
import './index.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface ZoomItems {
    icon: string;
    info: string;
  }
export default function ZoomControl() {

    const map = useMap();
    const addRaster = useSelector((state: RootState) => state.raster.addRaster);

    const zoomItems: ZoomItems[] = [
        {
          icon: plusIcn,
          info: 'Zoom In ',
        },
        {
          icon: minusIcn,
          info: 'Zoom Out',
        },
      ];
    
  return (
    <>
    
      {zoomItems.map((item) => (
        <Tooltip key={item.info} showArrow content={item.info} placement="left-start"    className={`   ${ addRaster ? "right-[30rem]": "right-4 "  }  `}>
        
          <Button
            isIconOnly
            className="bg-transparent "
            onClick={() => {
              switch (item.info) {
                case 'Zoom In':
                    map.zoomIn();
                    break;
                case 'Zoom Out':
                    map.zoomOut();
                    break;
                default:
                  break;
              }
            }}
          >
            <ReactSVG src={item.icon} />
          </Button>
        </Tooltip>
))}
    </>
  );
}
