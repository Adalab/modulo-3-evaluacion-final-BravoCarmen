import uuid from 'react-uuid';

const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const cleanScenes = data.map((scene) => ({
        poster: scene.poster,
        movie: scene.movie,
        fullLine: scene.full_line,
        year: scene.year,
        director: scene.director,
        audio: scene.audio,
        id: uuid(),
      }));
      return cleanScenes;
    });
};

export default callToApi;
