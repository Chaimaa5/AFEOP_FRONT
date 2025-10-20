
import {  CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { useState } from "react";
import { Checkbox } from "antd";
import SyncedCharts from "./SyncedChart";
import { Card , CardBody} from "@nextui-org/react";


const TimeseriesComparison = () => {
  const [selectedRegion, setSelectedRegion] = useState("western");
  const [selectedVariables, setSelectedVariables] = useState({
    precipitation: true,
    soilMoisture: true,
    tws: true,
    ndvi: true,
  });
  
  const toggleVariable = (variable: keyof typeof selectedVariables) => {
    setSelectedVariables({
      ...selectedVariables,
      [variable]: !selectedVariables[variable],
    });
  };

  return (
    <Card className="h-full bg-bg">
      <CardHeader className="pb-2">
        <CardTitle>Temporal Drought Patterns</CardTitle>
        <CardDescription>Time series comparison of drought variables</CardDescription>
      </CardHeader>
      <CardBody className="p-4">
        {/* <div className="flex flex-col mb-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="precipitation" 
                checked={selectedVariables.precipitation}
                onChange={() => toggleVariable('precipitation')}
                className="data-[state=checked]:bg-blue-500"
              />
              <Label htmlFor="precipitation" className="text-xs">Meteorological Drought</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="soilMoisture" 
                checked={selectedVariables.soilMoisture}
                onChange={() => toggleVariable('soilMoisture')}
                className="data-[state=checked]:bg-amber-500"
              />
              <Label htmlFor="soilMoisture" className="text-xs">Agricultural Drought</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="tws" 
                checked={selectedVariables.tws}
                onChange={() => toggleVariable('tws')}
                className="data-[state=checked]:bg-blue-300"
              />
              <Label htmlFor="tws" className="text-xs">Hydrological Drought</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="ndvi" 
                checked={selectedVariables.ndvi}
                onChange={() => toggleVariable('ndvi')}
                className="data-[state=checked]:bg-green-500"
              />
              <Label htmlFor="ndvi" className="text-xs">Vegetation Index</Label>
            </div>
          </div>
        </div>
         */}
        <div className="h-[90%]">
          <SyncedCharts></SyncedCharts>
          {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timeSeriesData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                yAxisId="left" 
                domain={[0, 100]} 
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                domain={[0, 1]} 
                tickFormatter={(value) => value.toFixed(1)}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === "NDVI (VI)") return [value, name];
                  return [`${value}%`, name];
                }}
              />
              <Legend />
              
              {selectedVariables.precipitation && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="precipitation" 
                  name="Precipitation (MD)" 
                  stroke="#2196F3" 
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
              )}
              
              {selectedVariables.soilMoisture && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="soilMoisture" 
                  name="Soil Moisture (AD)" 
                  stroke="#8D6E63" 
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
              )}
              
              {selectedVariables.tws && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="tws" 
                  name="Water Storage (HD)" 
                  stroke="#29B6F6" 
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
              )}
              
              {selectedVariables.ndvi && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="ndvi" 
                  name="NDVI (VI)" 
                  stroke="#66BB6A" 
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer> */}
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          <p>This chart demonstrates how drought variables change over time and their time-lag relationships. Note how precipitation changes typically precede soil moisture and vegetation changes.</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default TimeseriesComparison;
