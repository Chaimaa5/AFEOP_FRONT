import { Accordion, AccordionItem, Listbox, ListboxItem, useSelect } from "@nextui-org/react";

import { RootState } from "../../../store/store";
import { ListboxWrapper } from "../../tasks/ListboxWrapper";
import { useSelector } from "react-redux";
import { useEffect } from "react";



export default function DroughtDatasetInfo() {
    const nodata_type = useSelector((state: RootState) => state.raster.nodata_type);
    const nodata_value = useSelector((state: RootState) => state.raster.nodata_value);
    // const metadata = useSelector((state: RootState) => state.raster.metadata);
    const bounds = [-16.9917000000000016, -34.6707199999999887, 50.9762999999999877, 37.0772800000000018]



    return (
        <div>

            <ListboxWrapper  >

                <Listbox aria-label="Listbox menu with descriptions" className="text-black" >
                    <ListboxItem key="crs" showDivider description="EPSG:4326"  > CRS</ListboxItem>
                    <ListboxItem key="compression" showDivider description="LZW"  >  COG Compression</ListboxItem>
                    <ListboxItem key="block" description="1024" > Blocksize </ListboxItem>
                    <ListboxItem key="bounds" showDivider description={`${bounds.join(', ')}`}  >  Bounds</ListboxItem>
                    <ListboxItem
                        key="new"
                        showDivider
                        description="Float32 - Thirty two bit floating point"
                    >
                        DType
                    </ListboxItem>
               
                    <ListboxItem
                        key="ndv"
                        showDivider
                        description={nodata_value}
                    >
                        No Data Value
                    </ListboxItem>


                </Listbox>
            </ListboxWrapper>




        </div>
    );
}