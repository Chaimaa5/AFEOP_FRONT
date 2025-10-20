import { Button, Input, Listbox, ListboxItem, Textarea, useSelect } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import right from "../../../assets/icons/right.svg";
import { updateCoorInput, updateShape } from "../../../store/features/drawSlice";

export default function SearchInput() {
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
          console.log("Invalid input. Ensure the input is a valid JSON format: [lat, lon] for points or [[lat1, lon1], [lat2, lon2], ...] for polygons.");
        }
      };
    return (
        <div className="flex justify-between items-end space-x-2 w-[80%] ">
        <Input
        aria-label="Coordinates"
        value={coordinatesInput}
        onChange={(e) => {dispatch(updateCoorInput(e.target.value));}}
        label="Search (e.g., [51.505, -0.09] or [[51.5, -0.1], [51.5, -0.12], ...])"
className="max-w-[57rem] font-popins  "
classNames={{innerWrapper: 'rounded-full bg-bg ',base:'w-[40rem] ', input: 'rounded-full bg-bg', label: 'text-sm font-light text-grey-700', mainWrapper: 'rounded-full bg-bg ',  labelWrapper: 'rounded-full bg-white',  inputWrapper: 'rounded-full bg-white',  underlined: 'rounded-full bg-white',  underlinedInput: 'rounded-full bg-white',  underlinedLabel: 'rounded-full bg-white',  underlinedLabelWrapper: 'rounded-full bg-white',  underlinedInputWrapper: 'rounded-full bg-white'}}
/>
<Button isIconOnly onClick={handleAddShape} size="sm" className="mt-2 bg-darkgreen rounded-full"><img src={right} className="w-[50%]  "/></Button>
        </div>
    );
}