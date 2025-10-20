
// Sample data for drought dashboard

export type DroughtLevel = 'None' | 'D0' | 'D1' | 'D2' | 'D3' | 'D4';

export type DroughtRegion = {
  id: string;
  name: string;
  level: DroughtLevel;
  affectedArea: number; // Percentage
  waterReservoir: number; // Percentage
  soilMoisture: number; // Percentage
  vegetation: number; // Percentage
  coordinates: [number, number]; // [lat, long]
};

export type DroughtTimelineData = {
  date: string;
  d0: number;
  d1: number;
  d2: number;
  d3: number;
  d4: number;
};

export type CascadeImpact = {
  id: string;
  sector: string;
  impactLevel: number; // 0-100
  description: string;
  affectedMetrics: string[];
};

export const droughtLevels: { [key in DroughtLevel]: { label: string; color: string } } = {
  'None': { label: 'No Drought', color: '#E3F2FD' },
  'D0': { label: 'Abnormally Dry', color: '#FFF9C4' },
  'D1': { label: 'Moderate Drought', color: '#FFEB3B' },
  'D2': { label: 'Severe Drought', color: '#FFA000' },
  'D3': { label: 'Extreme Drought', color: '#E64A19' },
  'D4': { label: 'Exceptional Drought', color: '#B71C1C' }
};

export const regionsData: DroughtRegion[] = [
  {
    id: '1',
    name: 'Western Region',
    level: 'D3',
    affectedArea: 85,
    waterReservoir: 24,
    soilMoisture: 15,
    vegetation: 30,
    coordinates: [34.0522, -118.2437]
  },
  {
    id: '2',
    name: 'Central Plains',
    level: 'D2',
    affectedArea: 65,
    waterReservoir: 38,
    soilMoisture: 25,
    vegetation: 42,
    coordinates: [39.7392, -104.9903]
  },
  {
    id: '3',
    name: 'Southern Region',
    level: 'D1',
    affectedArea: 45,
    waterReservoir: 52,
    soilMoisture: 45,
    vegetation: 60,
    coordinates: [29.7604, -95.3698]
  },
  {
    id: '4',
    name: 'Northern Territory',
    level: 'D0',
    affectedArea: 30,
    waterReservoir: 70,
    soilMoisture: 65,
    vegetation: 75,
    coordinates: [46.8721, -96.7898]
  },
  {
    id: '5',
    name: 'Eastern Region',
    level: 'None',
    affectedArea: 5,
    waterReservoir: 92,
    soilMoisture: 88,
    vegetation: 90,
    coordinates: [40.7128, -74.0060]
  }
];

export const timelineData: DroughtTimelineData[] = [
  { date: '2023-01', d0: 12, d1: 8, d2: 5, d3: 2, d4: 0 },
  { date: '2023-02', d0: 14, d1: 9, d2: 6, d3: 3, d4: 1 },
  { date: '2023-03', d0: 15, d1: 11, d2: 7, d3: 4, d4: 1 },
  { date: '2023-04', d0: 18, d1: 13, d2: 9, d3: 5, d4: 2 },
  { date: '2023-05', d0: 20, d1: 15, d2: 10, d3: 6, d4: 3 },
  { date: '2023-06', d0: 22, d1: 17, d2: 12, d3: 8, d4: 4 },
  { date: '2023-07', d0: 25, d1: 20, d2: 15, d3: 10, d4: 5 },
  { date: '2023-08', d0: 28, d1: 22, d2: 18, d3: 12, d4: 7 },
  { date: '2023-09', d0: 30, d1: 25, d2: 20, d3: 15, d4: 8 },
  { date: '2023-10', d0: 32, d1: 26, d2: 21, d3: 16, d4: 9 },
  { date: '2023-11', d0: 35, d1: 28, d2: 23, d3: 18, d4: 10 },
  { date: '2023-12', d0: 33, d1: 27, d2: 22, d3: 17, d4: 9 },
  { date: '2024-01', d0: 30, d1: 25, d2: 20, d3: 15, d4: 8 },
  { date: '2024-02', d0: 28, d1: 23, d2: 18, d3: 13, d4: 7 },
  { date: '2024-03', d0: 25, d1: 20, d2: 16, d3: 12, d4: 6 }
];

export const cascadeImpacts: CascadeImpact[] = [
  {
    id: '1',
    sector: 'Water Resources',
    impactLevel: 90,
    description: 'Severely depleted reservoirs and groundwater',
    affectedMetrics: ['Reservoir Levels', 'Groundwater', 'Water Quality']
  },
  {
    id: '2',
    sector: 'Agriculture',
    impactLevel: 85,
    description: 'Crop failures and livestock stress',
    affectedMetrics: ['Crop Yield', 'Soil Moisture', 'Irrigation']
  },
  {
    id: '3',
    sector: 'Ecosystems',
    impactLevel: 75,
    description: 'Habitat degradation and wildlife stress',
    affectedMetrics: ['Vegetation Health', 'Biodiversity', 'Fire Risk']
  },
  {
    id: '4',
    sector: 'Energy',
    impactLevel: 60,
    description: 'Reduced hydropower generation capacity',
    affectedMetrics: ['Hydropower', 'Cooling Systems', 'Transmission']
  },
  {
    id: '5',
    sector: 'Economy',
    impactLevel: 50,
    description: 'Increased food prices and economic losses',
    affectedMetrics: ['Food Prices', 'Employment', 'Rural Income']
  },
  {
    id: '6',
    sector: 'Public Health',
    impactLevel: 40,
    description: 'Water-related illness and heat stress',
    affectedMetrics: ['Water Quality', 'Air Quality', 'Heat Stress']
  }
];

export const nationalDroughtSummary = {
  affectedStates: 27,
  populationImpacted: 68.5, // millions
  agriculturalLosses: 12.7, // billions $
  waterRestrictions: 1243, // number of communities
  fireRisk: 'Extreme',
  averageDroughtIntensity: 'D2'
};
