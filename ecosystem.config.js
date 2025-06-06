export const apps = [
    {
        name: "clean-up",
        script: "npm",
        args: "run clean-up",
        cron_restart: "0 15 * * *",
        autorestart: false,
        watch: false
    }
];
