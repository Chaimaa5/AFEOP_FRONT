import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as zarr from 'zarr';

const Map = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [bounds, setBounds] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const store = new zarr.HTTPStore('http://localhost:8001/tair.zarr/');
        const group = await zarr.openGroup(store);

        const t2m = await group.getItem('T2M');
        const lat = await group.getItem('lat');
        const lon = await group.getItem('lon');

        if (!t2m || !lat || !lon) {
          throw new Error('Missing T2M, lat, or lon data');
        }

        // Fetch raw data
        const t2mData = await t2m.getRaw([0, null, null]); // Adjust slicing if needed
        const latData = await lat.getRaw();
        const lonData = await lon.getRaw();

        console.log('T2M data:', t2mData);
        console.log('Lat data:', latData);
        console.log('Lon data:', lonData);

        // Reshape T2M to match lat/lon dimensions
        const t2mArray = Array.from(t2mData.data);
        const rows = latData.shape[0];
        const cols = lonData.shape[0];
        const reshapedT2M = [];

        for (let i = 0; i < rows; i++) {
          reshapedT2M.push(t2mArray.slice(i * cols, (i + 1) * cols));
        }


        // Generate image and bounds
        const image = generateImageFromData(reshapedT2M, -9999);
        const imageUrl = image.toDataURL();

        setBounds([
          [Math.min(...latData.data), Math.min(...lonData.data)],
          [Math.max(...latData.data), Math.max(...lonData.data)],
        ]);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error loading Zarr data:', error);
      }
    };

    fetchData();
  }, []);

  const generateImageFromData = (data: number[][], nodataValue: number | null = null) => {
    const rows = data.length;
    const cols = data[0].length;
  
    const canvas = document.createElement('canvas');
    canvas.width = cols;
    canvas.height = rows;
  
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(cols, rows);
  
    const flatData = data.flat();
    const validData = flatData.filter(value => value !== nodataValue && !isNaN(value));
  
    const max = Math.max(...validData);
    const min = Math.min(...validData);
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const value = data[rows - 1 - i][j]; // Flip vertically
  
        const index = (i * cols + j) * 4;
        if (value === nodataValue || isNaN(value) || value > max || value < min) {
          // Set transparent color for nodata values
          imageData.data[index + 3] = 0; // Alpha
        } else {
          // Normalize value to [0, 1]
          const normalizedValue = (value - min) / (max - min);
          const color = Math.round(normalizedValue * 255);
  
          imageData.data[index] = color; // Red
          imageData.data[index + 1] = 0; // Green
          imageData.data[index + 2] = 255 - color; // Blue
          imageData.data[index + 3] = 255; // Alpha (opaque)
        }
      }
    }
  
    ctx.putImageData(imageData, 0, 0);
    return canvas;
  };
  
  return (
    <MapContainer
      center={[0, 0]} // Adjust as per your dataset
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {imageUrl && bounds && (
        <ImageOverlay url={imageUrl} bounds={bounds}  />
      )}
    </MapContainer>
  );
};

export default Map;
