import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import * as zarr from 'zarrita'; // Import Zarrita for working with Zarr files

const Map = () => {
  const [zarrData, setZarrData] = useState<number[][] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadZarrData = async () => {
      try {
        // Use FetchStore for remote access to the Zarr dataset
        const store = new zarr.FetchStore('http://localhost:8002/tair.zarr');

        // Open the array at the root path (adjust as needed)
        const array = await zarr.open(store, { kind: 'array' });

        // Get the data for the desired slice (full array in this example)
        const view = await zarr.get(array, [null, null]); // Load a 2D slice
        setZarrData(view.data); // Save the Uint8Array to state
        setLoading(false);
      } catch (error) {
        console.error('Error loading Zarr data:', error);
        setLoading(false);
      }
    };

    loadZarrData();
  }, []);

  if (loading) {
    return <div>Loading Zarr data...</div>;
  }

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {zarrData && <ZarrLayer data={zarrData} />}
    </MapContainer>
  );
};

const ZarrLayer = ({ data }: { data: number[][] }) => {
  const map = useMap();

  useEffect(() => {
    if (data) {
      // Define geographic bounds for the data
      const imageBounds = [[-90, -180], [90, 180]]; // Adjust based on dataset extent

      // Create a canvas for rendering the Zarr data
      const canvas = document.createElement('canvas');
      canvas.width = data[0].length;
      canvas.height = data.length;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].length; j++) {
            const value = data[i][j]; // Zarr value at [i, j]
            const color = Math.floor((value / 255) * 255); // Normalize to 0-255 range
            const pixelIndex = (i * canvas.width + j) * 4;
            imageData.data[pixelIndex] = color; // Red
            imageData.data[pixelIndex + 1] = color; // Green
            imageData.data[pixelIndex + 2] = color; // Blue
            imageData.data[pixelIndex + 3] = 255; // Alpha (opacity)
          }
        }
        ctx.putImageData(imageData, 0, 0);
      }

      // Convert canvas to a data URL and display it on the map
      const imageUrl = canvas.toDataURL();
      L.imageOverlay(imageUrl, imageBounds).addTo(map);
    }
  }, [data, map]);

  return null;
};

export default Map;
