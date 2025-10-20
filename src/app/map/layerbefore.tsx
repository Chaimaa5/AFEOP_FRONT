import { useEffect, useState } from 'react';
import { WMSTileLayer } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateLayerIndex } from '../../store/features/layers';

const LayerPlayback = () => {
  const layerNames = useSelector((state: RootState) => state.form.rangeUrl);
  const currentLayerIndex = useSelector((state: RootState) => state.layer.currentLayerIndex);
  const dispatch = useDispatch();
  const [currentLayerOpacity, setCurrentLayerOpacity] = useState(1);
  const [nextLayerOpacity, setNextLayerOpacity] = useState(0);
  const [nextLayerIndex, setNextLayerIndex] = useState((currentLayerIndex + 1) % layerNames.length);
  const colorMap = useSelector((state: RootState) => state.raster.colorMap);

  useEffect(() => {
    if (layerNames.length > 1) {
      const interval = setInterval(() => {
        if (currentLayerOpacity > 0 && nextLayerOpacity < 1) {
          setCurrentLayerOpacity(currentLayerOpacity => Math.max(0, currentLayerOpacity - 0.1));
          setNextLayerOpacity(nextLayerOpacity => Math.min(1, nextLayerOpacity + 0.1));
        } else {
          dispatch(updateLayerIndex(nextLayerIndex));
          setCurrentLayerOpacity(1);
          setNextLayerOpacity(0);
          setNextLayerIndex((nextLayerIndex + 1) % layerNames.length);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentLayerOpacity, nextLayerOpacity, nextLayerIndex, layerNames, dispatch]);

  return (
    <>
      <WMSTileLayer
        key={`layer-${currentLayerIndex}`}
        url={`http://localhost:8080/geoserver/wms`}
        layers={layerNames[currentLayerIndex]}
        format="image/png"
        tileSize={512}
        styles={colorMap}
        transparent={true}
        opacity={currentLayerOpacity}
      />
      <WMSTileLayer
        key={`layer-${nextLayerIndex}`}
        url={`http://localhost:8080/geoserver/wms`}
        layers={layerNames[nextLayerIndex]}
        format="image/png"
        tileSize={512}
        styles={colorMap}
        transparent={true}
        opacity={nextLayerOpacity}
      />
    </>
  );
};

export default LayerPlayback;
