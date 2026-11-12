const base = import.meta.env.BASE_URL

export const arquivos_publicos = {
  Aula1: {
    slides: `${base}arquivos/slides/Aula1.pdf`,
    exercicios: `${base}arquivos/exercicios/Aula1.pdf`,
  },

  Aula2: {
    slides: `${base}arquivos/slides/Aula2.pdf`,
    exercicios: `${base}arquivos/exercicios/Aula2.pdf`,
  },

  desafios: {
    slides: `${base}arquivos/slides/Desafios.pdf`,
    exercicios: `${base}arquivos/exercicios/Desafios.pdf`,
  },

  apostila: {
    apostila: `${base}arquivos/apostila/Apostila.pdf`,
  },
}