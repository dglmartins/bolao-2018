import { getGroups } from './actions/groupsActions';
import { getRoundOnePicks, getTopScorerPick} from './actions/picksActions';
import { getStatus } from './actions/getActions';
import { getTopScorers } from './actions/getActions';

export function getOnceAllGroups () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("groups").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getGroups(snapshot.val()));
    });
  };
};

export function getStatusThunk () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("status").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getStatus(snapshot.val()));
    });
  };
};

export function getTopScorersThunk () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("topScorers").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getTopScorers(snapshot.val()));
    });
  };
};

export function getTopScorerPickThunk (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/topScorerPick`);
    return ref.once('value').then((snapshot) => {
      dispatch(getTopScorerPick(snapshot.val()));
    });
  };
};

export function getOnceMyRoundOnePicks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/roundOnePicks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      console.log(snapshot.val())
      if (snapshot.val()) {
        dispatch(getRoundOnePicks(snapshot.val()));
      }
    });
  };
};
