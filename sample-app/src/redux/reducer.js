import { combineReducers } from 'redux';

// reducer import
import themeReducer, { initialState as themeInitialState } from './themeReducer/themeReducer';

export const initialState = {
  theme: themeInitialState
};

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: themeReducer
});

export default reducer;
