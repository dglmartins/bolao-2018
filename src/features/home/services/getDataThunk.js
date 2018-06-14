import { getGroups } from './actions/groupsActions';
import { getRoundOnePicks } from './actions/picksActions';


export function getOnceAllGroups () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("groups").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getGroups(snapshot.val()));
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
