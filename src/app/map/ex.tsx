import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Map = () => {
    const wmsUrl ="http://localhost:8080/geoserver/wms"
    const layers="postgis:METOP_AVHRR_Africa_20160111_S10_NDV"
  const bbox = '-25.36666666438878,-34.824999996872776,63.4999999942978,37.34166666331345'; // Your provided BBOX
  const width = 256; // Tile width
  const height = 256; // Tile height

  // Function to create and add WMS layer
  const addWMSLayer = (map: L.Map) => {
    const wmsLayer = L.tileLayer.wms(wmsUrl, {
      layers: layers,
      format: 'image/png',
      transparent: true,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // Optional parameters
      styles: '',
      bbox: bbox,
      width: width,
      height: height,
    });

    // Add the WMS layer to the map
    wmsLayer.addTo(map);
  };

  useEffect(() => {
    // Initialize the map and set its view
    const map = L.map('map').setView([-34.824999996872776, -25.36666666438878], 3);
    
    // Add a base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add the WMS layer
    addWMSLayer(map);

    // Clean up the map instance on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: '100vh', width: '100%' }} />
  );
};

export default Map;
