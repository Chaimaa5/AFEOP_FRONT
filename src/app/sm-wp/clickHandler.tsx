import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

const ClickHandler = ({ rasterUrls, setBreakpoint, setRegime, setPopupPosition }) => {
  const map = useMap();

  
  useEffect(() => {
    const handleMapClick = async (e) => {
      const latlng = e.latlng;
      const bbox = map.getBounds().toBBoxString();
      const size = map.getSize();
      const x = Math.round(e.containerPoint.x);
      const y = Math.round(e.containerPoint.y);

      const results = await Promise.all(
        rasterUrls.map(async (layer) => {
          const url = `http://localhost:8080/geoserver/wms/?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=${layer}` +
                      `&QUERY_LAYERS=${layer}&STYLES=&BBOX=${bbox}` +
                      `&FEATURE_COUNT=1&HEIGHT=${size.y}&WIDTH=${size.x}` +
                      `&FORMAT=image/png&INFO_FORMAT=application/json&SRS=EPSG:4326&X=${x}&Y=${y}`;
          try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
              const properties = data.features[0].properties;
              const firstKey = Object.keys(properties)[0];
              const firstValue = properties[firstKey];
              if (layer === 'ET:RegimeHydrologique') {
                layer = 'Hydrological Regime';
                setRegime(firstValue);
                console.log("Regime Hydrologique", firstValue);
              }
              else{
                setBreakpoint(firstValue.toFixed(2) );
              }
              // return { layer, value: firstValue.toFixed(2) };
            } else {
              return { layer, value: 'No data' };
            }
          } catch (err) {
            console.error(`Error fetching GeoServer data for ${layer}:`, err);
            return { layer, value: 'Error' };
          }
        })
      );

      // setPopupContent(results);
      setPopupPosition(latlng);
    };

    map.on('click', handleMapClick);
    return () => map.off('click', handleMapClick);
  }, [map, rasterUrls]);

  return null;
};

export default ClickHandler;
