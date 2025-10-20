import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface MeasureVariable {
  id: number;
  variable_name: string;
}

interface ChartData {
    dates: any[];
    values: number[];
    date_labels: any[];
}

export interface RootState {
  station: any;
  date: any;
  variable: string;
  measureVariable: MeasureVariable[];
  chartData: ChartData;
  updateStdDevData: ChartData;
}

const initialState: RootState = {
  station: "",
  date: [],
  variable: "",
  measureVariable: [],
  chartData: { dates: [], values: [], date_labels: [] },
  updateStdDevData: { dates: [], values: [], date_labels: [] }
};

export  const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    updateStation: (state, action: PayloadAction<any>)  => {
      state.station  = action.payload
    },
    updateDate: (state, action: PayloadAction<any>) => {
      state.date = action.payload
    },
    updateVariable: (state, action: PayloadAction<string>) => {
      state.variable = action.payload
    },
    updateStationData: (state, action: PayloadAction<RootState>) => {
        return { ...state, ...action.payload };
    },
    updateMeasureVariable: (state, action: PayloadAction<MeasureVariable[]>) => {
        state.measureVariable = action.payload
    },
    updateChartData: (state, action: PayloadAction<ChartData>) => {
        state.chartData = action.payload
    },
    updateStdDevData: (state, action: PayloadAction<ChartData>) => {
        state.updateStdDevData = action.payload
    }
  }

})

export const  { updateDate, updateStation,  updateVariable, updateStationData, updateChartData, updateMeasureVariable, updateStdDevData} = stationSlice.actions
export default stationSlice.reducer;
