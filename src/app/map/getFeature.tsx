import { useEffect, useState } from "react";
import { Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import markerIcn from "../../assets/icons/marker.svg";

export default function GetFeature({rasterUrl}) {
    const map = useMap();
    // const [popupContent, setPopupContent] = useState();
    const [popupPosition, setPopupPosition] = useState();
    const [popupContent, setPopupContent] = useState<string | null>(null);
    // const [popupPosition, setPopupPosition] = useState<{ lat: number; lng: number } | null>(null);

    const unit = useSelector((state: RootState) => state.form.unit);
    const handleMapClick = (e) => {
      const latlng = e.latlng;
      const url = `http://localhost:8080/geoserver/wms/?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=${rasterUrl}` +
                  `&QUERY_LAYERS=${rasterUrl}&STYLES=&BBOX=${map.getBounds().toBBoxString()}` +
                  `&FEATURE_COUNT=1&HEIGHT=${map.getSize().y}&WIDTH=${map.getSize().x}` +
                  `&FORMAT=image/png&INFO_FORMAT=application/json&SRS=EPSG:4326&X=${Math.round(e.containerPoint.x)}` +
                  `&Y=${Math.round(e.containerPoint.y)}`;

      console.log("url", url);

      // Make an AJAX request to GeoServer
      fetch(url)
      .then(response => response.json())
      .then(data => {
        let content : any = 'No data available';
  
        if (data.features && data.features.length > 0) {
          const properties = data.features[0].properties;
          const firstKey = Object.keys(properties)[0];
          const firstValue = properties[firstKey];
          content = `${firstValue.toFixed(2)}`;
          setPopupContent(content);
          setPopupPosition(latlng);
        }
         else {
          // 🛠️ No feature = don't show popup
          setPopupContent(null);
          setPopupPosition(null);
      }
  
     
      })
      .catch(err => {
        console.error('Error fetching GeoServer data:', err);
      });
    };
    useEffect(() => {
  
      map.on('click', handleMapClick);
  
      return () => {
        map.off('click', handleMapClick);
      };
    }, [map, rasterUrl]);
    return (
      <>
        {popupContent && popupPosition && (
          <Popup position={popupPosition} onClose={() => setPopupContent(null)}  >
          <div className="flex space-y-0 space-x-4 items-center justify-center w-full  ">
              <div className="flex space-x-4">
                  <div className="flex flex-col space-x-4 items-center">
                      <p className="text-sm text-gray-500">Coordinates</p>
                      <p className="font-poppins font-semibold">
                          {popupPosition.lat.toFixed(2)}, {popupPosition.lng.toFixed(2)}
                      </p>
                  </div>
                  <div className="flex flex-col space-x-4 items-center">
                      <p className="text-sm text-gray-500">Value</p>
                      <p className="font-poppins font-semibold">
                          {popupContent}
                      </p>
                  </div>
              </div>
          </div>
      </Popup>
         
        )}
      </>
    );
  };
  