/**
 * @flow
 */

export const APP_NAME = 'iGap+';
export const APP_ID = 10;
export const APP_BUILD_VERSION = 1;
export const APP_VERSION = '1.0.0';

export const DATABASE_SCHEMA_VERSION = 1;

export const WEBSOCKET_ENDPOINT = 'wss://secure.igap.net/test/';
export const WEBSOCKET_RECONNECT_INTERVAL_SEC = 10;

export const API_CONCURRENCY = 40;

export const FILE_MANAGER_DOWNLOAD_MAX_CHUNK_SIZE = 100 * 1024;
export const FILE_MANAGER_DOWNLOAD_MIN_CHUNK_SIZE = 20 * 1024;
export const FILE_MANAGER_MAX_CONCURRENT_DOWNLOAD = 4;

export const FILE_MANAGER_MAX_CONCURRENT_UPLOAD = 1;

export const CLIENT_GET_ROOM_LIST_PAGINATION_LIMIT = 10;
export const CLIENT_GET_ROOM_HISTORY_PAGINATION_LIMIT = 10;