import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component correctly', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Bem-vindo ao Receitas Sustentáveis/i);
  expect(headingElement).toBeInTheDocument();
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(3);
});
