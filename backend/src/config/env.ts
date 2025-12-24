import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

// exporting environment variables
export const NODE_ENV: string = process.env.NODE_ENV || "development";
export const PORT: string = process.env.PORT || "5500";
export const SERVER_URL: string = process.env.SERVER_URL || "";

