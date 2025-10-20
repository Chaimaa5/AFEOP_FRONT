import {Accordion, AccordionItem, Button, Divider, Input, Listbox, ListboxItem} from "@nextui-org/react";
import "../tasks/index.scss";
import Search from "antd/es/transfer/search";
import right from "../../assets/icons/right.svg";

import { useDispatch, useSelector } from "react-redux";
import {  updateCoorInput, updateShape } from "../../store/features/drawSlice";
import { ListboxWrapper } from "../tasks/ListboxWrapper";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import DownloadControl from "../tasks/download";


function SearchInput() {
    const coordinatesInput = useSelector((state: RootState) => state.draw.coordinatesInput);
    const dispatch = useDispatch();
    
    const handleAddShape = () => {
        try {
          const parsedInput = JSON.parse(coordinatesInput);
          if (Array.isArray(parsedInput) && parsedInput.length === 2 && typeof parsedInput[0] === 'number' && typeof parsedInput[1] === 'number') {
            dispatch(updateShape({ type: 'marker', coordinates: parsedInput, search: true }));
          }
          else if (Array.isArray(parsedInput) && parsedInput.every(coord => Array.isArray(coord) && coord.length === 2)) {
            dispatch(updateShape({ type: 'polygon', coordinates: parsedInput, search: true }));
          } 
        } catch (error) {
          // console.log("Invalid input. Ensure the input is a valid JSON format: [lat, lon] for points or [[lat1, lon1], [lat2, lon2], ...] for polygons.");
        }
      };
    return (
        <div className="flex justify-between items-end space-x-4">

        <Input
        aria-label="Coordinates"
        value={coordinatesInput}
        onChange={(e) => {dispatch(updateCoorInput(e.target.value));}}
        label="(e.g., [51.505, -0.09] or [[51.5, -0.1], [51.5, -0.12], ...])"
className="max-w-xs font-popins"
/>
<Button isIconOnly onClick={handleAddShape} size="sm" className="mt-2 bg-blue"><img src={right} className="w-[50%] "/></Button>
        </div>
    );
}
export default function Operations() {

  return (
    <Accordion  className="font-serif font-normal text-xs p-0" defaultExpandedKeys={["2", "1", "3"]} >    
      {/* <AccordionItem key="3" aria-label="Search" title="Search" >
        <SearchInput/>

      </AccordionItem> */}
  
      <AccordionItem key="1" aria-label="Download" title="Download">

      <DownloadControl />
      </AccordionItem>
    </Accordion>
  );
}