import { Button, Select, SelectItem, Slider, useSelect } from "@nextui-org/react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ColorControl from "./colorControl";
import OpacityControl from "./opacityControl";
import { RootState } from "../../../store/store";
import { selectLayer, updateView } from "../../../store/features/layers";
import view from '../../../assets/icons/view.svg';
import hide from '../../../assets/icons/hide.svg'



export default function LayerControl() {
    const layers = useSelector((state: RootState) => state.layer.layers);
    const dispatch = useDispatch();
    const selectedLayer = useSelector((state: RootState) => state.layer.selectedLayer);
    const show = useSelector((state: RootState) => state.layer.layers[selectedLayer]?.view);
    let showIcn = show ? view : hide;
    const handleLayerChange = (event) => {
        const selected = event.target.value;
        dispatch(selectLayer(selected));
    };
    const handleView = () => {
        dispatch(updateView(!show));
        showIcn = show ? view : hide;
    };

    //   const handleOpacityChange = (event) => {
    //     const opacityValue = parseFloat(event.target.value);
    //     dispatch(setOpacity(opacityValue));
    //   };
    //   const handleColorRampChange = (event) => {
    //     const colorRampValue = event.target.value;
    //     dispatch(setColorRamp(colorRampValue));
    //   };

    //   const handleAddLayer = () => {
    //     if (newLayerName && !layers.includes(newLayerName)) {
    //       dispatch(addLayer(newLayerName));
    //       setNewLayerName('');
    //     }
    //   };

    //   const handleDeleteLayer = (layer) => {
    //     dispatch(removeLayer(layer));
    //   };
    return (
        <div className="flex flex-col gap-4 w-[100%]">
            <div className="flex justify-between w-[100%]">
                <Select
                radius="full"
                classNames={{ innerWrapper: 'bg-bg', trigger: 'bg-bg' }}
                    label=""
                    placeholder="Select layer"
                    labelPlacement="outside"
                    className=" w-[100%] font-poppins"
                    disableSelectorIconRotation
                    value={selectedLayer}
                    aria-label="Select layer"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value) {
                          dispatch(selectLayer(value)); // Only dispatch if value is truthy
                        }
                      }}
                >
                    {Object.entries(layers).map(([name, settings]) => (
                        <SelectItem key={name} value={name}>
                            {name}
                        </SelectItem>

                    ))}
                </Select>
                {
                     selectedLayer &&
                    <button className="flex justify-center items-center bg-darkgreen  rounded-full border-none w-[15%] p-0" onClick={handleView}>

                        <img src={showIcn} className="w-[40%]" />
                    </button>
                }
            </div>

            {
                selectedLayer === "Raster" &&
                
                <ColorControl />
            }

{
             selectedLayer &&
            <OpacityControl />

}
        </div>
    );
};
