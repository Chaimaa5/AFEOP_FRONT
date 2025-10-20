import React, { useEffect, forwardRef, MutableRefObject } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-geotiff-2';
import 'leaflet-geotiff-2/dist/leaflet-geotiff-plotty';

type GeotiffLayerProps = {
  url: string;
  options: any;
};

// Properly typed forwardRef for TypeScript with a default ref type of any (adjust as needed)
const GeotiffLayer = forwardRef<MutableRefObject<L.LeafletGeoTIFF | null>, GeotiffLayerProps>(
  ({ url, options }, ref) => {
    const map = useMap();

    useEffect(() => {
      const geotiffLayer = L.leafletGeoTIFF(url, options);
      
      // Check if ref is a mutable object and assign the current layer
      if (ref && typeof ref === 'object' && ref.current !== undefined) {
        (ref as MutableRefObject<L.LeafletGeoTIFF | null>).current = geotiffLayer;
      }

      geotiffLayer.addTo(map);

      return () => {
        map.removeLayer(geotiffLayer);
      };
    }, [map, url, options, ref]);

    return null;
  }
);

export default GeotiffLayer;
