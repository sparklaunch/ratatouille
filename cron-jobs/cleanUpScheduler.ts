import cron from "node-cron";
import { cleanUp } from "../scripts/cleanUp";
import { logger } from "../scripts/logger";

cron.schedule("0 15 * * *", async () => {
    await logger("Clean-up started (0:00 KST)");
    await cleanUp();
    await logger("Clean-up finished");
});