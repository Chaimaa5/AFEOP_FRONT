
import { nationalDroughtSummary } from "../utils/droughtData";
import { DropletIcon, ThermometerIcon, AlertTriangleIcon } from "lucide-react";

const DroughtHeader = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Drought Cascade Dashboard</h1>
          <p className="text-secondary text-sm md:text-base">
            Monitoring drought conditions and cascading impacts across sectors
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center text-drought-danger">
            <AlertTriangleIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Fire Risk: {nationalDroughtSummary.fireRisk}</span>
          </div>
          <div className="flex items-center text-drought-warning">
            <ThermometerIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Avg Intensity: {nationalDroughtSummary.averageDroughtIntensity}</span>
          </div>
          <div className="flex items-center text-drought-default">
            <DropletIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{nationalDroughtSummary.waterRestrictions} Water Restrictions</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="drought-card">
          <h3 className="text-sm font-medium text-muted-foreground">Affected States</h3>
          <p className="text-2xl font-bold">{nationalDroughtSummary.affectedStates}</p>
        </div>
        <div className="drought-card">
          <h3 className="text-sm font-medium text-muted-foreground">Population Impacted</h3>
          <p className="text-2xl font-bold">{nationalDroughtSummary.populationImpacted}M</p>
        </div>
        <div className="drought-card">
          <h3 className="text-sm font-medium text-muted-foreground">Agricultural Losses</h3>
          <p className="text-2xl font-bold">${nationalDroughtSummary.agriculturalLosses}B</p>
        </div>
        <div className="drought-card">
          <h3 className="text-sm font-medium text-muted-foreground">Water Restrictions</h3>
          <p className="text-2xl font-bold">{nationalDroughtSummary.waterRestrictions}</p>
        </div>
      </div>
    </div>
  );
};

export default DroughtHeader;
