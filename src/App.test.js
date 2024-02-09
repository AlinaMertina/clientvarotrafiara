import { render, screen } from '@testing-library/react';
import Autre from './Autre';

test('renders learn react link', () => {
  render(<Autre />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
