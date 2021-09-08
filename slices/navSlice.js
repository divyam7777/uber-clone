import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state,action) => {
            state.origin = action.payload;
        },
        setDestination: (state,action) => {
            state.destination = action.payload;
        },
        setTimeInformation: (state,action) => {
            state.setTimeInformation = action.payload;
        },
    },
});
export const { setOrigin, setDestination, setTimeInformation } = navSlice.actions;

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;