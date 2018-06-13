import { getGroups } from './actions/groupsActions';

export function getOnceAllGroups () {
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref().child("groups").orderByKey();
    return ref.once('value').then((snapshot) => {
      dispatch(getGroups(snapshot.val()));
    });
  };
};
