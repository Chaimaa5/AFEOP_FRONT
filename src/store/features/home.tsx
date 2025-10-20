
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { today} from "@internationalized/date";
import { CalendarDate } from '@nextui-org/react';

// interface Alert{
//     message: string;
//     show: boolean;
// }
export interface RootState {
    activeTooltip: string;

}

const initialState: RootState = {
  activeTooltip: "",
};

export  const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
 
    setActiveTooltip: (state, action: PayloadAction<string>) => {
        state.activeTooltip = action.payload
    },

  }

})

export const  { setActiveTooltip} = HomeSlice.actions
export default HomeSlice.reducer;
