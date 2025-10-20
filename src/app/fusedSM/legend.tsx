import { useState } from "react";
import { useSelector } from "react-redux";

interface LegendProps {
  min: number;
  max: number;
  colorMap: keyof typeof gradients;
}

const gradients = {
  viridis: 'linear-gradient(to top, #440154, #482777, #3f4a8a, #31688e, #26828e, #1f9e89, #35b779, #6ece58, #b5de2b, #fde725)',
};

const Legend = ({min, max, colorMap}: LegendProps) => {
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
    className={`legend-container bg-bg z-[999] bottom-4 right-[32rem]
    absolute  w-[3rem] h-[15%]  md:h-[20%] lg:h-[20%] xl:h-[20%] rounded-full flex p-2 flex-col items-center justify-center`}
  >
   <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '5px' }}>{max.toFixed(2)}</div>
            <div className="rounded-full" style={{
                width: '20px',
                height: '100px',
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

