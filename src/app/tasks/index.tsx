// import { Tabs } from "antd";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Operations from "./operations";
import RasterData from "./rasterData";
import DownloadControl from "./download";
import arrow from "../../assets/icons/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateAddRaster, updateSideBar } from "../../store/features/rasterSlice";
import { updateView } from "../../store/features/layers";
import { useState } from "react";

export default function Task() {
  const sidebar = useSelector((state: any) => state.raster.sidebar);

  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(updateSideBar(!sidebar))


  };

  const tabs = [
    {
      id: '1',
      label: 'Operations',
      content: <Operations />,
    },
    {
      id: '2',
      label: 'Raster Data',
      content: <RasterData />,
    },
    {
      id: '3',
      label: 'Download',
      content: <DownloadControl />,
    },
  ];
  return (
    <div className={`flex flex-col items-center w-[100%]  h-[100%]  rounded-3xl px-10 overflow-y-auto ${sidebar ? 'bg-bg' : ' absolute bottom-0 w-[40px] h-[100px]  '}  `}>
      <div className={`absolute bottom-6  z-20 left-6  `}>

        <button
          onClick={handleSidebar}
          className={`flex justify-center items-center  h-[40px] w-[40px] z-20 ${sidebar ? 'bg-red-600 ' : 'bg-darkblue '}  text-white rounded-full 'cursor-e-resize' 
              `}
        >
          <img src={arrow} className={`w-[40%]   ${sidebar ? 'bg-red-600 rotate-180 ' : 'bg-darkblue '} `} />
        </button>
      </div>
      {sidebar &&
      <Tabs aria-label="Dynamic tabs" items={tabs} radius="full" fullWidth className="pt-5  ">

        {(item) => (
          <Tab key={item.id} title={item.label} className="w-[100%]">
            <Card className="border-none shadow-none w-[100%] bg-bg">
              <CardBody >
                {item.content}
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
      }
    </div>
  );
}


