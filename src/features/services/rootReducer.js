import { user } from '../login/services/userReducer';
import { header } from '../sharedComponents/mainHeader/services/headerReducer';
import { groups } from '../home/services/reducers/groupsReducer';
import { status } from '../home/services/reducers/statusReducer';
import { roundOnePicks } from '../home/services/reducers/roundOnePicksReducer';
import { spinner } from '../spinner/services/spinnerReducer';


import  { combineReducers } from 'redux';

export default combineReducers({
  header,
  groups,
  user,
  roundOnePicks,
  status,
  spinner
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
