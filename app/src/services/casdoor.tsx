import Casdoor from "casdoor-js-sdk";

const sdkConfig = {
  serverUrl: "http://localhost:8000",
  clientId: process.env.CASDOOR_CLIENT_ID || "client",
  appName: "casdoor",
  organizationName: "casdoor",
  redirectPath: "/auth/callback",
  signinPath: "/signin",
};

// TODO - use env vars
// const casdoorEndpoint = process.env.CASDOOR_ENDPOINT
// const clientId = process.env.CASDOOR_CLIENT_ID
// const clientSecret = process.env.CASDOOR_CLIENT_SECRET
// const redirectUri = process.env.CASDOOR_REDIRECT_URI

const casdoor = new Casdoor(sdkConfig);

export { casdoor };
