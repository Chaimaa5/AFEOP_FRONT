import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { AlertTriangle, Droplets } from "lucide-react";

export default function FloatingPopup({ regime, breakPoint, popupPosition, onClose }) {
  if (!breakPoint || !popupPosition) return null;
  // const backgrounds = ["" ,"bg-[#16ff06]"  ,"bg-[#f7ff00]" ,"bg-[#0b17f5]" , 
  // ];
  const regimes = ["", "Transitional", "Water limited", "Energy limited"];


  return (
  
      <Card className="bg-amber-50  flex dark:bg-blue-900/20 border-amber-200 shadow-none border-1  min-w-[200px] max-w-[80%]  h-30"  onClick={(e) => e.stopPropagation()} >
        <CardHeader className="p-3">
          <Droplets className="h-8 w-8 mr-3" style={{ color: '#3B82F6' }} />
          <div>
            <div className="text-xs text-muted-foreground">Dominant Regime</div>
            <div className="font-medium">{regimes[regime]}</div>
          </div>
        </CardHeader>
        <Divider className="bg-amber-200 " />
        <CardBody className="p-3 flex flex-row bg-amber-50 items-center">
          <AlertTriangle className="h-8 w-8 text-amber-500 mr-3" />
          <div>
            <div className="text-xs text-muted-foreground">Breakpoint</div>
            <div className="font-medium"> {breakPoint === "-999.00" ? "No Data" : `${breakPoint} m³/m³` }</div>
          <div className="text-xs text-muted-foreground pt-2">Coordinates  </div>
          <div className="text-xs text-muted-foreground"> {popupPosition.lat.toFixed(2)}, {popupPosition.lng.toFixed(2)} </div>

          </div>
        </CardBody>
        {/* <CardFooter className=" flex flex-row bg-amber-50 items-center">
        </CardFooter> */}
      </Card>

  );
}
