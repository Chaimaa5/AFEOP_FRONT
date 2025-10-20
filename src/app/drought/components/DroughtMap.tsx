
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { regionsData, DroughtRegion, droughtLevels } from "../utils/droughtData";
import { useState } from "react";
import DroughtIndicator from "./DroughtIndicator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "lucide-react";

const DroughtMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<DroughtRegion | null>(null);
  const [selectedVariable, setSelectedVariable] = useState<string>("precipitation");
  const [selectedDate, setSelectedDate] = useState<string>("2023-12");
  
  const variableOptions = [
    { label: "Precipitation (MD)", value: "precipitation" },
    { label: "Soil Moisture (AD)", value: "soilMoisture" },
    { label: "Water Storage (HD)", value: "tws" },
    { label: "Vegetation Index (VI)", value: "ndvi" },
  ];
  
  const dateOptions = [
    { label: "Dec 2023", value: "2023-12" },
    { label: "Nov 2023", value: "2023-11" },
    { label: "Oct 2023", value: "2023-10" },
    { label: "Sep 2023", value: "2023-09" },
    { label: "Aug 2023", value: "2023-08" },
    { label: "Jul 2023", value: "2023-07" },
  ];
  
  const getVariableColor = (variable: string) => {
    switch(variable) {
      case "precipitation": return "from-white to-blue-600";
      case "soilMoisture": return "from-white to-amber-700";
      case "tws": return "from-white to-blue-400";
      case "ndvi": return "from-white to-green-700";
      default: return "from-white to-gray-700";
    }
  };
  
  const getVariableUnit = (variable: string) => {
    switch(variable) {
      case "precipitation": return "mm";
      case "soilMoisture": return "%";
      case "tws": return "cm";
      case "ndvi": return "";
      default: return "";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Drought Spatial Analysis</CardTitle>
            <CardDescription>Geographic distribution of drought indicators</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="w-[120px] h-8 text-xs">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                {dateOptions.map(option => (
                  <SelectItem key={option.value} value={option.value} className="text-xs">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="precipitation" value={selectedVariable} onValueChange={setSelectedVariable}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="precipitation" className="text-xs py-1">MD</TabsTrigger>
            <TabsTrigger value="soilMoisture" className="text-xs py-1">AD</TabsTrigger>
            <TabsTrigger value="tws" className="text-xs py-1">HD</TabsTrigger>
            <TabsTrigger value="ndvi" className="text-xs py-1">VI</TabsTrigger>
          </TabsList>
          
          {variableOptions.map(variable => (
            <TabsContent key={variable.value} value={variable.value} className="mt-0">
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 opacity-20 bg-blue-50">
                  {/* Simplified map background */}
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path d="M0,40 C20,45 40,20 60,30 C80,40 100,10 120,20 C140,30 160,5 180,10 L200,30 L200,100 L0,100 Z" fill="#2196F3" opacity="0.3" />
                    <path d="M0,50 C20,55 40,30 60,40 C80,50 100,20 120,30 C140,40 160,15 180,20 L200,40 L200,100 L0,100 Z" fill="#1976D2" opacity="0.2" />
                  </svg>
                </div>
                
                {/* GeoTIFF visualization (simulated) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4 rounded-lg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${getVariableColor(variable.value)} opacity-70`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                      GeoTIFF Visualization
                    </div>
                  </div>
                </div>
                
                {/* Simplified region markers */}
                <div className="absolute inset-0 p-4">
                  {regionsData.map((region) => {
                    // Normalize coordinates to fit within the container
                    // This is simplified - in a real app you'd use proper geo projections
                    const x = (region.coordinates[1] + 180) / 360 * 100;
                    const y = (90 - region.coordinates[0]) / 180 * 100;
                    
                    const { color } = droughtLevels[region.level];
                    
                    return (
                      <button
                        key={region.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                        style={{ 
                          left: `${x}%`, 
                          top: `${y}%`
                        }}
                        onClick={() => setSelectedRegion(region)}
                      >
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-md transition-all duration-300 group-hover:scale-125"
                          style={{ backgroundColor: color }}
                        />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {region.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Legend for the current variable */}
              <div className="mb-4">
                <div className="text-xs font-medium mb-1">{variable.label} Legend</div>
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${getVariableColor(variable.value)}`}></div>
                <div className="flex justify-between text-xs mt-1 text-muted-foreground">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
              
              {selectedRegion ? (
                <div className="bg-muted/40 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{selectedRegion.name}</h3>
                    <DroughtIndicator level={selectedRegion.level} size="sm" />
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Precipitation (MD)</span>
                        <span>-{Math.round(100 - selectedRegion.precipitation)}% anomaly</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${selectedRegion.precipitation}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Soil Moisture (AD)</span>
                        <span>{selectedRegion.soilMoisture}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-drought-soil"
                          style={{ width: `${selectedRegion.soilMoisture}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Water Storage (HD)</span>
                        <span>{selectedRegion.waterReservoir}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-drought-water"
                          style={{ width: `${selectedRegion.waterReservoir}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Vegetation (VI)</span>
                        <span>{selectedRegion.vegetation}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-drought-vegetation"
                          style={{ width: `${selectedRegion.vegetation}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted/20 rounded-lg p-3 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Select a region to view details</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DroughtMap;
