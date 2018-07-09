import { getRoundOnePicks, getRound16Picks, getQuarterPicks, getSemiPicks, getFinalPicks, getTopScorerPick, getTeamPick} from './actions/picksActions';
import { getTeams, getUsers, getTopScorers, getStatus, getGroupsStats, getRound16Stats, getQuarterStats, getSemiStats, getFinalStats } from './actions/getActions';


export function getWatchGroupsStats () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("groupsStats").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getGroupsStats(snapshot.val()));
    });
  };
};

export function getWatchRound16Stats () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("round16Stats").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getRound16Stats(snapshot.val()));
    });
  };
};

export function getWatchQuarterStats () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("quarterStats").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getQuarterStats(snapshot.val()));
    });
  };
};

export function getWatchSemiStats () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("semiStats").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getSemiStats(snapshot.val()));
    });
  };
};

export function getWatchFinalStats () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("finalStats").orderByKey();
    return ref.on('value', (snapshot) => {
      dispatch(getFinalStats(snapshot.val()));
    });
  };
};

export function getOnceUsers () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("users").orderByKey();
    return ref.on('value', (snapshot) => {
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
      dispatch(getTeamPick(snapshot.val()));
    });
  };
};

export function getOnceMyRoundOnePicks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/roundOnePicks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      if (snapshot.val()) {
        dispatch(getRoundOnePicks(snapshot.val()));
      }
    });
  };
};

export function getOnceMyRound16Picks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/round16Picks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      if (snapshot.val()) {
        dispatch(getRound16Picks(snapshot.val()));
      }
    });
  };
};

export function getOnceMyQuarterPicks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/quarterPicks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      if (snapshot.val()) {
        dispatch(getQuarterPicks(snapshot.val()));
      }
    });
  };
};

export function getOnceMySemiPicks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/semiPicks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      if (snapshot.val()) {
        dispatch(getSemiPicks(snapshot.val()));
      }
    });
  };
};

export function getOnceMyFinalPicks (uid) {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child(`users/${uid}/finalPicks`).orderByKey();
    return ref.once('value').then((snapshot) => {
      if (snapshot.val()) {
        dispatch(getFinalPicks(snapshot.val()));
      }
    });
  };
};
