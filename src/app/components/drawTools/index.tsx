import { Button, Modal, ModalContent, ModalFooter, Textarea, Tooltip, useDisclosure } from "@nextui-org/react";
import { ModalHeader, ModalBody, Input } from "@nextui-org/react";

import { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import anime from "animejs";
import { useDispatch, useSelector } from "react-redux";
import { Marker, Polygon } from "react-leaflet";
import L, { LatLng, LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";
import drawTools from "./iconx";
import "leaflet-draw";

import "./index.scss"
import { RootState } from "../../../store/store";
import { updateBbox, updateCoorInput, updateDrawLayer, updateMarkerCoordinates, updateShape } from "../../../store/features/drawSlice";
import { updateOpenModal } from "../../../store/features/formSlice";
import Forms from "../forms";
import { Zoom } from "@mui/material";
import ZoomControl from "./zoomControl";
import Upload, { updateUpModal } from "../../../store/features/uploadSlice";
import UploadFile from "../upload";
import { addLayer, addOrUpdateLayer, removeLayer } from "../../../store/features/layers";
import FileUploader from "../upload/upload";
import LayerFeature from "./layerFeature";
import { message } from "antd";
import CompareForm from "../../map/compare/form";


const AddShapeToMap = ({ shape }) => {
  const map = useMap();
  const dispatch = useDispatch();
  const layers = useSelector((state: RootState) => state.layer.layers);
  const layerOpacity = layers?.["Polygon"]?.opacity ?? 0.08;
  const view = useSelector((state: RootState) => state.layer.layers?.["Polygon"]?.view);
  const compare = useSelector((state: RootState) => state.map.compare)
  useEffect(() => {
    if (shape && map) {
          if (shape.type === 'marker') {
        const latLng = shape.coordinates instanceof L.LatLng 
        ? shape.coordinates 
        : new L.LatLng(shape.coordinates[1], shape.coordinates[0]);
        dispatch(updateMarkerCoordinates(latLng))

        map.setView(shape.coordinates, 13);
      } else if (shape.type === 'polygon'  ) {
        const isValidCoordinates = shape.coordinates.every(coord => 
          Array.isArray(coord) && coord.length === 2 && 
          typeof coord[0] === 'number' && typeof coord[1] === 'number'
        );
        if(isValidCoordinates){
          dispatch(
            addOrUpdateLayer({
              name: 'Polygon',
              settings: {
                opacity: 0.5,
                colorRamp: 'yellow',
                view: true
              },
            }))
            const convertedCoordinates = shape.coordinates.map(([lng, lat]) => ({
              lat: lat,
              lng: lng
          }));
          const bounds = new L.LatLngBounds(convertedCoordinates);
            const boundingBox = [
              [bounds.getSouth(), bounds.getWest()], 
              [bounds.getNorth(), bounds.getEast()] 
            ];
    
            dispatch(updateBbox(boundingBox));
           
    
            map.fitBounds(bounds);
          dispatch(updateCoorInput([]))
            dispatch(updateShape({ type: 'polygon', coordinates: convertedCoordinates, search: false }));
        }

      }
      if (!shape.search && shape.type != '') {
        const timer = setTimeout(() => {
          // if (shape.length > 0) 
          dispatch(updateOpenModal(true));
        }, 1000);
        return () => clearTimeout(timer);
      }

    }
  }, [shape, map, dispatch]);

  if (!shape || !map) return null;
  
  return (
    <>
      {shape.type === 'marker' && <Marker position={shape.coordinates} />}

      {shape.type === 'polygon' && view && <Polygon positions={shape.coordinates} pathOptions={{
        color: 'blue',           
        fillColor: 'blue',       
        fillOpacity: layerOpacity, 
        opacity: 0.8             
      }} />}
      {
        compare === true ?  (<CompareForm/>) :
      (<Forms />)
      }

    </>
  );
};




export default function DrawFieldTools() {
  const map = useMap();
  const drawnItems = useRef(new L.FeatureGroup());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const shape = useSelector((state: RootState) => state.draw.shape);
  const coordinatesInput = useSelector((state: RootState) => state.draw.coordinatesInput);
  const drawLayer = useSelector((state: RootState) => state.draw.drawLayer);
  const addRaster = useSelector((state: RootState) => state.raster.addRaster);
  const addChart = useSelector((state: RootState) => state.analysis.addChart);
  const rasterData = useSelector((state: RootState) => state.form.rangeData);
  var drawControl = "";
  const sidebar = useSelector((state: RootState) => state.raster.sidebar)


  useEffect(() => {
    if (!map) return;
    if (drawLayer) {
      drawControl = new L.Draw.Polygon(map, {
        allowIntersection: false,
        repeatMode: false,
        shapeOptions: {
          color: "#F5D152",
          weight: 4,
          opacity: 0.7,
        },
        showArea: true,
        metric: false,
      });

      drawControl.enable();

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        const latlngs = layer.getLatLngs();

        let serializedLatlngs = Array.isArray(latlngs[0])
          ? latlngs.flat().map((latlng) => ({
            lat: latlng.lat,
            lng: latlng.lng,
          }))
          : latlngs.map((latlng) => ({
            lat: latlng.lat,
            lng: latlng.lng,
          }));
        const bounds = layer.getBounds();

        const boundingBox = [
          [bounds.getSouth(), bounds.getWest()], 
          [bounds.getNorth(), bounds.getEast()]  
        ];

        dispatch(updateBbox(boundingBox));
        dispatch(
          addOrUpdateLayer({
            name: 'Polygon',
            settings: {
              opacity: 0.5,
              colorRamp: 'yellow',
              view: true
            },
          }))
        dispatch(updateShape({ type: 'polygon', coordinates: serializedLatlngs, search: false }));
        dispatch(updateOpenModal(true));
        dispatch(updateDrawLayer(false));
        layer.enableEdit();
      });

      return () => {
        map.off(L.Draw.Event.CREATED);
        drawControl.disable();
      };
    }
  }, [drawLayer]);


  const addCoordinates = () => {
    if (!map) return;
    map.once('click', (e) => {
      const { latlng } = e;
      dispatch(updateShape({ type: 'marker', coordinates: latlng, search: false }));
      dispatch(updateMarkerCoordinates(latlng))
    });

  };

  const handleRemoveAll = () => {
    drawnItems.current.clearLayers();
    // dispatch(removeLayer())
    dispatch(updateShape(null));
    dispatch(updateDrawLayer(false));
    drawControl.disable();

  };
  const handleAddShape = () => {
    try {
      const parsedInput = JSON.parse(coordinatesInput);
      
      if (Array.isArray(parsedInput) && parsedInput.length === 2 && typeof parsedInput[0] === 'number' && typeof parsedInput[1] === 'number') {
        dispatch(updateShape({ type: 'marker', coordinates:[parsedInput[1], parsedInput[0]] , search: false }));
      }
      else if (Array.isArray(parsedInput) && parsedInput.every(coord => Array.isArray(coord) && coord.length === 2)) {
        dispatch(updateShape({ type: 'polygon', coordinates: parsedInput, search: false }));
      } else {
        message.error("Invalid coordinates format. Please provide a point [lat, lon] or a polygon [[lat1, lon1], [lat2, lon2], ...].");
      }
      onClose();
    } catch (error) {
      message.error("Invalid input. Ensure the input is a valid JSON format: [lat, lon] for points or [[lat1, lon1], [lat2, lon2], ...] for polygons.");
    }
  };
  return (
    <div className="flex flex-col justify-between">

      <div
        className={`tooltip-container ${sidebar || addChart ? "right-[30rem]" : "right-4"
          } bg-bg absolute top-0 mt-6 w-[2.6rem] h-[20%]  md:h-[20%] lg:h-[25%] xl:h-[30%] rounded-full flex p-4 flex-col items-center justify-between`}
      >
        {drawTools.map((v) => (
          <Tooltip
            key={v.info}
            showArrow
            content={v.info}
            placement="left-start"
          >
            <Button
              isIconOnly
              className="bg-transparent hover:bg-gray-200 transition"
              onClick={() => {
                switch (v.info) {
                  case "Draw Polygon":
                    dispatch(updateDrawLayer(true));
                    drawControl.enable();
                    break;
                  case "Add Coordinates":
                    onOpen();
                    break;
                  case "Upload File":
                    dispatch(updateUpModal(true));
                    break;
                  case "Delete layer":
                    handleRemoveAll();
                    break;
                  case "Pin Marker":
                    addCoordinates();
                    <AddShapeToMap shape={shape}></AddShapeToMap>;
                    break;
                  default:
                    break;
                }
              }}
            >
              <img src={v.icon} className="lg:w-[50%] sm:w-[40%] md:w-[45%] w-[40%] " />
            </Button>
          </Tooltip>
        ))}
      </div>

      <div className={`  ${sidebar || addChart ? "right-[30rem]" : "right-4 "} zoom-container bg-bg absolute mt-14 lg:mt-[130px] xl:mt-26  w-[2.5rem]  h-[7%] lg:h-[9%] md:h-[7%] sm:h-[6%] rounded-full flex p-4  flex-col items-center justify-center`}>
        <ZoomControl />
      </div>
      {
        rasterData && rasterData.length > 0 &&
        <div className={`  ${sidebar || addChart ? "right-[30rem]" : "right-4 "} zoom-container bg-bg absolute  lg:mt-[220px] mt-[160px] w-[2.5rem] h-[9%] rounded-full flex p-4  flex-col items-center justify-center`}>
          <LayerFeature />
        </div>
      }
      <AddShapeToMap shape={shape} />
      <Modal
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
      >

        <ModalContent className="flex justify-center items-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Input Coodinates</ModalHeader>
              <ModalBody>

                <Textarea
                  value={coordinatesInput}
                  onChange={(e) => dispatch(updateCoorInput(e.target.value))}
                  label=" Enter coordinates (e.g., [51.505, -0.09] or [[51.5, -0.1], [51.5, -0.12], ...])"
                  className="max-w-xs"
                />

              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAddShape}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <UploadFile />
    </div>
  );
}
