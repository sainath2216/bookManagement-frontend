// src/mocks/handlers.js
import { rest } from 'msw';  // Importing the correct rest module

export const handlers = [
  rest.get('/api/some-endpoint', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Success' }) // Mock response data
    );
  }),
];
