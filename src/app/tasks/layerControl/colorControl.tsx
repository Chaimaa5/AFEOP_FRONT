import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Button, ColorPicker, Space } from "antd";
import { useEffect, useState } from "react";
import { AddIcon } from "./addIcon";
import trash from '../../../assets/icons/trash.svg'
import Axios from "../../api/axios";
import Titiler from "../../api/titiler";
import { useDispatch } from "react-redux";
import { updateColorMap } from "../../../store/features/rasterSlice";



export default function ColorControl() {
    const colorMaps =[
        "viridis",
        "plasma",
        "inferno",
        "magma",
        "cividis",
        "Greys",
        "Purples",
        "Blues",
        "Greens",
        "Oranges",
        "Reds",
        "YlOrBr",
        "YlOrRd",
        "OrRd",
        "PuRd",
        "RdPu",
        "BuPu",
        "GnBu",
        "PuBu",
        "YlGnBu",
        "PuBuGn",
        "BuGn",
        "YlGn",
        "turbo",
        "cubehelix",
        "twilight",
        "twilight_shifted",
        "hsv",
        "icefire",
        "mako",
        "flare"
    ]
    // State to hold colormap options
    const dispatch = useDispatch();
    const setColorMap = (colorMap: string) => {
        dispatch(updateColorMap(colorMap));
    }
    // useEffect(() => {
    //     Titiler.get("colorMaps").then((response) => {
    //         const data = response.data;
    //         if (data) {
    //             setColorMaps(data.colorMaps);
    //         }
    //     })
    //         .catch((error) => {
    //             console.error("Error fetching color maps:", error);
    //         });
    // }, []);
    // const [color1, setColor1] = useState("#1677ff");
    // const [color2, setColor2] = useState("#1677ff");
    return (

        <div className="flex flex-col  w-[100%] justify-start items-end ">



       
                {/* <Space direction="vertical" className="w-[100%]">
                    <div className="flex w-[100%] justify-between">
                        <ColorPicker defaultValue={color1} onChange={(e) => setColor1(e.target.value)} showText allowClear />
                        <Button className=" bg-[#F9F9F9]  rounded-md border-none">

                            <img src={trash} />
                        </Button>
                    </div>
                    <div className="flex w-[100%] justify-between">
                        <ColorPicker defaultValue={color2} onChange={(e) => setColor2(e.target.value)} showText allowClear />
                        <Button className=" bg-[#F9F9F9]  rounded-md border-none">

                            <img src={trash} />
                        </Button>
                    </div>
                </Space> */}
            
            <Autocomplete
                placeholder="Select color ramp"
                className="max-w-xs  w-[100%] font-poppins"
                aria-label="Select color ramp"
                startContent={<AddIcon />}
                onChange={(e) => setColorMap(e.target.value)}
            >
                {colorMaps.map((colormap) => (
                    <AutocompleteItem key={colormap} value={colormap} onClick={() => setColorMap(colormap)} >
                        {colormap}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
        </div>
    );
};
