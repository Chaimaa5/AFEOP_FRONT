import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { today} from "@internationalized/date";
import { CalendarDate } from '@nextui-org/react';


interface Analysis{
  mean: number;
  max: number;
  min: number;
  median: number;
}

export interface RootState {
  layer: string;
  analysis: Analysis;


}

const initialState: RootState = {
  layer: "soil_moisture_2015_0_04",
  analysis: {mean: 0, max: 0, min: 0, median: 0} as Analysis,
};

export  const FSMSlice = createSlice({
  name: 'FSM',
  initialState,
  reducers: {
 
    setLayer: (state, action: PayloadAction<string>) => {
        state.layer = action.payload
    },
    setAnalysis: (state, action: PayloadAction<Analysis>) => {
      state.analysis = action.payload
  },

  }

})

export const  { setLayer, setAnalysis} = FSMSlice.actions
export default FSMSlice.reducer;
