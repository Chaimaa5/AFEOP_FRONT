
import { useMemo } from "react";
// import { yearlyStats } from "@/utils/regimeData";
import { Progress } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react"
import { Layers, AlertTriangle, Droplets, Clock } from "lucide-react";

interface RegimeStatsProps {
  selectedYear: string;
}

const RegimeStats = () => {

  
  return (
    <div className="w-[20%] space-y-4">
      <div className="flex  flex-col  grid-cols-2 gap-2">
        <Card className="bg-blue-50 flex flex-row dark:bg-blue-900/20 shadow-none border-blue-200  border-1 h-24">
          <CardBody className="p-3 flex flex-row  items-center">
            <Droplets className="h-8 w-8 mr-3" style={{ color: '#3B82F6' }}  />
            <div>
              <div className="text-xs text-muted-foreground">Dominant Regime in Africa</div>
              <div className="font-medium">Water Limited</div>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-amber-50 dark:bg-amber-900/20 shadow-none border-amber-200 border-1   h-24">
          <CardBody className="p-3  flex-row   flex items-center">
            <AlertTriangle className="h-8 w-8 text-amber-500 mr-3" />
            <div>
              <div className="text-xs text-muted-foreground">Total Breakpoints of Transitional regime</div>
              <div className="font-medium">117831</div>
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* <Card>
        <CardBody className="p-3">
          <div className="text-sm font-medium mb-2">Flow Statistics</div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Flow Days</span>
                <span>{stats.flowDaysAverage} days/year</span>
              </div>
              <Progress value={(stats.flowDaysAverage / 365) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Regime Stability</span>
                <span>{stats.averageRegimeStability}%</span>
              </div>
              <Progress value={stats.averageRegimeStability} className="h-2" />
            </div>
          </div>
        </CardBody>
      </Card>
       */}
      {/* <Card>
        <CardBody className="p-3">
          <div className="text-sm font-medium mb-2">Breakpoint Analysis</div>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-muted/30 rounded p-2">
              <div className="text-xs text-muted-foreground">Critical Events</div>
              <div className="font-medium">{stats.criticalBreakpoints}</div>
            </div>
            <div className="bg-muted/30 rounded p-2">
              <div className="text-xs text-muted-foreground">Trend</div>
              <div className="font-medium">{stats.breakpointTrend}</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Breakpoint Types</span>
            </div>
            <div className="flex h-2 rounded-full overflow-hidden">
              <div 
                className="bg-red-500" 
                style={{width: `${stats.abruptPercentage}%`}}
              ></div>
              <div 
                className="bg-amber-500" 
                style={{width: `${stats.gradualPercentage}%`}}
              ></div>
              <div 
                className="bg-green-500" 
                style={{width: `${stats.seasonalPercentage}%`}}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div> Abrupt {stats.abruptPercentage}%
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-1"></div> Gradual {stats.gradualPercentage}%
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div> Seasonal {stats.seasonalPercentage}%
              </span>
            </div>
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default RegimeStats;
