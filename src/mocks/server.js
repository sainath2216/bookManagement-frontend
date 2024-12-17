// src/mocks/server.js
import { setupServer } from 'msw/node';  // Ensure you're using msw/node for the Node.js environment
import { handlers } from './handlers';  // Import the handlers

// Set up the mock server with the handlers
export const server = setupServer(...handlers);

// Start, reset, and close the server during test lifecycle
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
