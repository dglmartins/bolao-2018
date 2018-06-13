import { user } from '../login/services/userReducer';
import { header } from '../sharedComponents/mainHeader/services/headerReducer';


import  { combineReducers } from 'redux';

export default combineReducers({
  header,
  // subHeader,
  // sideMenu,
  user,
  // spinner,
  // filterIndexBy,
  // products,
  // companies,
  // brands,
  // categories,
  // cities,
  // states,
  // countries,
  // adminUsers,
  // gotAll,
  // sortIndexBy,
  // newView
});
