// import { Tabs } from "antd";
import { Button, Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import Chart from "../../station/chart";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
// import Operations from "./operations";
import marker from "../../../assets/icons/marker.svg"
import addMarker from "../../../assets/icons/location-add.svg"
import Axios from "../../api/axios";
import { alertInterval, setAlertMessage } from "../../../store/features/alert";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { Marker, Popup, Tooltip, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "./index.css";
import arrow from "../../../assets/icons/arrow.svg";

import { updateAddchart } from "../../../store/features/analysisSlice";
import { updateDrawLayer, updateMarkerCoordinates, updateShape } from "../../../store/features/drawSlice";
import { updateOpenModal } from "../../../store/features/formSlice";
import { message } from "antd";
export default function PixelCharts() {
  const selectedOption = useSelector((state: any) => state.form.selectedOption);
  const response = useSelector((state: any) => state.form.response);
  const dispatch = useDispatch();
  const markerCoordinates = useSelector((state: RootState) => state.draw.markerCoordinates);
  const start = useSelector((state: RootState) => state.form.startDate);
  const end = useSelector((state: RootState) => state.form.endDate);
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
  const [position, setPosition] = useState<{ lat: number; lng: number }>(markerCoordinates);
  const [isResizing, setIsResizing] = useState(false);
  const map = useMap();
  const [chartData, setChartData] = useState([
    {
      name: JSON.stringify(`${markerCoordinates.lat.toFixed(3)}, ${markerCoordinates.lng.toFixed(3)}`),
      data: response.values,
    },
  ]);


  const handleMouseUp = () => {
    setIsResizing(!isResizing);
  };

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    fill: {
      type: 'solid',
      color: '#0088ee',
      // opacity: [0.35, 0.05, 1],
    },
    plotOptions: {
      line: {
        colors: {
          threshold: 0,
          colorAboveThreshold: '#0088ee',
          colorBelowThreshold: '#ff0000',
        },
      },
    },
    title: {
      text: `${selectedOption} Values`,
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val: string, opts: any) {
        return `${val} - <strong>${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}</strong>`;
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      type: 'datetime',
      categories: response.period,
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), 'dd MMM HH')
        }
      }
    },
    yaxis: {
      title: {
        text: response.unit,
        style: {
          fontSize: '14px',
          fontWeight: 600
        }
      },
      labels: {
        formatter: function (val: string) {
          return `${val} `;
        }
      }
    },
    
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: string) {
              return `${val} ${response.unit}`;
            }
          }
        },

      ],
      x: {
        format: 'dd MMM HH'
      }
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };

  const clearAll = () => {
    dispatch(updateAddchart(false))
    dispatch(updateOpenModal(false));
    dispatch(updateShape(null));
    dispatch(updateDrawLayer(false));
  };



  const appendDataToChart = (newData, position) => {
    setChartData((prevData) => {
      // Check if the new data series is longer than any existing series
      const newDataLength = newData.values.length;
      const maxExistingDataLength = prevData.reduce((max, series) => Math.max(max, series.data.length), 0);
  
      if (newDataLength > maxExistingDataLength) {
        // If new data is longer, reset chart data to only include the new series
        message.error('Data is missing or inconsistent')
        return [...prevData]; 
      } else {
        return [
          ...prevData,
          {
            name: JSON.stringify(`${position.lat.toFixed(3)}, ${position.lng.toFixed(3)}`),
            data: newData.values
          }
        ];
      }
    });
  };
  


  // Get the map instance
  const AddMarker = () => {
    setIsPlacingMarker(true);
    map.once("click", (e: L.LeafletMouseEvent) => {
      let newMarker = e.latlng;
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    });
  }
  const [isPlacingMarker, setIsPlacingMarker] = useState(false);
  const [mousePosition, setMousePosition] = useState<[number, number] | null>(null);

 


  const MapEvents = () => {
    useMapEvents({
      click(e) {
        if (isPlacingMarker) {
          const newPosition = { lat: e.latlng.lat, lng: e.latlng.lng };
          setPosition(newPosition); // Update state
          setIsPlacingMarker(false);
          setMousePosition(null);
  
          console.log("newPosition", newPosition);
  
          // Make the API request directly here
          const formData = new FormData();
          formData.append("start_date", start);
          formData.append("end_date", end);
          formData.append("product", selectedOption);
          formData.append("lat", JSON.stringify(newPosition.lat));
          formData.append("lng", JSON.stringify(newPosition.lng));
  
          Axios.post("rasters/pixel/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
            .then((response) => {
              if (response.status === 200) {
                const newData = response.data;
                appendDataToChart(newData, newPosition); // Pass position to chart
              }
            })
            .catch((error) => {
              dispatch(alertInterval(true));
              dispatch(setAlertMessage("No data available for the selected date"));
            });
        }
      },
    });
    return null;
  };
  

  
  return (
    <div className="flex flex-row items-start justify-end    w-[100%] h-[100%]  rounded-3xl  ">

      <div className="flex flex-row relative justify-center items-center max-w-[1000px] h-[100%] "  >

        <button
          onClick={handleMouseUp}
          className={`flex justify-center items-center absolute left-[-17.5px] top-[50%] transform -translate-y-1/2 h-[35px] w-[35px] z-10 bg-[#1F3D3D] text-white rounded-full ${isResizing ? 'cursor-e-resize' : 'cursor-w-resize'
            }`}
        >
          <img src={arrow} className={`w-[60%] ${isResizing ? 'rotate-180' : ''}`} />
        </button>
        <Card
          className={`flex flex-col bg-[#F8FCFF] items-center flex-wrap p-4 border-none h-[100%] shadow-none transition-all duration-300 ease-in-out ${isResizing ? 'w-[100rem]' : 'w-[30rem]'
            }`}
          style={{ transition: 'width 0.3s ease-in-out' }}
        >
          <CardHeader className="flex justify-end items-end space-x-4">

            <Button className="flex self-end  bg-darkblue text-white rounded-full" size="md" onClick={AddMarker}>Add
              <img src={addMarker} alt="plus" className="w-[30%]  ml-2" />
              <MapEvents />
              {isPlacingMarker && mousePosition && (
                <Marker position={mousePosition} icon={L.divIcon({ className: 'hidden-icon' })}>
                  <Tooltip permanent>
                    Lat: {mousePosition[0].toFixed(5)}, Lng: {mousePosition[1].toFixed(5)}
                  </Tooltip>
                </Marker>
              )}
              {markers.map((position, index) => (
                <Marker
                  key={index}
                  position={[position.lat, position.lng]}
                  icon={L.icon({
                    iconUrl: marker,
                    iconSize: [38, 95],
                    // iconAnchor: [22, 94],
                    // popupAnchor: [-3, -76],
                  })}
                >
                
                  <Popup offset={[0, -10]} opacity={1} permanent={false} className="border-none ">
                  <div className="flex  space-y-0 space-x-4 items-center justify-start w-[140px] ">
                <img src={marker} className="flex w-[30%]" />
                <div className="flex flex-col">
                  <p className='font-poppins font-semibold '>Point</p>
                 
                    Lat: {position.lat.toFixed(4)}<br/> Lng: {position.lng.toFixed(4)}
                </div>
              </div>
                  </Popup>
                </Marker>
              ))}
            </Button>
            <button
              onClick={clearAll}
              className={`flex justify-center items-center self-end h-[40px] w-[40px] z-10 bg-red-600 text-white rounded-full 'cursor-e-resize' 
              `}
            >
              <img src={arrow} className={`w-[40%] rotate-180 `} />
            </button>
          </CardHeader>
   
          <CardBody>

            <ReactApexChart
              options={options}
              series={chartData}
              width="100%"
              type="line"
              height="90%" className=' flex justify-center items-center font-poppins text-black h-[90%] w-[100%] bg-[#F8FCFF] opacity-unset  pt-2  rounded-3xl '
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}


