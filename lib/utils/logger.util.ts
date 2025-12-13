/**
 * Professional Winston Logger with Colorful Output
 * 
 * Provides structured, colorful logging for the entire application.
 * Logs API requests, database connections, errors, and more.
 * 
 * Usage:
 *   import logger from '@/lib/utils/logger.util';
 *   logger.info('Message', { metadata });
 *   logger.error('Error', { error });
 *   logger.api('GET', '/api/v1/users', { status: 200 });
 */

import winston from 'winston';

// Custom format for console output with colors and emojis
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ timestamp, level, message, api, db, connection, ...meta }) => {
    // Format metadata
    const metaObj: any = { ...meta };
    if (api) metaObj.api = api;
    if (db) metaObj.db = db;
    if (connection) metaObj.connection = connection;
    
    const metaStr = Object.keys(metaObj).length > 0 
      ? '\n' + JSON.stringify(metaObj, null, 2)
      : '';
    
    // Format stack trace if present
    const stackStr = meta.stack ? '\n' + meta.stack : '';
    
    return `${timestamp} [${level}] ${message}${metaStr}${stackStr}`;
  })
);

// Create transports - console only (no file logging to save costs)
const transports: winston.transport[] = [
  // Console transport with colors
  new winston.transports.Console({
    format: consoleFormat,
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  }),
];

// Create the logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
  transports,
  // Don't exit on handled exceptions
  exitOnError: false,
});

// Extend logger with custom methods
interface ExtendedLogger extends winston.Logger {
  api: (method: string, path: string, meta?: ApiLogMeta) => void;
  db: (operation: string, meta?: DbLogMeta) => void;
  success: (message: string, meta?: any) => void;
  connection: (service: string, event: 'connect' | 'disconnect' | 'error', meta?: any) => void;
}

interface ApiLogMeta {
  status?: number;
  duration?: number;
  userId?: string;
  ip?: string;
  userAgent?: string;
  body?: any;
  query?: any;
  params?: any;
  error?: Error;
}

interface DbLogMeta {
  model?: string;
  duration?: number;
  query?: string;
  params?: any;
  error?: Error;
  operation?: string;
}

/**
 * Log API requests
 */
(logger as ExtendedLogger).api = (method: string, path: string, meta?: ApiLogMeta) => {
  const statusEmoji = meta?.status 
    ? meta.status >= 500 ? '🔴' 
    : meta.status >= 400 ? '🟡' 
    : '🟢'
    : '🌐';
  
  const message = `${statusEmoji} ${method} ${path}${meta?.status ? ` [${meta.status}]` : ''}${meta?.duration ? ` (${meta.duration}ms)` : ''}`;
  const level = meta?.error || (meta?.status && meta.status >= 500) ? 'error' 
    : meta?.status && meta.status >= 400 ? 'warn' 
    : 'info';
  
  logger.log({
    level,
    message,
    api: {
      method,
      path,
      ...meta,
    },
  });
};

/**
 * Log database operations
 */
(logger as ExtendedLogger).db = (operation: string, meta?: DbLogMeta) => {
  const emoji = meta?.error ? '❌' : '💾';
  const message = `${emoji} ${operation}${meta?.model ? ` [${meta.model}]` : ''}${meta?.duration ? ` (${meta.duration}ms)` : ''}`;
  const level = meta?.error ? 'error' : 'debug';
  
  logger.log({
    level,
    message,
    db: {
      operation,
      ...meta,
    },
  });
};

/**
 * Log successful operations
 */
(logger as ExtendedLogger).success = (message: string, meta?: any) => {
  logger.info(`✅ ${message}`, meta);
};

/**
 * Log connection events (DB, Supabase, etc.)
 */
(logger as ExtendedLogger).connection = (service: string, event: 'connect' | 'disconnect' | 'error', meta?: any) => {
  const emoji = event === 'connect' ? '🔌' : event === 'disconnect' ? '🔌' : '❌';
  const message = `${emoji} ${service.toUpperCase()} ${event.toUpperCase()}`;
  const level = event === 'error' ? 'error' : 'info';
  
  logger.log({
    level,
    message,
    connection: {
      service,
      event,
      ...meta,
    },
  });
};

// Export the extended logger
export default logger as ExtendedLogger;
