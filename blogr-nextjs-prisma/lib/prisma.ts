import { PrismaClient } from "@prisma/client";

// 声明全局变量，使用PrismaClient或undefined类型
declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

// 创建Prisma实例，如果已经存在，则重复使用
export const prisma = global.prisma || new PrismaClient({ log: ["query"] });

// 在非生产环境下，将Prisma实例分配给全局变量
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
