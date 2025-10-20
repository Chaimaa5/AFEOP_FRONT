import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer, useMap, GeoJSON, ImageOverlay, Tooltip, useMapEvents } from 'react-leaflet';
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
import PixelCharts from '../components/charts';

function SetViewOnLocation({ coords }: { coords: [number, number] }) {

  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 13); // Set zoom level to 13
    }
  }, [map, coords]);
  return null;
}

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
  const editRef = useRef();
  const [center, setCenter] = useState<[number, number]>([20.0, -12.0]);
  const [zoom, setZoom] = useState(6);
  const addRaster = useSelector((state: RootState) => state.raster.addRaster);
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [layerKey, setLayerKey] = useState(0);
  const layers = useSelector((state: RootState) => state.layer.layers);
  const view = useSelector((state: RootState) => state.layer.layers?.["Raster"]?.view);
  const colorMap = useSelector((state: RootState) => state.raster.colorMap);
  const rasterUrl = useSelector((state: RootState) => state.raster.rasterUrl);
  const geojsonLayers = useSelector((state: RootState) => state.layer.geojsonLayers);
  const selectedLayer = useSelector((state: RootState) => state.layer.selectedLayer);
  const player = useSelector((state: RootState) => state.layer.player);
  const min = useSelector((state: RootState) => state.analysis.min);
  const max = useSelector((state: RootState) => state.analysis.max);
  const addChart = useSelector((state: RootState) => state.analysis.addChart);
  useEffect(() => {
    setLayerKey(prevKey => prevKey + 1);

  }, [rasterUrl, colorMap]);
  // var hash = new L.Hash(map);
  const [map, setMap] = useState();


  console.log("Map component rendered", rasterUrl);
  const getStyle = (geojsonData) => {
    const isCurrentLayer = geojsonData.features[0].properties.name === selectedLayer;

    return {
      fillColor: 'blue',
      opacity: 0.2,
      color: 'black',
      fillOpacity: isCurrentLayer ? layers[selectedLayer].opacity : 0.2
    };
  };

  return (
    <ReactLeafletEditable
      ref={editRef}
      map={map}
    >

      <MapContainer center={[20.0, -12.0]} zoom={6} zoomControl={false}
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
            <Marker position={position}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                Lat: {position[0]}, Lng: {position[1]}
              </Tooltip>
            </Marker>
            <SetViewOnLocation coords={position} />
          </>
        )}
        {player && <LayerPlayback />}
        {rasterUrl && view && <Legend max={max} min={min} colorMap={colorMap} />}

        {rasterUrl && view && !player &&
          <WMSTileLayer
            key={layerKey}
            url="http://localhost:8080/geoserver/wms"
            layers={rasterUrl}
            format="image/png"
            styles={colorMap}
            noWrap={true}
            // tileSize={512}
            transparent={true}
            opacity={layers["Raster"].opacity}
          />
        }{!addChart &&

          <DrawFieldTools />
        }
        {
          addRaster &&
          <GetFeature rasterUrl={rasterUrl} />
        }
        {
          geojsonLayers &&
          geojsonLayers.map((geojsonData, index) => (
            <GeoJSON key={index} data={geojsonData} style={(feature) => getStyle(geojsonData)} />
          ))
        }

        {addChart && (
          <div className="pixel-chart-container  flex items-center  justify-center  h-[100%] absolute top-0 p-4  lg:block md:block sm:hidden">
            <PixelCharts></PixelCharts>
          </div>
        )}
      </MapContainer>

    </ReactLeafletEditable>
  );


};

