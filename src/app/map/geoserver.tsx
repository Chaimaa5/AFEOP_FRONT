import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [28.0, 2.5], // Center of Algeria
      zoom: 5,
      // maxZoom: 25,
      // minZoom: 12,
    });

    // Add OpenStreetMap as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add WMS layer
    const wms = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
      layers: 'postgis:cog', // Specify your layer here
      format: 'image/png',
      transparent: true,
      updateWhenIdle: false,
      bounds: L.latLngBounds([[1.0795173368473456, 14.920108469940914], [19.888111086847005, 36.71841533572082]]
        ),
      // tileSize: 512,
    });

    wms.addTo(map);

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
