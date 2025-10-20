


import { Card, CardContent } from '@mui/material';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import GetFeature from './getFeature';
import Tasks from '../tasks';
import Dataset from './dataset';
import Legend from './legend';
import TopBar from '../components/topbar';
import "./index.css"
import AppDatePicker from './components/datePicker';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DrawFieldTools from '../components/drawTools';
import FusedSMAnalysis from './components/Analysis';
import DownloadControl from './components/Download';
import { Search } from 'lucide-react';
import SearchInput from '../tasks/search';


const SoilMoistureDashboard = () => {

    const layer = useSelector((state: RootState) => state.FusedSM.layer);
    console.log("layer", layer)
    return (
        
        <div className="flex flex-col h-[100%] w-[100%] overflow-hidden ">
              <MapContainer
                center={[33.5, -5]}
                zoom={6}
                zoomSnap={1} // Snap zoom levels to integers
                zoomDelta={1}
                zoomControl={false}
                style={{ height: '100%', width: '100%' }}
                >
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <WMSTileLayer
                    key={layer}
                    url="http://localhost:8080/geoserver/wms"
                    layers={layer}
                    format="image/png"
                    styles="SM_Viridis"
                    noWrap={true}
                    tileSize={512}
                    transparent={true}
                />
                <GetFeature rasterUrl={layer} />
                {/* <DrawFieldTools/> */}
                <Legend max={1} min={0} colorMap="viridis" />
                <Card className="absolute bottom-0 left-0  bg-transparent m-4  rounded-lg shadow-md z-[999]" >
                    <CardContent className='flex bg-transparent justify-start items-start space-x-4'>
                        <AppDatePicker ></AppDatePicker>
                        {/* <SearchInput /> */}
                        <DownloadControl />
                    </CardContent>
                </Card>


            </MapContainer>
            <div className={`   h-full  bottom-0 right-0 flex items-center  justify-center  w-[30%] absolute  shadow-md z-20 p-4  lg:block md:block sm:hidden`}>
                <Dataset />
                </div>
            <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
                <TopBar></TopBar>

            </div>

        </div>





    );
};

export default SoilMoistureDashboard;