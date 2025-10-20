import { Button, Select, SelectItem, Slider, useSelect } from "@nextui-org/react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import view from '../../../assets/icons/view.svg';
import hide from '../../../assets/icons/hide.svg'
import { RootState } from "../../store/store";
import right from "../../assets/icons/right.svg";
import Axios from "../api/axios";
import { Typography } from "antd";


export default function DownloadControl() {
    
    const shape = useSelector((state: RootState) => state.draw.shape);
    const rangeUrls = useSelector((state: RootState) => state.form.rangeDataUrl);
    const geojson = useSelector((state: RootState) => state.layer.geojsonLayers);

    const DownloadZip = async () => {
        try {
            let formData = new FormData();

            const Paths = Object.values(rangeUrls);

 
            formData.append("paths", Paths);
            formData.append("shape", shape.type);
            // formData.append("shpPath", shpPath);

            if (shape.type === "polygon") 
                formData.append("coordinates", JSON.stringify(shape.coordinates));
            else if (shape.type === "geojson") 
                formData.append("coordinates", JSON.stringify(geojson));
            
                

            const response = await Axios.post("rasters/downloadZip/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                responseType: 'blob',
            })
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([response.data]));
            link.download = 'RastersZipped.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading GeoTIFF:', error);
        }
    }

    return (
        <div className="flex flex-col gap-4 w-[100%]">
                <Typography className="text-sm font-normal text-gray-600">Choose your prefered format to download rasters zipped</Typography>
            <div className="flex justify-between w-[100%]">
                <Select
                    label=""
                    placeholder="Select Download Format"
                    labelPlacement="outside"
                    className=" w-[88%] font-poppins"
                    disableSelectorIconRotation
                    // value={selectedLayer}
                    aria-label="Select layer"
                    onChange={(e) => {
                        const value = e.target.value;
                        // if (value) {
                        //   dispatch(selectLayer(value)); // Only dispatch if value is truthy
                        // }
                      }}
                >
                        <SelectItem key="1" value="Geottif">
                            Geottif
                        </SelectItem>
                        <SelectItem key="2" value="COG" >
                            COG(cloud optiomized geottif)
                        </SelectItem>
                        <SelectItem key="3" value="Geottif">
                            Zarr
                        </SelectItem>
                </Select>
        <Button isIconOnly  onClick={DownloadZip} size="sm" className="mt-2 bg-darkgreen rounded-full"><img src={right} className="w-[50%] "/></Button>
                
            </div>

          

        </div>
    );
};
