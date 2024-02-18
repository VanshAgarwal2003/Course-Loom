import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './navBarSlice';

const appStore=configureStore({
    reducer: {
        navbar:navBarSlice.reducer,
    }
});

export default appStore;