
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

// Simulated correlation data between different variables
const correlationData = [
  // NDVI vs Soil Moisture
  { id: 1, ndvi: 0.15, soilMoisture: 10, precipitation: 5, tws: 15, region: "Northwest" },
  { id: 2, ndvi: 0.25, soilMoisture: 20, precipitation: 15, tws: 35, region: "Southwest" },
  { id: 3, ndvi: 0.35, soilMoisture: 35, precipitation: 25, tws: 45, region: "Northeast" },
  { id: 4, ndvi: 0.45, soilMoisture: 45, precipitation: 35, tws: 65, region: "Southeast" },
  { id: 5, ndvi: 0.55, soilMoisture: 60, precipitation: 45, tws: 75, region: "Central" },
  { id: 6, ndvi: 0.65, soilMoisture: 75, precipitation: 55, tws: 85, region: "Mountain" },
  { id: 7, ndvi: 0.75, soilMoisture: 85, precipitation: 75, tws: 90, region: "Coastal" },
  { id: 8, ndvi: 0.20, soilMoisture: 15, precipitation: 10, tws: 25, region: "Northwest" },
  { id: 9, ndvi: 0.30, soilMoisture: 25, precipitation: 20, tws: 40, region: "Southwest" },
  { id: 10, ndvi: 0.40, soilMoisture: 40, precipitation: 30, tws: 50, region: "Northeast" },
  { id: 11, ndvi: 0.50, soilMoisture: 50, precipitation: 40, tws: 60, region: "Southeast" },
  { id: 12, ndvi: 0.60, soilMoisture: 65, precipitation: 50, tws: 80, region: "Central" },
];

// Variable options for dropdown
const variableOptions = [
  { label: "NDVI (VI)", value: "ndvi" },
  { label: "Soil Moisture (AD)", value: "soilMoisture" },
  { label: "Precipitation (MD)", value: "precipitation" },
  { label: "Total Water Storage (HD)", value: "tws" },
];

const VariableCorrelation = () => {
  const [xVariable, setXVariable] = useState("soilMoisture");
  const [yVariable, setYVariable] = useState("ndvi");
  
  const getVariableLabel = (value: string) => {
    return variableOptions.find(option => option.value === value)?.label || value;
  };
  
  const getVariableColor = (variable: string) => {
    switch(variable) {
      case "ndvi": return "#66BB6A"; // Green for vegetation
      case "soilMoisture": return "#8D6E63"; // Brown for soil
      case "precipitation": return "#2196F3"; // Blue for water
      case "tws": return "#29B6F6"; // Light blue for water storage
      default: return "#9C27B0"; // Default color
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Variable Correlation Analysis</CardTitle>
        <CardDescription>Relationships between drought indicators</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between mb-4 gap-4">
          <div className="w-1/2">
            <label className="text-xs text-muted-foreground mb-1 block">X-Axis Variable</label>
            <Select value={xVariable} onValueChange={setXVariable}>
              <SelectTrigger>
                <SelectValue placeholder="Select variable" />
              </SelectTrigger>
              <SelectContent>
                {variableOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-1/2">
            <label className="text-xs text-muted-foreground mb-1 block">Y-Axis Variable</label>
            <Select value={yVariable} onValueChange={setYVariable}>
              <SelectTrigger>
                <SelectValue placeholder="Select variable" />
              </SelectTrigger>
              <SelectContent>
                {variableOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey={xVariable} 
                name={getVariableLabel(xVariable)} 
                unit={xVariable === "ndvi" ? "" : "%"}
                domain={['dataMin', 'dataMax']}
              />
              <YAxis 
                type="number" 
                dataKey={yVariable} 
                name={getVariableLabel(yVariable)} 
                unit={yVariable === "ndvi" ? "" : "%"}
                domain={['dataMin', 'dataMax']}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value, name) => {
                  if (name === "ndvi") return [value, "NDVI"];
                  return [`${value}%`, name];
                }}
                labelFormatter={() => ""}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm text-xs">
                        <p className="font-semibold">{data.region}</p>
                        <p>{`${getVariableLabel(xVariable)}: ${data[xVariable]}${xVariable === "ndvi" ? "" : "%"}`}</p>
                        <p>{`${getVariableLabel(yVariable)}: ${data[yVariable]}${yVariable === "ndvi" ? "" : "%"}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              <Scatter 
                name="Region Data Points" 
                data={correlationData} 
                fill={getVariableColor(yVariable)}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          <p>This chart shows the correlation between different drought variables across regions. 
          A strong correlation indicates how one drought variable influences another in the cascade effect.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VariableCorrelation;
