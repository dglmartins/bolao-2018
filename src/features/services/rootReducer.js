import { user } from '../login/services/userReducer';
import { header } from '../sharedComponents/mainHeader/services/headerReducer';
import { groups } from '../home/services/reducers/groupsReducer';
import { status } from '../home/services/reducers/statusReducer';
import { roundOnePicks } from '../home/services/reducers/roundOnePicksReducer';


import  { combineReducers } from 'redux';

export default combineReducers({
  header,
  groups,
  user,
  roundOnePicks,
  status,
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
