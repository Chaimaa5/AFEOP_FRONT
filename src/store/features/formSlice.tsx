import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Option {
  id: number;
  Code_variable: string;
  Abbreviation: string;
  Unit: string;
}

export interface RootState {
  selectedOption: string;
  unit: string;
  selectedHours: string[];
  startDate: string;
  endDate: string;
  response: any;
  openModal: boolean;
  rangeData: any;
  rangeUrl: string[];
  rangeDataUrl: string[];
  ShpPath: string;
  request: string;
  Abbreviation: string;
  Options: Option[];
}

const initialState: RootState = {
  unit: "",
  selectedOption: "",
  selectedHours: [],
  rangeUrl: [],
  rangeDataUrl: [],
  startDate: "",
  endDate: "",
  response: "",
  openModal: false,
  rangeData: null,
  ShpPath: "",
  request: "",
  Abbreviation: "",
  Options: [],
};

export  const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateOption: (state, action: PayloadAction<string>)  => {
      state.selectedOption  = action.payload
    },
    updateUnit: (state, action: PayloadAction<string>)  => {
      state.unit  = action.payload
    },
    updateHours: (state, action: PayloadAction<string[]>) => {
      state.selectedHours = action.payload
    },
    updateStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload
    },
    updateEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload
    },
    updateResponse: (state, action: PayloadAction<any>) => {
      state.response = action.payload
    },
    updateOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload
    },
    updateRange: (state, action: PayloadAction<any>) => {
      state.rangeData = action.payload
    },
    updateRangeUrls: (state, action: PayloadAction<string[]>) => {
      state.rangeUrl = action.payload
    },
    updateRangeDataUrls: (state, action: PayloadAction<string[]>) => {
      state.rangeDataUrl = action.payload
    },
    updateRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload
    },
    updateShpPath: (state, action: PayloadAction<string>) => {
      state.ShpPath = action.payload
    },
    updateAbbreviation: (state, action: PayloadAction<string>) => {
      state.Abbreviation = action.payload
    },
    updateOptions: (state, action: PayloadAction<Option[]>) => {
      state.Options = action.payload
    },
    


  }

})

export const  { updateOption, updateHours, updateStartDate, updateEndDate, updateResponse, updateOpenModal, updateRange,updateRangeUrls, updateRequest, updateShpPath, updateUnit, updateRangeDataUrls, updateOptions, updateAbbreviation} = formSlice.actions
export default formSlice.reducer;
