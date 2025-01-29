import { server } from './mock/server.ts';
import { beforeAll, afterAll, afterEach } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
