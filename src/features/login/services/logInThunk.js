// import { spinnerOnOff } from '../../spinner/services/spinnerActions';

export function signInThunk ({email, password}) {
  return function(dispatch, getState, api) {
    // if (!api.checkValidAdminEmail(email)) {
    //   return Promise.resolve();
    // }
    // dispatch(spinnerOnOff(true));
    return api.firebaseAuth.signInWithEmailAndPassword(email.toLowerCase(), password)
      // .then(() => {
      //   dispatch(spinnerOnOff(false));
    // })
      .catch((error) => {
        alert(error);
      // dispatch(spinnerOnOff(false));
    });
  };
};

export function resetPassThunk (email) {
  return function(dispatch, getState, api) {
    // if (!api.checkValidAdminEmail(email)) {
    //   return Promise.resolve();
    // }
    // dispatch(spinnerOnOff(true));
    return api.firebaseAuth.sendPasswordResetEmail(email.toLowerCase())
      .then(() => {
        // dispatch(spinnerOnOff(false));
        alert("Success. You will receive an email shortly.");
        return Promise.resolve("success");
    }).catch((error) => {
      alert(error);
      // dispatch(spinnerOnOff(false));
      return Promise.resolve(error);
    });
  };
};
