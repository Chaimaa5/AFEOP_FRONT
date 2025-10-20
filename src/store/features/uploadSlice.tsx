import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RootState {
  upModal: boolean;
//   max: number;
//   mean: number;
//   std: number;
//   median: number;

}

const initialState: RootState = {
  upModal: false,
//   max: 0,
//   mean: 0,
//   std: 0,
//   median: 0,

};

export  const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    updateUpModal: (state, action: PayloadAction<boolean>)  => {
      state.upModal  = action.payload
    },
    // updateStd: (state, action: PayloadAction<number>) => {
    //   state.std = action.payload
    // },
    // updateMax: (state, action: PayloadAction<number>) => {
    //   state.max = action.payload
    // },
    // updateMean: (state, action: PayloadAction<number>) => {
    //   state.mean = action.payload
    // },
    // updateMedian: (state, action: PayloadAction<number>) => {
    //   state.median= action.payload
    // },
    // updateUploadData: (state, action: PayloadAction<RootState>) => {
    //     return { ...state, ...action.payload };
    // },
  }

})

export const  {updateUpModal} = uploadSlice.actions
export default uploadSlice.reducer;
