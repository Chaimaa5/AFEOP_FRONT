import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface Variable {
  Abbreviation: string;
  // Nan_Value: string,
  Satellite: string,
  Source: string,
  // Unit:string,
  // TimeRange: string,
  ResolutionTime:string
  ResolutionSpace: string,
}
export interface RootState {
  min: number;
  max: number;
  mean: number;
  std: number;
  // median: number;
  addChart: boolean;
  variableData: Variable;

}

const initialState: RootState = {
  min: 0,
  max: 0,
  mean: 0,
  std: 0,
  // median: 0,
  addChart: false,
  variableData: { Abbreviation: "", Nan_Value: "", Satellite: "", Source: "", Unit: "", TimeRange: "", ResolutionTime: "", ResolutionSpace: "" }

};

export  const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    updateMin: (state, action: PayloadAction<number>)  => {
      state.min  = action.payload
    },
    updateStd: (state, action: PayloadAction<number>) => {
      state.std = action.payload
    },
    updateMax: (state, action: PayloadAction<number>) => {
      state.max = action.payload
    },
    updateMean: (state, action: PayloadAction<number>) => {
      state.mean = action.payload
    },
    updateMedian: (state, action: PayloadAction<number>) => {
      state.median= action.payload
    },
    updateAddchart: (state, action: PayloadAction<boolean>) => {
      state.addChart= action.payload
    },
    updateAnalysisData: (state, action: PayloadAction<RootState>) => {
        return { ...state, ...action.payload };
    },
    updateVaribleData: (state, action: PayloadAction<Variable>) => {
      state.variableData = action.payload
    },
  }

})

export const  {updateAnalysisData, updateMax, updateMean, updateMedian, updateMin, updateStd, updateAddchart, updateVaribleData} = analysisSlice.actions
export default analysisSlice.reducer;
