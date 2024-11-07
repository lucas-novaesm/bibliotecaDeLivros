import axios from "axios";

const API_URL = "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api";

export const buscarLivros = async () => {
  try {
    const response = await axios.get(`${API_URL}/livros`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
  }
};

export const buscarLivrosPorTermo = async (termo) => {
  try {
    const response = await axios.get(`${API_URL}/livros?search=${termo}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros por termo:", error);
  }
};
