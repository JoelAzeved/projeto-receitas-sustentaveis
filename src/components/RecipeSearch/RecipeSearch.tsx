import React, { useState } from 'react';
import './RecipeSearch.scss';
import { CohereClient } from 'cohere-ai';

// Inicialize o cliente da API Cohere com sua chave de API
const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getRecipe = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const responseStream = await cohere.chatStream({
        message: `Por favor, forneça uma receita em português usando os seguintes ingredientes: ${ingredients}. Formate a receita com ingredientes e etapas separadas por parágrafos.`,
        chatHistory: [
          {
            role: 'USER',
            message: `Crie somente uma receita aleatoria em português com base nos seguintes ingredientes: ${ingredients}.
            no final uma frase para conscientização de aproveitamento de frutas maduras somente 2 linhas`,
          },
        ],
        connectors: [
          {
            id: 'web-search',
          },
        ],
      });

      let finalMessage = '';

      for await (const data of responseStream) {
        if ('text' in data) {
          finalMessage += data.text;
        }
      }

      const formattedMessage = formatRecipe(finalMessage);

      if (formattedMessage.trim()) {
        setResult(formattedMessage.trim());
      } else {
        setError('Nenhuma receita encontrada. Tente diferentes ingredientes.');
      }
    } catch (error: unknown) {
      const apiError = error as Error;
      setError(apiError.message || 'Ocorreu um erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  // Formata o texto da receita
  const formatRecipe = (recipe: string): string => {
    const paragraphs = recipe.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('\n');
    return `<div class="recipe-content">${paragraphs}</div>`;
  };

  return (
    <div className="recipe-search-container">
      <h2>Encontre uma receita para reaproveitamento de frutas :</h2>
      <input
        type="text"
        placeholder="Digite as frutas que você tem (ex: banana, maçã)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="input"
      />
      <button onClick={getRecipe} className="button" disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar Receita'}
      </button>
      {error && <p className="error">{error}</p>}
      {result && (
        <div
          className="result-container"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      )}
    </div>
  );
};

export default RecipeSearch;
