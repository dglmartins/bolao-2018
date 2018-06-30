import { user } from '../login/services/userReducer';
import { header } from '../sharedComponents/mainHeader/services/headerReducer';
import { groupsStats } from '../home/services/reducers/groupsReducer';
import { round16Stats } from '../home/services/reducers/round16Reducer';
import { quarterStats } from '../home/services/reducers/quarterReducer';
import { status } from '../home/services/reducers/statusReducer';
import { topScorers } from '../home/services/reducers/topScorersReducer';
import { teams } from '../home/services/reducers/teamsReducer';
import { roundOnePicks } from '../home/services/reducers/roundOnePicksReducer';
import { round16Picks } from '../home/services/reducers/round16PicksReducer';
import { quarterPicks } from '../home/services/reducers/quarterPicksReducer';

import { topScorerPick } from '../home/services/reducers/topScorersReducer';
import { users } from '../home/services/reducers/usersReducer';
import { teamPick } from '../home/services/reducers/teamsReducer';
import { spinner } from '../spinner/services/spinnerReducer';


import  { combineReducers } from 'redux';

export default combineReducers({
  header,
  user,
  roundOnePicks,
  status,
  spinner,
  topScorers,
  topScorerPick,
  teams,
  teamPick,
  users,
  groupsStats,
  round16Stats,
  round16Picks,
  quarterStats,
  quarterPicks
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
