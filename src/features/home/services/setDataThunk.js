import { changePick, changeRound16GamePick, changeQuarterGamePick, changeRound16TeamAdvance, changeQuarterTeamAdvance } from './actions/picksActions';
import { getTopScorerPick } from './actions/picksActions';
import { getTeamPick } from './actions/picksActions';


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

export function createGamePick({uid, whichRound, whichGame, team1Score, team2Score, team1, team2}) {
  const pickId = `${whichRound}-${whichGame}-${uid}`;
  console.log(pickId)
  let teamAdvance = "disabled";
  if (team1Score > team2Score) {
    teamAdvance = team1
  } else if (team2Score > team1Score) {
    teamAdvance = team2
  }
  const data = {user: uid, whichRound, whichGame, team1Score, team2Score, team1, team2, teamAdvance}
  const pick = {
    team1Score,
    team2Score,
    teamAdvance,
    set: true
  };

  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    return ref.child(`${whichRound}/${pickId}`).set(data).then(() => {
      const updates = {}
      updates[`users/${uid}/${whichRound}/${whichGame}`] = pick;
      ref.update(updates).then((results) => {
        if (whichRound === "round16Picks") {
          dispatch(changeRound16GamePick({whichGame, pick}))
        }
        if (whichRound === "quarterPicks") {
          dispatch(changeQuarterGamePick({whichGame, pick}))
        }

      })
    });
  };
};

export function updateTeamAdvance({uid, whichRound, whichGame, teamAdvance}) {
  const pickId = `${whichRound}-${whichGame}-${uid}`;
  const updates = {}
  updates[`${whichRound}/${pickId}/teamAdvance`] = teamAdvance;
  updates[`users/${uid}/${whichRound}/${whichGame}/teamAdvance`] = teamAdvance
  console.log(updates)

  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    ref.update(updates).then((results) => {
      if (whichRound === "round16Picks") {
        dispatch(changeRound16TeamAdvance({whichGame, teamAdvance}))
      }
      if (whichRound === "quarterPicks") {
        dispatch(changeQuarterTeamAdvance({whichGame, teamAdvance}))
      }

    })
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

export function setTeamPick({uid, teamPick}) {
  console.log(uid, teamPick)
  const pickId = uid;
  const updates = {}
  updates[`users/${uid}/teamPick`] = teamPick;
  updates[`teamPicks/${pickId}`] = {user: uid, pick: teamPick};
  return function(dispatch, getState, api) {
    const ref = api.firebaseDb.ref();
    return ref.update(updates).then(() => {
      dispatch(getTeamPick(teamPick))
    });
  };
};

export function updatePick({uid, group, whichPick, pick}) {
  const pickId = `${group}-${whichPick}-${uid}`;
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
