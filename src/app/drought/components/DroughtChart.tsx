
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { timelineData, droughtLevels } from "../utils/droughtData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type TimeRange = "6m" | "1y" | "all";

const DroughtChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1y");
  
  // Filter data based on selected time range
  const getFilteredData = () => {
    switch(timeRange) {
      case "6m":
        return timelineData.slice(-6);
      case "1y":
        return timelineData.slice(-12);
      case "all":
      default:
        return timelineData;
    }
  };

  const data = getFilteredData();
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Drought Severity Trends</CardTitle>
            <CardDescription>Historical drought levels over time</CardDescription>
          </div>
          <Select
            value={timeRange}
            onValueChange={(value) => setTimeRange(value as TimeRange)}
          >
            <SelectTrigger className="w-[500px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart

              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorD0" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={droughtLevels.D0.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={droughtLevels.D0.color} stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorD1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={droughtLevels.D1.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={droughtLevels.D1.color} stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorD2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={droughtLevels.D2.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={droughtLevels.D2.color} stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorD3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={droughtLevels.D3.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={droughtLevels.D3.color} stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorD4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={droughtLevels.D4.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={droughtLevels.D4.color} stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                label={{ 
                  value: 'Area Affected (%)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontSize: 12 } 
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, '']}
                labelFormatter={(label) => formatDate(label)}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="d0" 
                name={droughtLevels.D0.label}
                stackId="1" 
                stroke={droughtLevels.D0.color} 
                fillOpacity={1} 
                fill="url(#colorD0)" 
              />
              <Area 
                type="monotone" 
                dataKey="d1" 
                name={droughtLevels.D1.label}
                stackId="1" 
                stroke={droughtLevels.D1.color} 
                fillOpacity={1} 
                fill="url(#colorD1)" 
              />
              <Area 
                type="monotone" 
                dataKey="d2"
                name={droughtLevels.D2.label} 
                stackId="1" 
                stroke={droughtLevels.D2.color} 
                fillOpacity={1} 
                fill="url(#colorD2)" 
              />
              <Area 
                type="monotone" 
                dataKey="d3" 
                name={droughtLevels.D3.label}
                stackId="1" 
                stroke={droughtLevels.D3.color} 
                fillOpacity={1} 
                fill="url(#colorD3)" 
              />
              <Area 
                type="monotone" 
                dataKey="d4" 
                name={droughtLevels.D4.label}
                stackId="1" 
                stroke={droughtLevels.D4.color} 
                fillOpacity={1} 
                fill="url(#colorD4)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DroughtChart;
