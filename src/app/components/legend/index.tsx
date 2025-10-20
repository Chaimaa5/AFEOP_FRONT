import { useState } from "react";
import { useSelector } from "react-redux";

interface LegendProps {
  min: number;
  max: number;
  colorMap: keyof typeof gradients;
}

const gradients = {

  SM_Viridis: 'linear-gradient(to top, #440154, #482777, #3f4a8a, #31688e, #26828e, #1f9e89, #35b779, #6ece58, #b5de2b, #fde725)',
  YlOrRd: 'linear-gradient(to bottom, #ff0000, #ff8000, #ffff00, #ffffff)',
  YlOrBr: 'linear-gradient(to bottom, #000, #800000, #ff0000, #ff8000, #ffff00, #ffffff)',

  spectral: 'linear-gradient(to bottom, #9e0142, #d53e4f, #f46d43, #fdae61, #fee08b, #ffffbf, #e6f598, #abdda4, #66c2a5, #3288bd, #5e4fa2)'
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
    className={`legend-container z-[999] ${ sidebar ? "right-[30rem]": "right-4 "  } 
    bg-bg absolute bottom-52 w-[3rem] h-[15%]  md:h-[20%] lg:h-[20%] xl:h-[20%] rounded-full flex p-2 flex-col items-center justify-center`}
  >
   <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '5px' }}>{max}</div>
            <div className="rounded-full" style={{
                width: '20px',
                height: '100px',
                background: gradients[colorMap],
                cursor: 'pointer'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ></div>
            <div style={{ marginTop: '5px' }}>{min}</div>
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

