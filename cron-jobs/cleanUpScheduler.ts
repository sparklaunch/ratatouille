import cron from "node-cron";
import { cleanUp } from "../scripts/cleanUp";

cron.schedule("* * * * *", async () => {
    await cleanUp();
});