import { useEffect, useState } from 'react';
import { WMSTileLayer } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { updateLayerIndex } from '../../store/features/layers';
import { updateRasterUrl } from '../../store/features/rasterSlice';

const LayerPlayback = () => {
  const layerNames = useSelector((state: RootState) => state.form.rangeUrl);
  const currentLayerIndex = useSelector((state: RootState) => state.layer.currentLayerIndex);
  const colorMap = useSelector((state: RootState) => state.raster.colorMap);
  const player = useSelector((state: RootState) => state.layer.player);
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (player) {
      let fadeInterval = setInterval(() => {
        if (opacity > 0) {
          setOpacity(prevOpacity => Math.max(prevOpacity - 0.05, 0));
        } else {
          clearInterval(fadeInterval); // Clear interval once faded out
          const nextIndex = (currentLayerIndex + 1) % layerNames.length;
          dispatch(updateLayerIndex(nextIndex));
          dispatch(updateRasterUrl(layerNames[nextIndex]));
          setOpacity(1); // Reset opacity for next layer
        }
      }, 100); // Controls the speed of the fade

      return () => clearInterval(fadeInterval);
    }
  }, [player, currentLayerIndex, dispatch, layerNames.length, opacity]);

  return (
    <WMSTileLayer
      key={`layer-${currentLayerIndex}`}
      url="http://localhost:8080/geoserver/wms"
      layers={layerNames[currentLayerIndex]}
      format="image/png"
      styles={colorMap}
      noWrap={true}
      tileSize={512}
      transparent={true}
      opacity={opacity}
    />
  );
};

export default LayerPlayback;
