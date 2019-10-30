const { https } = require("firebase-functions");
const gqlServer = require("./graphql-server");

const server = gqlServer();

// Graphql api
// https://us-central1-empatia-91373.cloudfunctions.net/api/
exports.api = https.onRequest(server);
