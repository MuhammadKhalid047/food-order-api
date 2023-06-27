import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import totalReducer from './totalSlice';

const rootReducer = combineReducers({
  order: orderReducer,
  totalAmount: totalReducer,
});

export default rootReducer;
