import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LatLng } from 'leaflet';


interface Shape{
  type: string;
  coordinates: { lat: number; lng: number }; 
  search: boolean;
}

interface Shape{
  type: string;
  coordinates: { lat: number; lng: number }; 
  search: boolean;
}




export interface RootState {
  shape: Shape;
  geojson: any;
  coordinatesInput:any;
  drawLayer: boolean;
  markerCoordinates: { lat: number; lng: number }; 
  bbox: any;
  layers: [];
}

const initialState: RootState = {
  shape: {type: "", coordinates:  { lat: 0, lng: 0 }, search: false},
  coordinatesInput: "",
  geojson: {},
  drawLayer: false,
  markerCoordinates: {lat: 0, lng: 0},
  bbox: "",
  layers: [],
};

export  const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    updateShape: (state, action: PayloadAction<any>)  => {
      state.shape  = action.payload
    },
    updateGeojson: (state, action: PayloadAction<any>)  => {
      state.geojson  = action.payload
    },
    updateCoorInput: (state, action: PayloadAction<any>) => {
      state.coordinatesInput = action.payload
    },
    updateDrawLayer: (state, action: PayloadAction<boolean>) => {
      state.drawLayer = action.payload
    },
    updateBbox: (state, action: PayloadAction<any>)  => {
      state.bbox  = action.payload
    },
    updateLayers: (state, action: PayloadAction<any>)  => {
      state.layers  = action.payload
    },
    updateMarkerCoordinates: (state, action: PayloadAction<LatLng>) => {
      state.markerCoordinates = action.payload
    },
    resetDrawState: () => initialState,
  // }
  }

})

export const  { updateShape, updateCoorInput, updateDrawLayer,updateBbox, updateMarkerCoordinates, updateGeojson, resetDrawState} = drawSlice.actions
export default drawSlice.reducer;
