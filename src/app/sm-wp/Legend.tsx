import { useState } from "react";
import { useSelector } from "react-redux";

interface LegendProps {
  min: number;
  max: number;
  colorMap: keyof typeof gradients;
}

const gradients = {
  breakpoints: 'linear-gradient(to bottom, #1307ba, #0d11ff, #083ddd, #0f87ff, #0cfffb, #06651a, #fdae61, #fff70b, #d7191c)',
};

const Legend = ({min, max, colorMap}: LegendProps) => {
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

  return (
    <div
    className={`legend-container z-[999] bottom-7 left-[1rem]
    bg-bg absolute  w-[3rem] h-[20%]  md:h-[25%] lg:h-[25%] xl:h-[25%] rounded-full flex p-2 flex-col items-center justify-center text-xs`}
  >
   <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '5px' }}>{max.toFixed(2)}</div>
            <div className="rounded-full" style={{
                width: '20px',
                height: '150px',
                background: gradients[colorMap],
                cursor: 'pointer'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ></div>
            <div style={{ marginTop: '5px' }}>{min.toFixed(2)}</div>
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

