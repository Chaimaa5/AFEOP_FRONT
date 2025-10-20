// import { useEffect } from "react";
// import { Marker, Polygon, useMap } from "react-leaflet";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store/store";
// import { addOrUpdateLayer } from "../../../store/features/layers";
// import { updateOpenModal } from "../../../store/features/formSlice";
// import Forms from "../forms";

// const AddShapeToMap = ({ shape }: { shape: any }) => {
//   const map = useMap();
//   const dispatch = useDispatch();
//   const layers = useSelector((state: RootState) => state.layer.layers);
//   const layerOpacity = layers?.["Polygon"]?.opacity ?? 0.08;
//   const view = layers?.["Polygon"]?.view;

//   useEffect(() => {
//     if (shape && map) {
//       if (shape.type === "marker") {
//         map.setView(shape.coordinates, 13);
//       } else if (shape.type === "polygon") {
//         map.fitBounds(shape.coordinates);
//         dispatch(
//           addOrUpdateLayer({
//             name: "Polygon",
//             settings: {
//               opacity: 0.5,
//               colorRamp: "yellow",
//               view: true,
//             },
//           })
//         );
//       }
//       if (!shape.search && shape.type) {
//         const timer = setTimeout(() => {
//           dispatch(updateOpenModal(true));
//         }, 1000);
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [shape, map, dispatch]);

//   if (!shape || !map) return null;

//   return (
//     <>
//       {shape.type === "marker" && <Marker position={shape.coordinates} />}
//       {shape.type === "polygon" && view && (
//         <Polygon
//           positions={shape.coordinates}
//           pathOptions={{
//             color: "blue",
//             fillColor: "blue",
//             fillOpacity: layerOpacity,
//             opacity: 0.8,
//           }}
//         />
//       )}
//       <Forms />
//     </>
//   );
// };

// export default AddShapeToMap;
