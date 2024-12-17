import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../mocks/server'; // Ensure it's the correct relative path to your mock server file

beforeAll(() => server.listen());  // Starts the server before tests
afterEach(() => server.resetHandlers());  // Resets request handlers after each test
afterAll(() => server.close());  // Closes the server after all tests are done
