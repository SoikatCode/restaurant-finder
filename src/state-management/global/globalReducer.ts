import { LOADER_SHOW, LOADER_HIDE, COMPLETE_APP_INIT } from './globalActionTypes';

const initialState = {
  isLoading: false,
  IsAppInitCompleted: false,
  appTitle: 'Restaurant Finders',
};

export default function (state = initialState, { type, payload }: { type: any; payload: any }) {
  console.log('called reducer->', type);
  
  switch (type) {
    case COMPLETE_APP_INIT:
      return {
        ...state,
        IsAppInitCompleted: true
      };
    case LOADER_SHOW:
      return {
        ...state,
        isLoading: true
      };
    case LOADER_HIDE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}