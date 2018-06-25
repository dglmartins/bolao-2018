// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// const functions = require('firebase-functions');
//
// const _ = require('ramda');
//
// function sortByFIFAOrder(group) {
//   const groupArray = Object.keys(group).map((team) => (
//     Object.assign({}, group[team], {team})
//   ))
//   const sortByOrder = _.sortWith([
//     _.descend(_.prop('Pts')),
//     _.descend(_.prop('GD')),
//     _.descend(_.prop('GF')),
//     _.ascend(_.prop('team')),
//   ]);
//   const orderedArray = sortByOrder(groupArray)
//   return orderedArray
// }
//
// function calcPointsRoundOne(groupStatus, user) {
//   let points = 0
//   if (user.roundOnePicks[groupStatus.group].firstPlacePick === groupStatus.firstPlace) {
//    points += 10
//   }
//   if (user.roundOnePicks[groupStatus.group].firstPlacePick === groupStatus.secondPlace) {
//    points += 5
//   }
//   if (user.roundOnePicks[groupStatus.group].secondPlacePick === groupStatus.firstPlace) {
//    points += 5
//   }
//
//   if (user.roundOnePicks[groupStatus.group].secondPlacePick === groupStatus.secondPlace) {
//    points += 10
//   }
//   return {points}
// }
//
// const curriedPoints = _.curry(calcPointsRoundOne)
//
//
// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
//
//
// // The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();
//
//
// exports.calcRoundOnePoints = functions.database.ref('/status/groupStagePicks/{group}')
//     .onUpdate((change, context) => {
//       // Grab the current value of what was written to the Realtime Database.
//       const status = change.after.val();
//       // console.log('Uppercasing', context.params.pushId, original);
//
//       console.log(`group ${context.params.group}, status ${status}`);
//       //
//       // const groupFinish = admin.database().ref(`groupStagePicks/${context.params.group}`);
//       const groupFinishRef = change.after.ref
//
//       return groupFinishRef.once('value').then((snapshot) => {
//         const groupStatus = snapshot.val()
//         if (groupStatus.status === "closed") {
//           return admin.database().ref('users/').once('value').then((usersSnap) => {
//             const users = usersSnap.val();
//             console.log(users)
//             usersWithPoints = _.map((curriedPoints(groupStatus)), users);
//             console.log(usersWithPoints);
//             return groupStatus
//           })
//         } else {
//           return(groupStatus)
//         }
//       });
//
//       // console.log('user', context.auth);
//
//       // if (status) {
//       //   "It is true"
//       // }
//       // const uppercase = original.toUpperCase();
//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to the Firebase Realtime Database.
//       // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//       // return snapshot.ref.parent.child('uppercase').set(uppercase);
//     });
