
// Sample data for hydrological regime dashboard

export type RegimeType = 'Perennial' | 'Intermittent' | 'Ephemeral' | 'No Flow';

export interface RegimeStats {
  id: string;
  year: string;
  regimeType: RegimeType;
  flowDays: number; // days with flow per year
  maxFlow: number; // maximum flow in cubic meters per second
  minFlow: number; // minimum flow in cubic meters per second
  meanFlow: number; // mean flow in cubic meters per second
  breakpointCount: number; // number of regime breakpoints
  coordinates: [number, number]; // [lat, long]
}

export interface BreakpointData {
  id: string;
  year: string;
  month: string;
  magnitude: number; // 1-10 scale
  duration: number; // days
  impact: number; // 1-10 scale
  type: 'Abrupt' | 'Gradual' | 'Seasonal';
  coordinates: [number, number]; // [lat, long]
}

export interface TimeseriesData {
  date: string;
  flow: number;
  baseflow: number;
  breakpoints: number;
}

export const regimeColorScale: Record<RegimeType, string> = {
  'Perennial': '#1E88E5', // Blue
  'Intermittent': '#43A047', // Green
  'Ephemeral': '#FBC02D', // Yellow
  'No Flow': '#E53935', // Red
};

export const breakpointColorScale: Record<'Abrupt' | 'Gradual' | 'Seasonal', string> = {
  'Abrupt': '#E53935', // Red
  'Gradual': '#FBC02D', // Yellow
  'Seasonal': '#43A047', // Green
};

// Sample data for regime statistics
export const regimeStatsData: RegimeStats[] = [
  {
    id: '1',
    year: '2023',
    regimeType: 'Perennial',
    flowDays: 365,
    maxFlow: 120.5,
    minFlow: 12.3,
    meanFlow: 45.7,
    breakpointCount: 0,
    coordinates: [40.7128, -74.0060]
  },
  {
    id: '2',
    year: '2023',
    regimeType: 'Intermittent',
    flowDays: 285,
    maxFlow: 95.2,
    minFlow: 0,
    meanFlow: 32.4,
    breakpointCount: 2,
    coordinates: [34.0522, -118.2437]
  },
  {
    id: '3',
    year: '2023',
    regimeType: 'Ephemeral',
    flowDays: 120,
    maxFlow: 65.8,
    minFlow: 0,
    meanFlow: 15.2,
    breakpointCount: 4,
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '4',
    year: '2023',
    regimeType: 'No Flow',
    flowDays: 0,
    maxFlow: 0,
    minFlow: 0,
    meanFlow: 0,
    breakpointCount: 0,
    coordinates: [33.4484, -112.0740]
  },
  {
    id: '5',
    year: '2022',
    regimeType: 'Perennial',
    flowDays: 365,
    maxFlow: 130.2,
    minFlow: 15.6,
    meanFlow: 52.3,
    breakpointCount: 0,
    coordinates: [40.7128, -74.0060]
  },
  {
    id: '6',
    year: '2022',
    regimeType: 'Intermittent',
    flowDays: 310,
    maxFlow: 105.6,
    minFlow: 0,
    meanFlow: 38.7,
    breakpointCount: 1,
    coordinates: [34.0522, -118.2437]
  }
];

// Sample data for breakpoints
export const breakpointData: BreakpointData[] = [
  {
    id: '1',
    year: '2023',
    month: '03',
    magnitude: 8,
    duration: 14,
    impact: 9,
    type: 'Abrupt',
    coordinates: [34.0522, -118.2437]
  },
  {
    id: '2',
    year: '2023',
    month: '07',
    magnitude: 6,
    duration: 28,
    impact: 7,
    type: 'Gradual',
    coordinates: [34.0522, -118.2437]
  },
  {
    id: '3',
    year: '2023',
    month: '02',
    magnitude: 5,
    duration: 10,
    impact: 4,
    type: 'Seasonal',
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '4',
    year: '2023',
    month: '05',
    magnitude: 7,
    duration: 18,
    impact: 6,
    type: 'Abrupt',
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '5',
    year: '2023',
    month: '08',
    magnitude: 9,
    duration: 21,
    impact: 8,
    type: 'Gradual',
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '6',
    year: '2023',
    month: '11',
    magnitude: 4,
    duration: 12,
    impact: 3,
    type: 'Seasonal',
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '7',
    year: '2022',
    month: '06',
    magnitude: 7,
    duration: 25,
    impact: 8,
    type: 'Abrupt',
    coordinates: [34.0522, -118.2437]
  }
];

// Sample time series data
export const timeseriesData: TimeseriesData[] = [
  { date: '2023-01', flow: 45, baseflow: 35, breakpoints: 0 },
  { date: '2023-02', flow: 50, baseflow: 38, breakpoints: 0 },
  { date: '2023-03', flow: 25, baseflow: 20, breakpoints: 1 },
  { date: '2023-04', flow: 40, baseflow: 30, breakpoints: 0 },
  { date: '2023-05', flow: 35, baseflow: 28, breakpoints: 1 },
  { date: '2023-06', flow: 42, baseflow: 32, breakpoints: 0 },
  { date: '2023-07', flow: 30, baseflow: 22, breakpoints: 1 },
  { date: '2023-08', flow: 15, baseflow: 12, breakpoints: 1 },
  { date: '2023-09', flow: 20, baseflow: 15, breakpoints: 0 },
  { date: '2023-10', flow: 25, baseflow: 18, breakpoints: 0 },
  { date: '2023-11', flow: 35, baseflow: 25, breakpoints: 1 },
  { date: '2023-12', flow: 40, baseflow: 30, breakpoints: 0 },
];

// Yearly summaries
export const yearlyStats = {
  '2023': {
    totalBreakpoints: 6,
    averageRegimeStability: 65, // percentage
    flowDaysAverage: 192.5,
    meanFlowAverage: 23.3,
    dominantRegime: 'Intermittent' as RegimeType,
    criticalBreakpoints: 2,
    breakpointTrend: 'Increasing',
    abruptPercentage: 33,
    gradualPercentage: 33,
    seasonalPercentage: 33
  },
  '2022': {
    totalBreakpoints: 1,
    averageRegimeStability: 82, // percentage
    flowDaysAverage: 337.5,
    meanFlowAverage: 45.5,
    dominantRegime: 'Perennial' as RegimeType,
    criticalBreakpoints: 1,
    breakpointTrend: 'Stable',
    abruptPercentage: 100,
    gradualPercentage: 0,
    seasonalPercentage: 0
  }
};
