// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require("firebase-admin");
// admin.initializeApp();

exports.handler = (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" }).sendStatus(200);
};

export const helloWorld = functions.https.onRequest((req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.send("Hello from Firebase!\n\n");
});

export const envConfig = functions.https.onRequest((req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.set("Access-Control-Allow-Methods", "GET, POST");
  const config = functions.config();
  res.send(config);
});
