import React, { useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import L, { GeoJSON as LeafletGeoJSON, LatLngTuple } from "leaflet";
import Papa from "papaparse";
import shp from "shpjs";
import "leaflet/dist/leaflet.css";
import toGeoJSON from "@mapbox/togeojson"; // You’ll need to install this for KML parsing
import { useDispatch } from "react-redux";
import { addOrUpdateGeojsonLayer } from "../../../store/features/layers";
// import { xml2json } from 'xml-js';
// import fromWKT  from 'ol/format/WKT'; 

type FileUploaderProps = {};

export default function FileUploader({}: FileUploaderProps) {
    const map = useMap();

    // Function to handle file upload
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files ? event.target.files[0] : null;
        
        if (uploadedFile) {
            const fileExtension = uploadedFile.name.split(".").pop()?.toLowerCase();
            const reader = new FileReader();

            reader.onload = (e) => {
                const fileContent = e.target?.result;
                if (!fileContent) return;

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
                        processShapefile(fileContent as ArrayBuffer);
                        break;
                    // case 'gpx':
                    //     processGPX(fileContent as string);
                    //     break;
                    // case 'wkt':
                    //     processWKT(fileContent as string);
                    //     break;
                    default:
                        alert("Unsupported file type.");
                        break;
                }
            };

            if (fileExtension === "zip") {
                reader.readAsArrayBuffer(uploadedFile);
            } else {
                reader.readAsText(uploadedFile);
            }
        }
    };

   
  
    const dispatch = useDispatch();
    // Function to process and add GeoJSON data
    const processGeoJSON = (geojsonData: any) => {
        dispatch(addOrUpdateGeojsonLayer(geojsonData))
        // setGeojsonLayers((prevLayers) => [...prevLayers, geojsonData]);
        map.fitBounds(L.geoJSON(geojsonData).getBounds() as LatLngTuple[]);
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

    // Helper function to convert CSV to GeoJSON
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


    // Function to process and add Shapefile data
    const processShapefile = async (arrayBuffer: ArrayBuffer) => {
        const geojsonData = await shp(arrayBuffer);
        processGeoJSON(geojsonData);
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            
        </div>
    );
}
