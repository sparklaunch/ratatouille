module.exports = {
    apps: [
        {
            name: "clean-up",
            script: "npm",
            args: "run clean-up",
            cron_restart: "0 0 * * *",
            autorestart: false,
            watch: false
        }
    ]
};