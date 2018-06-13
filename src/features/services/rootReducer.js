import { user } from '../login/services/userReducer';
import { header } from '../sharedComponents/mainHeader/services/headerReducer';
import { groups } from '../home/services/reducers/groupsReducer';


import  { combineReducers } from 'redux';

export default combineReducers({
  header,
  groups,
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
