import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// interface Alert{
//     message: string;
//     show: boolean;
// }
export interface RootState {
  interval: boolean;
  upload: boolean;
  message: string;


}

const initialState: RootState = {
  interval: false,
  upload: false,
  message: "",


};

export  const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertInterval: (state, action: PayloadAction<boolean>)  => {
      state.interval  = action.payload
    },
    alertUpload: (state, action: PayloadAction<boolean>)  => {
        state.upload  = action.payload
      },
    setAlertMessage: (state, action: PayloadAction<string>) => {
        state.message = action.payload
    },

  }

})

export const  {alertInterval, setAlertMessage, alertUpload} = alertSlice.actions
export default alertSlice.reducer;
