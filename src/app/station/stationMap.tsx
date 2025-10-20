import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import './index.scss'; // Custom styles
import DrawFieldTools from '../components/drawTools';
import ZoomControl from '../components/drawTools/zoomControl';
import markerIcn from "../../assets/icons/marker.svg";
import { updateStation } from '../../store/features/stationSlice';


import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer, useMap, GeoJSON, ImageOverlay, Tooltip, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

type MapProps = {
  center: [number, number];
  zoom: number;
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
};

const SynchronizedMap = ({ center, zoom, setCenter, setZoom }: MapProps) => {
  const map = useMap();

  // Use both moveend and zoomend to catch all types of map interactions
  useMapEvents({
    moveend: () => {
      setCenter([map.getCenter().lat, map.getCenter().lng]);
      setZoom(map.getZoom());
    },
    zoomend: () => {
      setZoom(map.getZoom());
    }
  });

  // Effect to synchronize map view
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
};

export default function Map() {

  // var hash = new L.Hash(map);
  const dispatch = useDispatch();
  const markerPositions = [
    { lat: 31.59972, lng: -7.97611, label: "Agdal EC1" },
    { lat: 31.59306, lng: -7.98056, label: "Agdal EC2" },
    { lat: 31.58583, lng: -7.97972, label: "Agdal EC3" },
    { lat: 31.60322, lng: -7.97269, label: "Agdal Scintillometer" },
    { lat: 31.66339, lng: -7.67978, label: "Elghaba EC4" },
    { lat: 31.66517, lng: -7.67778, label: "Elghaba Weather" },
    { lat: 32.21819, lng: -7.87256, label: "Experimental Farm Weather" },
    { lat: 31.20647, lng: -7.86633, label: "Oukaimden Snow Station" },
    { lat: 33.40456, lng: -5.10361, label: "Ifrane Snow Station" },
    { lat: 33.52731, lng: -5.10836, label: "Ifrane Weather" },
  ];

  const customIcon = new L.Icon({
    iconUrl: markerIcn,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0],
  });

  const handleStation = (label) => {
    // console.log("here label", label)
    dispatch(updateStation("2"));
  }
  return (
    

      <MapContainer center={[20.0, -12.0]} zoom={6} zoomControl={false}
        zoomSnap={1} // Snap zoom levels to integers
        zoomDelta={1} style={{ height: '100%', width: '100%' }}
        // whenCreated={setMap}
      >

        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          subdomains={["mt1", "mt2", "mt3"]}
          noWrap={true}

        />

    
{markerPositions.map((position, index) => (
          <Marker
            key={index}
            position={[position.lat, position.lng]}

            icon={customIcon}  
            eventHandlers={{
              click: (e) => {
                handleStation(position.label)
              },
            }}
          >
            <Popup className='w-[12rem]'  >
              <div className="flex  space-y-0 space-x-4 items-center justify-center ">
                <img src={markerIcn} className="flex w-[50%]" />
                <div className="flex flex-col">
                  <p className='font-poppins font-semibold '>{position.label}</p>
                  <div className='flex font-poppins text-[#B0B0B0]'>

                    <p className='mx-0 my-0'> {position.lat},</p>
                    <p className='mx-0 my-0'>{position.lng}</p>
                  </div>
                </div>
              </div>

            </Popup>
          </Marker>
        ))}
       
      </MapContainer>

  );


};

