
import {  CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cascadeImpacts } from "../utils/droughtData";
import { Card ,CardBody} from "@nextui-org/react";

const DroughtMetrics = () => {
  // Group cascade impacts by impact level
  const highImpacts = cascadeImpacts.filter(impact => impact.impactLevel >= 70);
  const mediumImpacts = cascadeImpacts.filter(impact => impact.impactLevel >= 40 && impact.impactLevel < 70);

  return (
    <Card className="h-full w-full bg-bg">
      <CardHeader className="pb-2">
        <CardTitle>Cascading Impacts</CardTitle>
        <CardDescription>Drought effects across different sectors</CardDescription>
      </CardHeader>
      <CardBody className="  p-4 w-full m-0">
        <div className=" flex justify-between  m-0">
          <div className="w-[96%] p-2"> 
            <h3 className="text-sm font-medium text-red-500 mb-2">High Impact Sectors</h3>
            <div className="space-y-3">
              {highImpacts.map(impact => (
                <div key={impact.id} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm font-medium">{impact.sector}</div>
                    <div className="text-xs text-muted-foreground">{impact.impactLevel}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 transition-all duration-500 group-hover:opacity-80"
                      style={{ width: `${impact.impactLevel}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{impact.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* <div className="w-[48%]  ">
            <h3 className="text-sm font-medium text-orange-500 mb-2">Medium Impact Sectors</h3>
            <div className="space-y-3">
              {mediumImpacts.map(impact => (
                <div key={impact.id} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm font-medium">{impact.sector}</div>
                    <div className="text-xs text-muted-foreground">{impact.impactLevel}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500 transition-all duration-500 group-hover:opacity-80"
                      style={{ width: `${impact.impactLevel}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{impact.description}</div>
                </div>
              ))}
            </div>
          </div>
           */}
          {/* <div>
            <h3 className="text-sm font-medium text-yellow-500 mb-2">Low Impact Sectors</h3>
            <div className="space-y-3">
              {lowImpacts.map(impact => (
                <div key={impact.id} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm font-medium">{impact.sector}</div>
                    <div className="text-xs text-muted-foreground">{impact.impactLevel}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500 transition-all duration-500 group-hover:opacity-80"
                      style={{ width: `${impact.impactLevel}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{impact.description}</div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default DroughtMetrics;
