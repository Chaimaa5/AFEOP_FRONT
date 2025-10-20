import {Accordion, AccordionItem, Listbox, ListboxItem, useSelect} from "@nextui-org/react";
import {ListboxWrapper} from "../ListboxWrapper";
import { useEffect, useState } from "react";
import Axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { updateBounds, updateRasterData } from "../../../store/features/rasterSlice";
import { RootState } from "../../../store/store";
import Titiler from "../../api/titiler";
import Description from "../description";
import Analysis from "../analysis";
// import {AddNoteIcon} from "./AddNoteIcon.jsx";
// import {CopyDocumentIcon} from "./CopyDocumentIcon.jsx";
// import {EditDocumentIcon} from "./EditDocumentIcon.jsx";
// import {DeleteDocumentIcon} from "./DeleteDocumentIcon.jsx";

export default function RasterData() {
  const dtype = useSelector((state: RootState) => state.raster.dtype);
  const nodata_type = useSelector((state: RootState) => state.raster.nodata_type);
  const driver = useSelector((state: RootState) => state.raster.driver);
  const width = useSelector((state: RootState) => state.raster.width);
  const height = useSelector((state: RootState) => state.raster.height);
  const nodata_value = useSelector((state: RootState) => state.raster.nodata_value);
  const metadata = useSelector((state: RootState) => state.raster.metadata);
  const bounds = useSelector((state: RootState) => state.draw.bbox);
  const rasterUrl = useSelector((state: RootState) => state.raster.rasterUrl);
  const option = useSelector((state: RootState) => state.form.selectedOption);

  const dispatch = useDispatch();
  let url = '';
  useEffect(() => {
    const match = rasterUrl.match(/SM:(\d{8})/);

    if (match && match[1]) {
       url = `${match[1]}.tif`;
    } 
    const fetchBounds = async () => {
      try {

        const response = await Titiler.get(`cog/bounds?url=http://127.0.0.1:8002/${option}/${url}`);
        dispatch(updateBounds(response.data.bounds));
      } catch (error) {
        console.error('Error fetching bounds:', error);
      }
    };
    const fetchInfo = async () => {
      try {
        const response2 = await Titiler.get(`/cog/info?url=http://127.0.0.1:8002/${option}/${url}`);
        const data = response2.data;
        const formatStatistics = (stats: Record<string, string>): string => {
          return Object.entries(stats)
              .map(([key, value]) => `${key}: ${value}`)
              .join('\n');
      };
        // dispatch(updateBounds(data.data.bounds));
        // setBounds(response.data.bounds);
        dispatch(updateRasterData({
          dtype: data.dtype,
          nodata_type: data.nodata_type,
          driver: data.driver,
          width: data.width,
          height: data.height,
          nodata_value: data.nodata_value,
          metadata: formatStatistics(data.band_metadata[0][1]),
          bounds: data.bounds,
      }));
      } catch (error) {
        console.error('Error fetching bounds:', error);
      }
    };
  
    fetchInfo();
    fetchBounds();
    
  }
  , []);
  return (
    <>
      <Accordion  className="font-serif font-normal text-xs p-0" defaultExpandedKeys={["2", "1", "3"]} >
      <AccordionItem key="1" aria-label="Description" title="Description" className="font-poppins text-xs p-0">
     <Description></Description>
     <ListboxWrapper >

      <Listbox  aria-label="Listbox menu with descriptions" >
      <ListboxItem key="meta" className="text-primary" color="primary"  showDivider description={metadata}  >  Band Metadata</ListboxItem>
      <ListboxItem key="crs"  showDivider description="EPSG:4326"  > CRS</ListboxItem>
      <ListboxItem key="compression"  showDivider description="LZW"  >  COG Compression</ListboxItem>
      <ListboxItem key="block" description="1024" > Blocksize </ListboxItem>

      
      <ListboxItem key="bounds"  showDivider description={`${bounds.join(', ')}`}  >  Bounds</ListboxItem>
        
        <ListboxItem
          key="new"
          showDivider
          description="Float32 - Thirty two bit floating point"
        //   startContent={<AddNoteIcon className={iconClasses} />}
        >
          DType
        </ListboxItem>
        <ListboxItem
          key="ndt"
          showDivider
          description={nodata_type}
        //   startContent={<CopyDocumentIcon className={iconClasses} />}
        >
          No Data Type
        </ListboxItem>
        <ListboxItem
          key="ndv"
          // showDivider
          description={nodata_value}
        >
          No Data Value
        </ListboxItem>
        {/* <ListboxItem key="height" description={height} showDivider > Height </ListboxItem>
        <ListboxItem key="width" description={width} showDivider> Width </ListboxItem> */}

        
       
      </Listbox>
    </ListboxWrapper>
      </AccordionItem>
      
    

    </Accordion>
    
    
    </>
  );
}