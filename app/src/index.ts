import app from "./app";
import config from "./config";
import cron from "node-cron";
import MainSyncerService from "./services/sync/main";

const mainSyncerService = new MainSyncerService();

const cronJob = cron.schedule("0 0 * * *", async () => {
  await mainSyncerService.sync(false);
  console.log("Cron job executed");
});

cronJob.start();

app.listen(config.port, () => {
  console.log(`🚀 ${config.name} ${config.version} 🚀`);
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`
  );
});
