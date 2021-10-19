import { tempState } from './tempState';

const initialState = {};
export const displayReducer = (data = initialState, action) => {
  switch (action.type) {
    case 'display/loadData': {
      return action.payload;
    }
    default: {
      return data;
    }
  }
};

export const loadData = () => {
  return {
    type: 'display/loadData',
    payload: tempState,
  };
};

export const weatherData = (state) => state.data;
