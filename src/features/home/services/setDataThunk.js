import { changePick } from './actions/picksActions';
import { getTopScorerPick } from './actions/picksActions';


export function createPick({uid, group, whichPick, pick}) {
  const pickId = `${group}-${whichPick}-${uid}`;
  const data = {user: uid, group, whichPick, pick}
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    return ref.child(`roundOnePicks/${pickId}`).set(data).then(() => {
      const updates = {}
      updates[`users/${uid}/roundOnePicks/${group}/${whichPick}`] = pick;
      ref.update(updates).then((results) => {
        dispatch(changePick({group, whichPick, pick}))
      })
    });
  };
};

export function setTopScorerPick({uid, topScorerPick}) {
  console.log(uid, topScorerPick)
  const pickId = uid;
  const updates = {}
  updates[`users/${uid}/topScorerPick`] = topScorerPick;
  updates[`topScorerPicks/${pickId}`] = {user: uid, pick: topScorerPick};
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    return ref.update(updates).then(() => {
      dispatch(getTopScorerPick(topScorerPick))
    });
  };
};

export function updatePick({uid, group, whichPick, pick}) {
  const pickId = `${group}-${whichPick}-${uid}`;
  const data = {user: uid, group, whichPick, pick}
  const updates = {}
  updates[`users/${uid}/roundOnePicks/${group}/${whichPick}`] = pick;
  updates[`roundOnePicks/${pickId}/pick`] = pick;
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    return ref.update(updates).then(() => {
      dispatch(changePick({group, whichPick, pick}))
    });
  };
};


// export function updatePick({uid, group, whichPick, pick, pickId}) {
//   return function(dispatch, getState, api) {
//     const ref = api.firebaseDb.ref();
//     const updates = {};
//     updates[`/users/${uid}/roundOnePicks/${group}/${whichPick}`] = pick;
//     updates[`/roundOnePicks/${pickId}/pick`] = pick;
//     return ref.update(updates).then((results) => {
//       dispatch(changePick({group, whichPick, pick}))
//     });
//   };
// };
