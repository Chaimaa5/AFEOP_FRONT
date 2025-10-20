
import { DroughtLevel, droughtLevels } from "../utils/droughtData";

type DroughtIndicatorProps = {
  level: DroughtLevel;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
};

const DroughtIndicator = ({
  level,
  showLabel = true,
  size = "md",
}: DroughtIndicatorProps) => {
  const { label, color } = droughtLevels[level];
  
  const sizeClasses = {
    sm: "w-3 h-3 mr-1",
    md: "w-4 h-4 mr-2",
    lg: "w-6 h-6 mr-3",
  };

  return (
    <div className="flex items-center">
      <span
        className={`${sizeClasses[size]} rounded-full`}
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {showLabel && (
        <span className="text-sm font-medium">{label}</span>
      )}
    </div>
  );
};

export default DroughtIndicator;
