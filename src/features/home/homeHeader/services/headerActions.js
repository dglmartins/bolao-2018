export const CHANGE_HEADER_NAME_SHOWING ='CHANGE_HEADER_NAME_SHOWING';

export function changeHeaderNameShowing (nameShowing) {
  return {
    type: CHANGE_HEADER_NAME_SHOWING,
    nameShowing
  }
};
