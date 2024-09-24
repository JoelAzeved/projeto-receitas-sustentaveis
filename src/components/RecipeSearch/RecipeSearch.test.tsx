import { render, screen, fireEvent } from '@testing-library/react';
import RecipeSearch from './RecipeSearch';

test('renders RecipeSearch component correctly', () => {
  render(<RecipeSearch />);
  const headingElement = screen.getByText(/Buscar Receita/i);
  expect(headingElement).toBeInTheDocument();
});

test('displays loading state when searching for a recipe', () => {
  render(<RecipeSearch />);
  const inputElement = screen.getByPlaceholderText(/Digite as frutas que você tem/i);
  fireEvent.change(inputElement, { target: { value: 'banana, maçã' } });

  const buttonElement = screen.getByText(/Buscar Receita/i);
  fireEvent.click(buttonElement);

  const loadingElement = screen.getByText(/Buscando.../i);
  expect(loadingElement).toBeInTheDocument();
});
