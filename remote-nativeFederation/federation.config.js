const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  output: {
    uniqueName: "remote-nativeFederation",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  name: "remote-nativeFederation",
  filename: "remoteEntry.js",
  exposes: {
    "./AppModule": "./src/app/app.module.ts",
  },
  library: { type: "var", name: "remoteNativeFederation" },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
