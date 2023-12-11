import packageJson from "../package.json";

const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: process.env["NODE_ENV"] ?? "development",
  port: process.env["PORT"] ?? 3000,

  footballApiKey: process.env["FOOTBALL_API_KEY"] ?? "none",
  footballApiUrl: "https://apiv3.apifootball.com",

  clientCorsOrigins: {
    test: process.env["DEV_ORIGIN"] ?? "*",
    development: process.env["DEV_ORIGIN"] ?? "*",
    production: process.env["PROD_ORIGIN"] ?? "none",
  },
};

export default config;
