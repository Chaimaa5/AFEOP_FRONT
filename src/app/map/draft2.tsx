import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer, useMap, GeoJSON, ImageOverlay } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import DrawFieldTools from '../components/drawTools';
import GetFeature from './getFeature';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Layer } from 'leaflet';
import LayerPlayback from './LayerPlayback';
import ReactLeafletEditable from "react-leaflet-editable";
import Legend from '../components/legend';
import 'leaflet/dist/leaflet.css';

function SetViewOnLocation({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13); // Set zoom level to 13
    }
  }, [map, coords]);
  return null;
}


export default function Map () {
    const editRef = useRef();
    const addRaster = useSelector((state:RootState) => state.raster.addRaster);
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [layerKey, setLayerKey] = useState(0);
    const layers = useSelector((state:RootState) => state.layer.layers);
    const view = useSelector((state:RootState) => state.layer.layers?.["Raster"]?.view);
    const colorMap = useSelector((state:RootState) => state.raster.colorMap);
    const rasterUrl = useSelector((state:RootState) => state.raster.rasterUrl);  
    const geojsonLayers = useSelector((state:RootState) => state.layer.geojsonLayers);


    const player = useSelector((state: RootState) => state.layer.player);
    // Function to handle the next layer
 

    useEffect(() => {
      setLayerKey(prevKey => prevKey + 1);
    
    }, [ rasterUrl, colorMap]);
    // var hash = new L.Hash(map);
    const [map, setMap] = useState();

    return (
      <ReactLeafletEditable
                ref={editRef}
                map={map}
             >

        <MapContainer center={[20.0, -12.0]} zoom={6}    zoomControl={false}    
        zoomSnap={1} // Snap zoom levels to integers
        zoomDelta={1} style={{ height: '100%', width: '100%' }}
        whenCreated={setMap}
        >
           
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                subdomains={["mt1", "mt2", "mt3"]}
                noWrap={true}

                />
             {position && (
        <>
          <Marker position={position} />
          <SetViewOnLocation coords={position} />
        </>
      )}
      { player && <LayerPlayback />}
 { rasterUrl && view &&  <Legend  />}
  { rasterUrl && view && !player &&
            <WMSTileLayer
           key={layerKey}
                url="http://localhost:8080/geoserver/wms"
                layers={rasterUrl}
                format="image/png"
                styles={colorMap}
                noWrap={true}
                tileSize={512}
                transparent={true}
                opacity={layers["Raster"].opacity}
            />
      }
            <DrawFieldTools />
            {
              addRaster &&
            <GetFeature rasterUrl={rasterUrl} />
            }
            {
                    geojsonLayers && 
                    geojsonLayers.map((geojsonData, index) => (
                        <GeoJSON key={index} data={geojsonData}  
                        />
                    ))
                }


        </MapContainer>
      </ReactLeafletEditable>
    );

    
};

