
import { combineReducers } from 'redux';
import formSlice from './features/formSlice';
import drawSlice from './features/drawSlice';
import rasterSlice from './features/rasterSlice';
import analysisSlice from './features/analysisSlice';
import stationSlice from './features/stationSlice';
import uploadSlice  from './features/uploadSlice';
import layerSlice  from './features/layers';
import alertSlice  from './features/alert';
import forecastSlice from './features/forecastSlice';
import MapSlice from './features/mapSlice';
import  FSMSlice  from './features/fusedSM';
import DroughtSlice from './features/drought';
import HomeSlice  from './features/home';

// Combine all your slices/reducers here
const rootReducer = combineReducers({
    form: formSlice,
    draw: drawSlice,
    raster: rasterSlice,
    analysis: analysisSlice,
    station: stationSlice,
    upload: uploadSlice,
    layer: layerSlice,
    alert: alertSlice,
  forecast: forecastSlice,
  FusedSM: FSMSlice,
  Drought: DroughtSlice,
  map: MapSlice,
  home: HomeSlice,
});

export default rootReducer;
