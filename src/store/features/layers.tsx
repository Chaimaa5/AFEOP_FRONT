import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LayerSettings {
  opacity: number;
  colorRamp: string;
  view: boolean;

}


interface LayersState {
  layers: Record<string, LayerSettings>;
  selectedLayer?:string; 
  geojsonLayers?: any;
  currentLayerIndex: number;
  player: boolean;
}

const initialState: LayersState = {
  layers: {},
  selectedLayer: undefined, 
  geojsonLayers: [],
  currentLayerIndex: 0,
  player: false,

};

const layerSlice = createSlice({
  name: 'layer',
  initialState,
  reducers: {
    selectLayer: (state, action: PayloadAction<string>) => {
      state.selectedLayer = action.payload;
    },
    setOpacity: (state, action: PayloadAction<number>) => {
      if (state.selectedLayer) {
        state.layers[state.selectedLayer].opacity = action.payload;
      }
    },
    setColorRamp: (state, action: PayloadAction<string>) => {
      if (state.selectedLayer) {
        state.layers[state.selectedLayer].colorRamp = action.payload;
      }
    },
    addLayer: (state, action: PayloadAction<string>) => {
        const layerName = action.payload;
        state.layers[layerName] = { opacity: 1, colorRamp: 'default', view: true };
        state.selectedLayer = layerName;
      },
      removeLayer: (state, action: PayloadAction<string>) => {
        const layerName = action.payload;
        delete state.layers[layerName];
        if (state.selectedLayer === layerName) {
          state.selectedLayer = null;
        }
      },
    updateLayers: (state, action: PayloadAction<Record<string, LayerSettings>>)  => {
      state.layers  = action.payload
    },
    updateView: (state, action: PayloadAction<boolean>) => {
      if (state.selectedLayer) {
        state.layers[state.selectedLayer].view = action.payload;
      }
    },
    addOrUpdateLayer: (
        state,
        action: PayloadAction<{ name: string; settings: LayerSettings }>
      ) => {
        const { name, settings } = action.payload;
        state.layers[name] = settings; // Add or update the layer with provided settings
      },
    addOrUpdateGeojsonLayer: (
      state,
      action: PayloadAction<any>
    ) => {
      state.geojsonLayers.push(action.payload);

    },
    updateLayerIndex: (state, action: PayloadAction<number>) => {
      state.currentLayerIndex = action.payload;
    },
    updatePlayer: (state, action: PayloadAction<boolean>) => {
      state.player = action.payload;
    }
  },
});

export const { selectLayer, setOpacity, setColorRamp, updateLayers, addLayer, removeLayer, updateView, addOrUpdateLayer, addOrUpdateGeojsonLayer, updateLayerIndex, updatePlayer } = layerSlice.actions;
export default layerSlice.reducer;





