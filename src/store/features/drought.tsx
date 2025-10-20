import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface Analysis{
    mean: number;
    max: number;
    min: number;
    std: number;
}

const variableUnitMap: Record<string, string> = {
  AD: 'm³/m³',          // Agricultural Drought → millimeters
  MD: 'mm',          // Meteorological Drought → millimeters
  HD: 'm³/s',        // Hydrological Drought → streamflow
  ZNDVI: '',     // Vegetation Index → unitless
};


export interface RootState {
  layer: string;
  variable: string;
  analysis: Analysis;
  unit: string;

}

const initialState: RootState = {
  layer: "",
  variable: "ZNDVI",
  analysis: {mean: 0, max: 0, std: 0, min: 0} as Analysis,
  unit: "",
};

export  const DroughtSlice = createSlice({
  name: 'Drought',
  initialState,
  reducers: {
 
    setLayer: (state, action: PayloadAction<string>) => {
        state.layer = action.payload
    },
    setVariable: (state, action: PayloadAction<string>) => {
        state.variable = action.payload
        state.unit = variableUnitMap[action.payload] || '';
    },
    setAnalysis: (state, action: PayloadAction<Analysis>) => {
        state.analysis = action.payload
    },

  }

})

export const  { setLayer, setVariable, setAnalysis} = DroughtSlice.actions
export default DroughtSlice.reducer;
