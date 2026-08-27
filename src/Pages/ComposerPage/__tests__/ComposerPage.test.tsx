import { render, screen } from '@testing-library/react';
import ComposerPage from '../ComposerPage';

it('renders', async () => {
  render(<ComposerPage />);

  expect(await screen.findByText('Workspaces')).toBeInTheDocument();
});
