import React, { useState } from 'react';
import { MapContainer, TileLayer, WMSTileLayer, useMap, useMapEvents } from 'react-leaflet';
import DrawFieldTools from '../../components/drawTools';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import PixelCharts from '../../components/charts';




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

const Compare = () => {
    const [center, setCenter] = useState<[number, number]>([20.0, -12.0]);
    const [zoom, setZoom] = useState(6);
    const addChart = useSelector((state: RootState) => state.analysis.addChart);
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [layerKey, setLayerKey] = useState(0);
    const layers = useSelector((state: RootState) => state.layer.layers);
    const view = useSelector((state: RootState) => state.layer.layers?.["Raster"]?.view);
    const colorMap = useSelector((state: RootState) => state.raster.colorMap);
    const rasterUrl = useSelector((state: RootState) => state.raster.rasterUrl);
    const geojsonLayers = useSelector((state: RootState) => state.layer.geojsonLayers);
    const selectedLayer = useSelector((state: RootState) => state.layer.selectedLayer);
    const player = useSelector((state: RootState) => state.layer.player);
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '50%' }}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <SynchronizedMap center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />

            </MapContainer>
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '50%' }}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <SynchronizedMap center={center} zoom={zoom} setCenter={setCenter} setZoom={setZoom} />
                {rasterUrl && view && !player &&
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
                {!addChart &&

                    <DrawFieldTools />
                }
            </MapContainer>
        </div>
    );
};

export default Compare;
