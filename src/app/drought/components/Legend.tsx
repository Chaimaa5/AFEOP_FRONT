import { useState } from "react";
import { useSelector } from "react-redux";

interface LegendProps {
  min: number;
  max: number;
  colorMap: keyof typeof gradients;
}

const gradients = {
  // viridis: 'linear-gradient(to top, #440154, #482777, #3f4a8a, #31688e, #26828e, #1f9e89, #35b779, #6ece58, #b5de2b, #fde725)',
  HD: 'linear-gradient(to top, #2629d1, #0f1ec1, #3a528b, #2b728e, #20908d, #27ae80, #5dc962, #abdc32, #fde725)  ',
  MD: 'linear-gradient(to top, #f7fbff, #c8ddf0, #73b3d8, #2879b9, #08306b)  ',
  ZNDVI: 'linear-gradient(to top, #ffffcc, #c2e699, #78c679, #31a354, #006837)  ',
  AD: 'linear-gradient(to top, #440154, #472a7a, #3f4889, #31688e, #23898e, #1fa188, #35b779, #65cb5e, #a2da37, #fde725)  '
};

const Legend = ({min, max, colorMap}: LegendProps) => {
  console.log('colorMap', colorMap);
    const sidebar = useSelector((state: any) => state.raster.sidebar);
  // const legendUrl = `http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=${rasterUrl}&STYLE=${colormap}`
  const [value, setValue] = useState<number | null>(null);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = 1 - ((event.clientY - rect.top) / rect.height); // Normalize position to 0-1 and invert for vertical
    const legendValue = min + position * (max - min);
    setValue(parseFloat(legendValue.toFixed(2)));
};

  const handleMouseLeave = () => {
      setValue(null);
  };

  const analysis = useSelector((state: any) => state.Drought.analysis);
  return (
    <div
    className={`legend-container z-[999] bottom-6 right-[1rem]
    bg-bg absolute  w-[3rem] h-[15%]  md:h-[20%] lg:h-[20%] xl:h-[20%] rounded-full flex p-2 flex-col items-center justify-center`}
  >
   <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '5px' }}>{analysis.max.toFixed(2)}</div>
            <div className="rounded-full" style={{
                width: '20px',
                height: '100px',
                background: gradients[colorMap],
                cursor: 'pointer'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ></div>
            <div style={{ marginTop: '5px' }}>{analysis.min.toFixed(2)}</div>
            {value !== null && (
                <div style={{ marginTop: '10px' }}>
                    Value: {value}
                </div>
            )}
        </div>
   </div>
  
  );
};

export default Legend;

