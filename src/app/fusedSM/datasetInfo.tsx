import {Accordion, AccordionItem, Card, CardBody, CardHeader, Divider, Listbox, ListboxItem, useSelect} from "@nextui-org/react";

import { RootState } from "../../store/store";
import { ListboxWrapper } from "../tasks/ListboxWrapper";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import ApexChart from 'react-apexcharts';
import FusedSMAnalysis from "./components/Analysis";

function Analysis() {
  const min = useSelector((state: RootState) => state.analysis.min);
  const max = useSelector((state: RootState) => state.analysis.max);
  const mean = useSelector((state: RootState) => state.analysis.mean);
  const std = useSelector((state: RootState) => state.analysis.std);
  const median = useSelector((state: RootState) => state.analysis.median);
  let url = '';
  const rasterUrl = useSelector((state: RootState) => state.raster.rasterUrl);
  useEffect(() => {
      const match = rasterUrl.match(/SM:(\d{8})/);

      if (match && match[1]) {
          url = `${match[1]}.tif`;
      } 

  }
      , []);
  return (

      <ListboxWrapper >
          <Listbox aria-label="Listbox menu with descriptions" className="font-poppins" >
              <ListboxItem key="compression" description={min}   >  Min Value: </ListboxItem>
              <ListboxItem key="crs" description={max}   > Max Value: </ListboxItem>
              <ListboxItem key="bounds" description={mean}   >  Mean Value: </ListboxItem>
              <ListboxItem key="ndt" description={std}      >   Standard Deviation:  </ListboxItem>
              <ListboxItem description=""  key="ndv"        >   Median: {median}   </ListboxItem>
          </Listbox>
      </ListboxWrapper>
  );
}

export default function DatasetInfo() {
  const nodata_type = useSelector((state: RootState) => state.raster.nodata_type);
  const nodata_value = useSelector((state: RootState) => state.raster.nodata_value);
  // const metadata = useSelector((state: RootState) => state.raster.metadata);
  const bounds = [-16.9917000000000016,-34.6707199999999887 , 50.9762999999999877,37.0772800000000018]

//   const pieOptions = {
//     series: [45, 35, 20],
//     labels: ['SMAP', 'SMOS', 'AMSR2'],
//     chart: {
//         width: 380,
//         type: 'pie',
//     },

//     colors: ['#204E51', '#669DB5', '#94A74A'],
//     stroke: {
//         width: 4
//     },
//     dataLabels: {
//         enabled: true,
//         style: {
//             colors: ['#94A74A']
//         },
//         background: {
//             enabled: true,
//             foreColor: '#fff',
//             borderWidth: 0
//         }
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 200
//             },
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }]
// };



  return (
    <Card className={`flex bg-bg w-[100%] h-[30rem] justify-center rounded-3xl  shadow-none border-gray-200 border-1`}>
      <CardHeader className="flex justify-start items-start m-0" >
     <p className=" font-medium text-lg font-poppins pt-4">Raster Information</p>
     </CardHeader>
     <CardBody className="flex justify-center items-center overflow-auto pt-40">
     <ListboxWrapper >

      <Listbox  aria-label="Listbox menu with descriptions" >
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
      
 
    </CardBody>
    
    </Card>
  );
}