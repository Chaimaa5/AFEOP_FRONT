import { PayloadAction, createSlice } from '@reduxjs/toolkit';



interface ForecastsState {
  date? : string,
  productId?: number;
}

const initialState: ForecastsState = {
  date: '2023',
  productId: 1,
};

const ForecastSlice = createSlice({
  name: 'Forecast',
  initialState,
  reducers: {
    updateForecastDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    updateForecastProduct: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
  
  },
});

export const { updateForecastDate, updateForecastProduct } = ForecastSlice.actions;
export default ForecastSlice.reducer;





