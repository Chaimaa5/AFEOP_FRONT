
import DroughtHeader from "./components/DroughtHeader";
import DroughtMap from "./components/DroughtMap";
import DroughtChart from "./components/DroughtChart";
import DroughtMetrics from "./components/DroughtMetrics";
import CascadeFlow from "./components/CascadeFlow";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import VariableCorrelation from "./components/VariableCorrelation";
import TimeseriesComparison from "./components/TimeseriesComparison";
import TopBar from "../components/topbar";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";
import GetFeature from "./components/getFeature";
import Legend from "./components/Legend";
import { useState } from "react";
import { Autocomplete, AutocompleteItem, Button, Tab, Tabs, Tooltip, Select, SelectItem, useSelect, Card, CardBody } from '@nextui-org/react';
import Dataset from "../fusedSM/dataset";
// import AppDatePicker from "../fusedSM/components/datePicker";
import MonthPicker from "./components/MonthPicker";
import SearchInput from "./components/Search";
import DownloadControl from "../tasks/download";
import DatasetInfo from "../fusedSM/datasetInfo";
import DroughtDatasetInfo from "./components/DatasetInfo";
import { Label } from "./components/ui/label";
import DroughtAnalysis from "./components/Analysis";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DrawFieldTools from "../components/drawTools";
import { Layer } from "recharts";
import { resetDrawState } from "../../store/features/drawSlice";



const Drought = () => {
  const dispatch = useDispatch();
  dispatch(resetDrawState())
  const layer = useSelector((state: RootState) => state.Drought.layer);
  const variable = useSelector((state: RootState) => state.Drought.variable);
  console.log('vari', variable);
  return (
 <div className="flex justify-center items-center h-[100%] w-[100%] bg-bg">
    <div className="flex justify-start items-start w-[100%] h-[100%]">
      <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
        <TopBar></TopBar>
      </div>
      {/* <div className="container mx-auto py-4 md:py-8 px-4">
        <DroughtHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="map">Spatial Analysis</TabsTrigger>
                <TabsTrigger value="timeseries">Temporal Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="map" className="mt-2">
                <DroughtMap />
              </TabsContent>
              <TabsContent value="timeseries" className="mt-2">
                <DroughtChart />
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <CascadeFlow />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <VariableCorrelation />
          <TimeseriesComparison />
        </div>
        
        <div>
          <DroughtMetrics />
        </div>
      </div> */}
      <div className="flex flex-col  h-[100%] w-[50%]">

        <MapContainer
          center={[33.5, -5]}
          zoom={6}
          zoomControl={false}
          style={{ height: '100%', width: '100%' }}
          className="flex flex-col justify-end items-end">


          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <WMSTileLayer
            key={layer}
            url="http://localhost:8080/geoserver/wms"
            layers={layer}
            format="image/png"
            styles={variable}
            noWrap={true}
            tileSize={512}
            transparent={true}
          />

          {/* <DrawFieldTools /> */}

          <GetFeature rasterUrl={layer} />
          {
            layer && 
          <Legend max={1} min={0} colorMap={variable} />
          }
          <Card className="absolute bottom-0 left-0 bg-transparent  rounded-lg  z-[999] w-full border-none shadow-none" >
            <CardBody className=' bg-transparent flex  justify-start gap-4 w-full'>
              <SearchInput />
              <MonthPicker />
            </CardBody>
          </Card>

        </MapContainer>
      </div>
      <div className="flex flex-col w-[50%] h-[100%] overflow-auto">
        <DroughtAnalysis />
        <div className="flex w-[100%] h-[1000px] px-4 ">
          <TimeseriesComparison />
        </div>
        <div className="flex w-[100%]  p-4 space-x-2">
          <div className="flex w-[50%]  ">

            <CascadeFlow />
          </div>
          <div className="flex w-[50%] ">
            <Card className="bg-bg " >

              <CardBody className="relative overflow-hidden p-2 pt-0 f">
                <DroughtDatasetInfo />
                {/* <Label className="text-black font-popins pl-3">Search Coordinates</Label> */}


                {/* <DownloadControl /> */}
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex w-[100%] h-[50%] p-4 ">
          <DroughtMetrics />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Drought;
