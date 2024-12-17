// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import { server } from './mocks/server';  // Ensure the mock server is imported
import App from './App';  // Your component to test

it('renders success message from API', async () => {
  render(<App />);

  // Assuming your component is making a request to the mocked endpoint
  const successMessage = await screen.findByText(/Success/);
  expect(successMessage).toBeInTheDocument();  // Test if the mock response is displayed
});
