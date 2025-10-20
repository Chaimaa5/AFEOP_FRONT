import React, { useRef, useState } from "react";
import "./index.css";
import { GeoJSON, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import Papa from "papaparse";
import shp from "shpjs";

import "leaflet/dist/leaflet.css";
import toGeoJSON from "@mapbox/togeojson"; // You’ll need to install this for KML parsing
import { useDispatch } from "react-redux";
import { addOrUpdateGeojsonLayer, addOrUpdateLayer } from "../../../store/features/layers";
import trash from "../../../assets/icons/trash.svg";
import uploadIcn from "../../../assets/icons/export.svg";
import checkIcn from "../../../assets/icons/verify.svg";
import { alertUpload, setAlertMessage } from "../../../store/features/alert";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { RootState } from "../../../store/store";
import { updateBbox, updateShape } from "../../../store/features/drawSlice";
import { updateUpModal } from "../../../store/features/uploadSlice";
const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");
  const map = useMap();
  const dispatch = useDispatch();
  const uploadAlert = useSelector((state:RootState) => state.alert.upload);
  const alertMessage = useSelector((state: RootState) => state.alert.message);

  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files ? event.target.files[0] : null;
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split(".").pop()?.toLowerCase();
      const reader = new FileReader();

      reader.onload = async (e) => {
        const fileContent = e.target?.result;
        if (!fileContent) return;
        dispatch(alertUpload(false))
        switch (fileExtension) {
          case "geojson":
            processGeoJSON(JSON.parse(fileContent as string));
            break;
          case "kml":
            processKML(fileContent as string);
            break;
          case "csv":
            processCSV(fileContent as string);
            break;
          case "zip": // Assuming shapefile is uploaded as a zip
            await processShapefile(fileContent as ArrayBuffer);
            break;
          // case 'gpx':
          //     processGPX(fileContent as string);
          //     break;
          // case 'wkt':
          //     processWKT(fileContent as string);
          //     break;
          default:
            dispatch(alertUpload(true))
            dispatch(setAlertMessage("Unsupported file type."))
            clearFileInput();
            break;
        }
      };

      // Read the file and set progress
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = (event.loaded / event.total) * 100;
          setProgress(Math.round(percentCompleted));
        }
      };

      // Handle file read based on the extension
      if (fileExtension === "zip") {
        reader.readAsArrayBuffer(uploadedFile);
      } else {
        reader.readAsText(uploadedFile);
      }

      setSelectedFile(uploadedFile);
    }
  };

  // Function to process and add GeoJSON data
  const processGeoJSON = (geojsonData: any) => {
    dispatch(updateBbox(geojsonData.features[0].geometry.bbox));
    dispatch(addOrUpdateGeojsonLayer(geojsonData));
    map.fitBounds(L.geoJSON(geojsonData).getBounds() as LatLngTuple[]);
    dispatch(
      addOrUpdateLayer({
        name: geojsonData.features[0].properties.name,
        settings: {
          opacity: 0.5,
          colorRamp: "yellow",
          view: true,
        },
      })
    );

  };

  // Function to process and add KML data
  const processKML = (kmlContent: string) => {
    const parser = new DOMParser();
    const kmlData = parser.parseFromString(kmlContent, "text/xml");
    const geojsonData = toGeoJSON.kml(kmlData);
    processGeoJSON(geojsonData);
  };

  // Function to process and add CSV data
  const processCSV = (csvContent: string) => {
    Papa.parse(csvContent, {
      header: true,
      complete: (results) => {
        const geojsonData = csvToGeoJSON(results.data);
        processGeoJSON(geojsonData);
      }
    });
  };

  // Helper function to convert CSV to GeoJSON with additional checks
  const csvToGeoJSON = (data: any[]) => {
    return {
      type: "FeatureCollection",
      features: data
        .filter((row) => row.latitude && row.longitude) // Ensure latitude and longitude exist
        .map((row) => {
          const lat = parseFloat(row.latitude);
          const lng = parseFloat(row.longitude);

          // Ensure lat and lng are valid numbers
          if (isNaN(lat) || isNaN(lng)) {
            console.warn("Invalid latitude or longitude in row:", row);
            return null;
          }

          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat] // GeoJSON format is [longitude, latitude]
            },
            properties: { ...row }
          };
        })
        .filter((feature) => feature !== null) // Filter out invalid features
    };
  };

  const processShapefile = async (arrayBuffer: ArrayBuffer) => {
    const geojsonData = await shp(arrayBuffer);
    processGeoJSON(geojsonData);
  };
  const layerRef = useRef(null);

  const clearFileInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
    if (layerRef.current) {
      layerRef.current.removeFrom(map); // Assumes `map` is the Leaflet map instance
      layerRef.current = null;          // Reset layer reference
    }
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
        dispatch(updateShape({ type: 'geojson', coordinates: null, search: false }));
        dispatch(updateUpModal(false));
      return;
    }

    setUploadStatus("uploading");

    // Simulate upload process (add your actual upload logic here)
    setTimeout(() => {
      setUploadStatus("done");
      setProgress(100);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <div>
      {uploadAlert && <Alert severity="error" className="mb-4">{alertMessage}</Alert>}
      
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />

      {!selectedFile && (
        <button className="file-btn" onClick={() => inputRef.current?.click()}>
          <span className="material-symbols-outlined"><img src={uploadIcn} className="w-[40%]" /></span>
          
           <p className="font-poppins "> Upload File</p>

           <p className="font-poppins font-light text-xs">Accepted extensions: .geojson, .kml, .csv, .zip(.shp, .shx, .dbx, .prj)</p>
          
        </button>
      ) }

      {selectedFile && (
        <>
          <div className="file-card">
            <span className="material-symbols-outlined icon"></span>

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <img src={trash}/>
                  {/* <span className="material-symbols-outlined close-icon">close</span> */}
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <img src={checkIcn} className="w-[50%]" />
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className="upload-btn rounded-full" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Validate" : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
