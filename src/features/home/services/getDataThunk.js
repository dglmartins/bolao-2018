import { getGroups } from './actions/groupsActions';
import { getRoundOnePicks, getTopScorerPick, getTeamPick} from './actions/picksActions';
import { getStatus } from './actions/getActions';
import { getTopScorers } from './actions/getActions';
import { getTeams } from './actions/getActions';
import { getUsers } from './actions/getActions';



export function getOnceAllGroups () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("groups").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getGroups(snapshot.val()));
    });
  };
};

export function getOnceUsers () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("users").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getUsers(snapshot.val()));
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

export function getTeamsThunk () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("teams").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getTeams(snapshot.val()));
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

export function getTeamPickThunk (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/teamPick`);
    return ref.once('value').then((snapshot) => {
      console.log(snapshot.val())
      dispatch(getTeamPick(snapshot.val()));
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
