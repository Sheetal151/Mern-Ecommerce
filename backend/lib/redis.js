import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  tls: {}
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (err) => {
  console.error("Redis error:", err.message);
});