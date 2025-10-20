import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import L from "leaflet";
import AddShapeToMap from "./AddShape";
import DrawTools from "./DrawTools";
import ModalCoordinatesInput from "./ModalCoordinates";
import LayerFeature from "./layerFeature";
import { RootState } from "../../../store/store";
import { updateShape } from "../../../store/features/drawSlice";

export default function DrawFieldTools() {
  const map = useMap();
  const drawnItems = useRef(new L.FeatureGroup());
  const dispatch = useDispatch();
  const drawLayer = useSelector((state: RootState) => state.draw.drawLayer);

  let drawControl: any;

  useEffect(() => {
    if (!map) return;
    if (drawLayer) {
      drawControl = new L.Draw.Polygon(map, { allowIntersection: false });
      drawControl.enable();

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        dispatch(updateShape({ type: "polygon", coordinates: layer.getLatLngs(), search: false }));
      });

      return () => {
        map.off(L.Draw.Event.CREATED);
        drawControl.disable();
      };
    }
  }, [drawLayer]);

  const addCoordinates = () => map.once("click", ({ latlng }) => dispatch(updateShape({ type: "marker", coordinates: latlng })));

  const handleRemoveAll = () => {
    drawnItems.current.clearLayers();
    dispatch(updateShape(null));
  };

  return (
    <div className="bg-red-400">
      <DrawTools drawControl={drawControl} addCoordinates={addCoordinates} handleRemoveAll={handleRemoveAll} />
      <LayerFeature />
      <ModalCoordinatesInput />
    </div>
  );
}
