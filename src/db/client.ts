import { PrismaNeon } from "@prisma/adapter-neon";
import "dotenv/config";
import { env } from "prisma/config";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaNeon({ connectionString: env("DATABASE_URL") });
export const prisma = new PrismaClient({ adapter });
