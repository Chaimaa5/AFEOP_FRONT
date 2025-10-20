import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, WMSTileLayer, useMap, useMapEvents } from 'react-leaflet';
// import DrawFieldTools from '../../components/drawTools';

import GetFeatures from './getfeature';
import TopBar from '../components/topbar';
import ClickHandler from './clickHandler';
import Legend from './Legend';
import SyncedCharts from '../drought/components/SyncedChart';
import RegimeStats from './components/RegimeStats';
import RegimeChart from './components/RegimeChart';
import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { AlertTriangle, Divide, Droplets } from 'lucide-react';
import { ApiFilled } from '@ant-design/icons';
import Axios from '../api/axios';




type MapProps = {
    center: [number, number];
    zoom: number;
    setCenter: (center: [number, number]) => void;
    setZoom: (zoom: number) => void;
};

const SynchronizedMap = ({ center, zoom, setCenter, setZoom }: MapProps) => {
    const map = useMap();

    useMapEvents({
        moveend: () => {
            const currentCenter = map.getCenter();
            const currentZoom = map.getZoom();
            // Update only if there's a significant difference to avoid precision issues
            if (Math.abs(currentCenter.lat - center[0]) > 0.0001 ||
                Math.abs(currentCenter.lng - center[1]) > 0.0001) {
                setCenter([currentCenter.lat, currentCenter.lng]);
            }
            if (Math.abs(currentZoom - zoom) > 0.1) { // Considered a small threshold for zoom level changes
                setZoom(currentZoom);
            }
        }
    });

    React.useEffect(() => {
        // Update the view only if there's a noticeable difference
        if ((Math.abs(map.getCenter().lat - center[0]) > 0.0001 ||
            Math.abs(map.getCenter().lng - center[1]) > 0.0001 ||
            Math.abs(map.getZoom() - zoom) > 0.1)) {
            map.setView(center, zoom);
        }
    }, [center, zoom, map]);

    return null;
};

const SMWP = () => {
    // const [popupContent, setPopupContent] = useState([]);
    const [regimeType, setRegimeType] = useState("");
    const [breakPoint, setBreakPoint] = useState(0);
    const [popupPosition, setPopupPosition] = useState(null);
    const breakpoints = "ET:Breakpoints";
    const regime = "ET:RegimeHydrologique";
    const [bg, setBg] = useState("bg-white");

    const rasterUrls = [breakpoints, regime]
    const onClose = () => {
        // setClosed(true);
        // setPopupContent([]);
        setPopupPosition(null);
    }


    const [center, setCenter] = useState<[number, number]>([20.0, -12.0]);
    const [zoom, setZoom] = useState(6);

    return (
        <div className="relativer w-full h-full">

            <div className=' flex justify-center items-center' style={{ display: 'flex', height: '100vh' }}>
                <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
                    <TopBar></TopBar>

                </div>
                {/* <div
                    className="flex flex-col fixed top-6 left-[25%] transform -translate-x-1/4 bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-lg z-[9999] w-fit min-w-[280px] max-w-[80%]"
                >
                    <div className="flex space-x-4 justify-center items-center">
                        <p className="font-poppins font-semibold" >
                            Carte 1 - Breakpoints
                        </p>
                    </div>
                </div> */}
                {/* <div
                    className="flex flex-col fixed top-6 left-[75%] transform -translate-x-1/4 bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-lg z-[9999] w-fit min-w-[280px] max-w-[80%]"
                >
                    <div className="flex space-x-4 justify-center items-center">
                        <p className="font-poppins font-semibold" >
                            Carte 2 - Hydrological Regime
                        </p>
                    </div>
                </div> */}
                <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '50%' }} zoomControl={false}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    <SynchronizedMap center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
                    <WMSTileLayer
                        url="http://localhost:8080/geoserver/wms"
                        layers="ET:Breakpoints"
                        format="image/png"
                        styles="BreakPoints"
                        noWrap={true}
                        tileSize={512}
                        transparent={true}
                    />
                    <ClickHandler
                        rasterUrls={["ET:Breakpoints", "ET:RegimeHydrologique"]}
                        setRegime={setRegimeType}
                        setBreakpoint={setBreakPoint}
                        setPopupPosition={setPopupPosition}
                    />
                </MapContainer>
                <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '50%' }} zoomControl={false}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    <SynchronizedMap center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
                    <WMSTileLayer
                        url="http://localhost:8080/geoserver/wms"
                        layers={regime}
                        format="image/png"
                        styles="HydroRegime"
                        noWrap={true}
                        tileSize={512}
                        transparent={true}
                    />


                    <ClickHandler
                        rasterUrls={["ET:Breakpoints", "ET:RegimeHydrologique"]}
                        setRegime={setRegimeType}
                        setBreakpoint={setBreakPoint}
                        setPopupPosition={setPopupPosition}
                    />
                </MapContainer>
                <Legend max={4} min={0} colorMap="breakpoints" />
                <div className='flex justify-center space-x-2 p-4 bottom-0 absolute w-[80%] bg-bg h-60 z-50 rounded-3xl m-6'>

                    <RegimeStats />
                    <div className='w-[45%] h-[100%]  flex justify-center items-center'>
                        <RegimeChart />
                    </div>
                    <GetFeatures regime={regimeType} breakPoint={breakPoint} popupPosition={popupPosition} onClose={onClose} />


                    <Card className='shadow-none border-gray-200  border-1 '>
                    <CardBody
                        className="flex flex-col  justify-start items-start space-y-6   bg-bg px-6 py-4 rounded-3xl  z-[9999] w-fit min-w-[200px] max-w-[80%]"
                    >
                        
                        <p className="text-md self-center text-muted-foreground font-semibold" >
                        Regime Types
                            </p>
                        <div className="flex space-x-4 ">
                            <div className='bg-[#16ff06] rounded-md w-[20px] h-[20px]'></div>
                            <p className="text-md text-muted-foreground font-medium" >
                                Transitional
                            </p>
                        </div>
                        <div className="flex space-x-4 ">
                            <div className='bg-[#f7ff00] rounded-md w-[20px] h-[20px]'></div>
                            <p className="text-md text-muted-foreground font-medium" >
                                Water limited
                            </p>
                        </div>
                        <div className="flex space-x-4 ">
                            <div className='bg-[#0b17f5] rounded-md w-[20px] h-[20px]'></div>
                            <p className="text-md text-muted-foreground font-medium" >
                                Energy limited
                            </p>
                        </div>
                    </CardBody>
                </Card>
                    {/* <RegimeStats /> */}

                </div>
              
            </div>
        </div>
    );
};

export default SMWP;
