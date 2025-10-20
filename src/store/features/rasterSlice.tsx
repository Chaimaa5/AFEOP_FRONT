import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RootState {
    metadata: any;
  bounds: number[];
  dtype: string;
  nodata_type: string;
  driver: string;
  width: number;
  height: any;
  nodata_value: number;
  addRaster: boolean;
  rasterBar: boolean;
  rasterUrl: string;
  colorMap?: string;
  opacity?: number;
  sidebar?: boolean;
}

const initialState: RootState = {
  metadata: "",
  bounds: [],
  dtype: "",
  nodata_type: "",
  driver: "",
  width: 0,
  height: 0,
  nodata_value: -9999,
  addRaster: false,
  rasterBar : false,
  colorMap: "SM_Viridis",
  rasterUrl: "",
  opacity: 1,
  sidebar: false
};

export  const rasterSlice = createSlice({
  name: 'raster',
  initialState,
  reducers: {
    updateMetaData: (state, action: PayloadAction<any>)  => {
      state.metadata  = action.payload
    },
    updateDriver: (state, action: PayloadAction<string>) => {
      state.driver = action.payload
    },
    updateBounds: (state, action: PayloadAction<[]>) => {
      state.bounds = action.payload
    },
    updateNoDataValue: (state, action: PayloadAction<number>) => {
      state.nodata_value = action.payload
    },
    updateDType: (state, action: PayloadAction<string>) => {
      state.dtype = action.payload
    },
    updateHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    updateWidth: (state, action: PayloadAction<number>) => {
      state.width= action.payload
    },
    updateNoDataType: (state, action: PayloadAction<string>) => {
      state.nodata_type = action.payload
    },
    updateAddRaster: (state, action: PayloadAction<boolean>) => {
        state.addRaster = action.payload
      },
    updateRasterBar: (state, action: PayloadAction<boolean>) => {
      state.rasterBar = action.payload
    },
    updateRasterUrl: (state, action: PayloadAction<string>) => {
      state.rasterUrl = action.payload
    },
    updateOpacity: (state, action: PayloadAction<number>) => {
      state.opacity = action.payload
    },
    updateColorMap: (state, action: PayloadAction<string>) => {
      state.colorMap = action.payload
    },
    updateSideBar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload
    },
    updateRasterData: (state, action: PayloadAction<RootState>) => {
        return { ...state, ...action.payload };
    },
  }

})

export const  { updateBounds, updateDType, updateDriver, updateHeight, updateMetaData, updateNoDataType,updateOpacity, updateNoDataValue, updateWidth, updateRasterData, updateAddRaster, updateRasterBar, updateRasterUrl, updateColorMap, updateSideBar} = rasterSlice.actions
export default rasterSlice.reducer;
