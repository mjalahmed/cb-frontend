import { PrismaClient } from '@prisma/client';
import logger from '@/lib/utils/logger.util';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with logging
const createPrismaClient = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
      ? [
          { level: 'query', emit: 'event' },
          { level: 'error', emit: 'event' },
          { level: 'warn', emit: 'event' },
        ]
      : [{ level: 'error', emit: 'event' }],
  });

  // Log database connection
  logger.connection('Prisma', 'connect', {
    database: process.env.DATABASE_URL ? 'configured' : 'not configured',
  });

  // Set up event listeners for logging
  if (process.env.NODE_ENV === 'development') {
    client.$on('query' as never, (e: any) => {
      logger.db('Query', {
        query: e.query,
        duration: e.duration,
        params: e.params,
      });
    });
  }

  client.$on('error' as never, (e: any) => {
    logger.db('Error', {
      error: e,
    });
  });

  client.$on('warn' as never, (e: any) => {
    logger.warn('Prisma Warning', e);
  });

  return client;
};

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
