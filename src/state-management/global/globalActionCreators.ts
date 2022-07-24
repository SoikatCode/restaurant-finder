import { LOADER_HIDE, LOADER_SHOW, START_INIT_APP, COMPLETE_APP_INIT } from './globalActionTypes';

function showLoader() {
  return {
    type: LOADER_SHOW
  };
}

function hideLoader() {
  return {
    type: LOADER_HIDE
  };
}

function startAppInitialization() {
  return {
    type: START_INIT_APP
  };
}

function completeAppInitialization() {
  return {
    type: COMPLETE_APP_INIT
  };
}

export { showLoader, hideLoader, startAppInitialization, completeAppInitialization };