
import { Card, CardBody } from "@nextui-org/react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DropletIcon, Wheat, Trees, CloudRain, Waves } from "lucide-react";
import { useState } from "react";

// Simulates the cascade effect of drought measured by four scientific variables
const CascadeFlow = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  return (
    <Card className="h-full bg-bg relative">
      <CardHeader className="pb-2">
        <CardTitle>Drought Cascade Analysis</CardTitle>
        <CardDescription>Relationships between drought measurement variables</CardDescription>
      </CardHeader>
      <CardBody className="relative overflow-hidden p-2">
        <div className="h-[350px] relative overflow-hidden rounded-lg ">
          {/* Meteorological Drought (Level 1) - MD/Precipitation */}
          <div className="absolute  z-0 top-4 left-1/2 transform  -translate-x-1/2 flex flex-col items-center">
            <button
              className={`relative z-10 w-16 h-16 rounded-full ${activeNode === 'md' ? 'bg-blue-200 ring-2 ring-blue-400' : 'bg-blue-100  '} flex items-center justify-center shadow-md transition-all hover:bg-blue-200`}
              onClick={() => handleNodeClick('md')}
            >
              <CloudRain className="w-8  z-0 h-8 text-drought-water" />
            </button>
            <div className="mt-1 text-xs font-medium text-center">Meteorological Drought </div>
            <div className="text-[10px] text-center text-muted-foreground">SPI</div>


          </div>

          {/* Flow Lines - Level 1 to Level 2 */}
          <div className=" absolute top-[72px] left-1/2 transform -translate-x-1/2 w-[2px] h-16 water-flow">
            <div className="absolute top-0 left-0 w-full h-full animate-pulse-opacity"></div>
          </div>

          {/* Hydrological Drought and Agricultural Drought (Level 2) */}
          <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 flex space-x-24">
            <div className="flex flex-col items-center">
              <button
                className={`relative z-10 w-14 h-14 rounded-full ${activeNode === 'hd' ? 'bg-blue-200 ring-2 ring-blue-400' : 'bg-blue-100'} flex items-center justify-center shadow-md transition-all hover:bg-blue-200`}
                onClick={() => handleNodeClick('hd')}
              >
                <Waves className="w-7 h-7 text-drought-water" />
              </button>
              <div className="mt-1 text-xs font-medium text-center">Hydrological Drought </div>
              <div className="text-[10px] text-center text-muted-foreground">GRACE TWS</div>

              {activeNode === 'hd' && (
                <div className="absolute top-14 mt-2 bg-white/90 shadow-lg rounded-lg p-2 w-48 z-20 text-xs">
                  <div className="font-semibold mb-1">GRACE TWS :</div>
                  <div>- Measures total water storage</div>
                  <div>- Spatial Resolution: 0.5°</div>
                  <div>- Temporal Resolution: Monthly</div>
                  <div>- Detects groundwater depletion</div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <button
                className={`relative z-10 w-14 h-14 rounded-full ${activeNode === 'ad' ? 'bg-amber-200 ring-2 ring-amber-400' : 'bg-amber-100'} flex items-center justify-center shadow-md transition-all hover:bg-amber-200`}
                onClick={() => handleNodeClick('ad')}
              >
                <DropletIcon className="w-7 h-7 text-drought-soil" />
              </button>
              <div className="mt-1 text-xs font-medium text-center">Agricultural Drought </div>
              <div className="text-[10px] text-center text-muted-foreground">SSI</div>

              {activeNode === 'ad' && (
                <div className="absolute top-14 mt-2 bg-white/90 shadow-lg rounded-lg p-2 w-48 z-[999] text-xs">
                  <div className="font-semibold mb-1">SSI:</div>
                  <div>- ESA CCI SM product</div>
                  <div>- Spatial Resolution: 0.25°</div>
                  <div>- Root zone moisture content</div>
                  <div>- Critical for crop growth</div>
                </div>
              )}
            </div>
          </div>

          {/* Flow Lines - Level 2 to Level 3 */}
          <div className="absolute  top-[188px] left-[calc(50%-80px)] transform -translate-x-1/2 w-[2px] h-16 rotate-[30deg] water-flow delay-75">
            <div className="absolute top-0 left-0 w-full h-full animate-pulse-opacity"></div>
          </div>
          <div className="  absolute top-[188px] left-[calc(50%+80px)] transform -translate-x-1/2 w-[2px] h-16 rotate-[-30deg] water-flow delay-75">
            <div className="absolute top-0 left-0 w-full h-full animate-pulse-opacity"></div>
          </div>

          {/* Vegetation Index (Level 3) */}
          <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <button
              className={`relative z-10 w-16 h-16 rounded-full ${activeNode === 'vi' ? 'bg-green-200 ring-2 ring-green-400' : 'bg-green-100'} flex items-center justify-center shadow-md transition-all hover:bg-green-200`}
              onClick={() => handleNodeClick('vi')}
            >
              <Trees className="w-8 h-8 text-drought-vegetation" />
            </button>
            <div className="mt-1 text-xs font-medium text-center">Vegetation Index </div>
            <div className="text-[10px] text-center text-muted-foreground">ZNDVI</div>

            {activeNode === 'vi' && (
              <div className="absolute top-16 mt-2 bg-white/90 shadow-lg rounded-lg p-2 w-48 z-20 text-xs">
                <div className="font-semibold mb-1">ZNDVI:</div>
                <div>- MODIS/Landsat derived</div>
                <div>- Spatial Resolution: 250m-1km</div>
                <div>- Measures vegetation health</div>
                <div>- Indicator of drought impacts</div>
              </div>
            )}
          </div>


          {/* Background flow pattern */}
          {/* <svg 
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M50,10 C60,30 70,35 80,45 C90,55 95,65 90,80 C85,90 70,95 50,90 C30,95 15,90 10,80 C5,65 10,55 20,45 C30,35 40,30 50,10" 
              fill="none" 
              stroke="#2196F3" 
              strokeWidth="0.2" 
              strokeDasharray="1,1"
            />
            <path 
              d="M50,10 C60,30 70,35 80,45 C90,55 95,65 90,80 C85,90 70,95 50,90 C30,95 15,90 10,80 C5,65 10,55 20,45 C30,35 40,30 50,10" 
              fill="none" 
              stroke="#0D47A1" 
              strokeWidth="0.1"
            />
          </svg> */}

          {/* Legend for data types */}
          {/* <div className="absolute bottom-2 right-2 bg-white/70 rounded p-1 text-[10px]">
            <div className="font-semibold mb-1">Variable Type:</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-1"></span>MD: Precipitation</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-1"></span>HD: GRACE TWS</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-1"></span>AD: Soil Moisture</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>VI: NDVI</div>
          </div> */}
        </div>

      </CardBody>
      {/* {activeNode === 'md' && ( */}
     <div
     className={`
       absolute bottom-0  w-full bg-white shadow-lg transition-all duration-300
        
       ${activeNode === 'md' ? " p-6 h-40" : " h-0  p-0"}
     `}
   >    
    <div className="font-semibold mb-1">SPI:</div>
          <div>- Data Source: CHIRPS</div>
          <div>- Spatial Resolution: 0.05°</div>
          <div>- Temporal Coverage: 1981-2020</div>
          <div>- Measures rainfall deficits</div>
          <div>- Primary driver of drought cascade</div>
        </div>
      {/* )} */}
    </Card>
  );
};

export default CascadeFlow;
