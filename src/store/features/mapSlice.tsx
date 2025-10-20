import { PayloadAction, createSlice } from '@reduxjs/toolkit';



interface MapState {
  compare? : boolean,
}

const initialState: MapState = {
  compare: false,
};

const MapSlice = createSlice({
  name: 'Map',
  initialState,
  reducers: {
    updateCompareState: (state, action: PayloadAction<boolean>) => {
      state.compare = action.payload;
    },

  
  },
});

export const { updateCompareState } = MapSlice.actions;
export default MapSlice.reducer;





