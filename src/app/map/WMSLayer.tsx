import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CustomWMSTileLayer = ({ rasterUrl }) => {
  const map = useMap();
  const bbox = useSelector((state:RootState) => state.draw.bbox);

  useEffect(() => {
    if (!rasterUrl) return;

    // Remove any existing WMS layer when rasterUrl changes
    map.eachLayer((layer) => {
      if (layer.wmsParams) {
        map.removeLayer(layer);
      }
    });

    // Create the WMS layer with the updated URL
    const wmsLayer = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
      layers: rasterUrl,
      format: "image/png",
      transparent: true,
      version: "1.1.1",
      tileSize: 512,
      noWrap: true,
      requestParams: {
        bbox: bbox.join(','),
        srs: 'EPSG:4326',
        width: 512,
        height: 512
    }
    //   bounds :  L.latLngBounds([bbox[1], bbox[0]], [bbox[3], bbox[2]]) ,
    });

    // Add the WMS layer to the map
    wmsLayer.addTo(map);
    map.setMaxBounds(bbox);
    map.fitBounds(bbox);
    // Cleanup the layer when component unmounts
    return () => {
      map.removeLayer(wmsLayer);
    };
  }, [map, rasterUrl]);

  return null; // Since we're adding the layer directly to the map, we return nothing here
};

export default CustomWMSTileLayer;
