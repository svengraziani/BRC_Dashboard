import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    alias_name: "",
    street: "",
    street_number: "",
    additional_address_information: "",
    postal_code: "",
    city: "",
    country: "",
    email: "",  
    order_number: "",
    power_purchase_costs: "",
    notes:"",

    module_manufacturer: "",
    inverter_manufacturer: "",
    module_type: "",
    inverter_type: "",
    energy_storage_exists: "",
    energy_storage_manufacturer: "",
    energy_storage_type: "",
    energy_storage_capacity_kwh: "",
    wallbox_exists: ""
};

export const facilitySlice = createSlice({
  name: "facilityInfo",
  initialState,
  reducers: {
    setFacilityData: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
});

export const { setFacilityData } = facilitySlice.actions;

export default facilitySlice.reducer;