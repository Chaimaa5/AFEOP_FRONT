import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";
// import './index.scss';
import { useDispatch, useSelector } from "react-redux";
// import chroma from 'chroma-js';
import "leaflet-geotiff";
import "leaflet-rastercoords";
import "geotiff";

// import chroma from "chroma-js";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import { RootState } from "../../../store/store";
function GeoRaster() {
  const mapRef = useMap();
  const [layer, setLayer] = useState(null);
  const response = useSelector((state: RootState) => state.form.response);
  const addRaster = useSelector((state: RootState) => state.raster.addRaster);
  useEffect(() => {

    if (!addRaster) {
      if (layer) {
        layer.remove();
        setLayer(null);
        return
      }
    }
    // if (response.path) {
      const path = "http://localhost:8000/cog/preview?url=http://localhost:8001/cog_SMAP_SAR_MTDCA_SM_%_2D_Africa_20210702_FUS_10km.tif";
      fetch(path)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          parseGeoraster(arrayBuffer).then((georaster) => {
            // const min = response.min;
            // const max = response.max;
            
            // var colorScale = chroma.scale(["#d6e633", "#d67533"]);

            // if (selectedOption === "LST") {
            //   colorScale = chroma
            //     .scale([
            //       '#FF0000', '#FF7F00', '#FFFF00', '#EA0D01'

            //     ])
            //     .domain([min, max]);
            // }
            // if (selectedOption === "SM") {
            //   colorScale = chroma
            //     .scale(['#00008F', '#0000FF', '#007FFF', '#00FFFF', '#7FFF7F',
            //       '#FFFF00'])
            //     .domain([min, max]);
            // }
            // if (selectedOption === "NDVI") {

            //   colorScale = chroma
            //   .scale(['#00008F', '#0000FF', '#007FFF', '#00FFFF', '#7FFF7F',
            //   '#FFFF00'])
            //     .domain([-1, 1]);
            // }
            // if (selectedOption === "PR") {

            //   colorScale = chroma
            //     .scale(['#8B0000', '#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#8B00FF'])
            //     .mode('lab')
            //     .domain([min, max]);
            // }
            // if (selectedOption === "ET") {
            //   console.log(min, max);
            //   var colorScale = chroma
            //     .scale(['blue', '#00fafa', 'yellow', 'red'])
            //     .domain([min, max]);
            // }
            let newLayer = new GeoRasterLayer({
              georaster: georaster,
              opacity: 0.8,
              pixelValuesToColorFn: function (pixelValues) {
                var pixelValue = pixelValues[0];
                // if (
                //   (pixelValue < -1 || pixelValue > 1 ) &&
                //   selectedOption === "NDVI"
                // )
                //   return "rgba(0, 0, 0, 0)";
                // if (
                //   (pixelValue < -76 || pixelValue > 99) &&
                //   selectedOption === "LST"
                // )
                //   return "rgba(0, 0, 0, 0)";
                // if (
                //   (pixelValue < -1 || pixelValue > 1) &&
                //   selectedOption === "SM"
                // )
                //   return "rgba(0, 0, 0, 0)";
                // if (
                //   (pixelValue < 0 || pixelValue > 100) &&
                //   selectedOption === "PR"
                // )
                //   return "rgba(0, 0, 0, 0)";
                // if (
                //   (pixelValue < 0 || pixelValue >120) &&
                //   selectedOption === "ET"
                // )
                //   return "rgba(0, 0, 0, 0)";

                // const colorForPixel = colorScale(pixelValue).hex();

                return pixelValue;
              },
              resolution: 128,
            });
            setLayer(newLayer);
            newLayer.addTo(mapRef);
            mapRef.fitBounds(newLayer.getBounds());
          });
        });
    // }
  });
  return null;
}

export default GeoRaster;
