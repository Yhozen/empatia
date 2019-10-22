const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

exports.postsCreatedAt = functions.firestore
  .document("posts/{postId}")
  .onCreate((snap, context) => {
    return snap.ref
      .set(
        {
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .catch(error => {
        console.log(error);
        return false;
      });
  });

exports.offeredCreatedAt = functions.firestore
  .document("offered/{offeredId}")
  .onCreate((snap, context) => {
    return snap.ref
      .set(
        {
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .catch(error => {
        console.log(error);
        return false;
      });
  });

exports.neededCreatedAt = functions.firestore
  .document("needed/{neededId}")
  .onCreate((snap, context) => {
    return snap.ref
      .set(
        {
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .catch(error => {
        console.log(error);
        return false;
      });
  });
