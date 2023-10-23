//imports dependencias, images, componentes, styles
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';
//import PropTypes from "prop-types";
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
//import { useParams } from "react-router-dom";
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import '../styles/App.scss';

const App = () => {
  // Estados

  const [scenes, setScenes] = useState(ls.get('scenes', []));
  const [movieFilter, setMovieFilter] = useState('');
  const [yearFilter, setyearFilter] = useState('');

  //llamada a la funcion de api y guardar en LS, si no está llama y si está lo pinta del LS.
  useEffect(() => {
    if (scenes.length === 0) {
      callToApi().then((cleanScenes) => {
        cleanScenes.sort((a, b) => a.movie.localeCompare(b.movie)); //ordena alfabeticamente
        setScenes(cleanScenes);
        ls.set('scenes', cleanScenes);
      });
    }
  }, []);

  const handleChangeMovie = (value) => {
    setMovieFilter(value);
  };

  const handleChangeYear = (value) => {
    setyearFilter(value);
  };

  const filterMovies = scenes
    .filter((scene) =>
      scene.movie.toLowerCase().includes(movieFilter.toLowerCase())
    )
    .filter((scene) => {
      if (yearFilter === '') {
        return true;
      } else {
        return yearFilter === scene.year.toString();
      }
    });

  //sacar todos los años de las pelis
  const years = scenes.map((scene) => scene.year);
  //limpiar valores para que no se repitan
  const getYears = () => {
    const years = scenes.map((scene) => scene.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

  //buscar la escena con el id de la ruta
  const { pathname } = useLocation();
  const routeData = matchPath('/scene/:id', pathname);
  const sceneId = routeData !== null ? routeData.params.id : '';
  const sceneData = scenes.find((scene) => scene.id === sceneId);

  return (
    <div>
      <header className='header'>
        <h1>Owen Wilson "WOW"</h1>
      </header>
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <section className='section_filters'>
                  <Filters
                    movieFilter={movieFilter}
                    handleChangeMovie={handleChangeMovie}
                    yearFilter={yearFilter}
                    handleChangeYear={handleChangeYear}
                    years={getYears()}
                  />
                </section>
                {filterMovies.length > 0 ? (
                  <MovieSceneList scenes={filterMovies} />
                ) : (
                  <div>
                    No hay ninguna película que coincida con la palabra '
                    {movieFilter}'
                  </div>
                )}

                <section>
                  <MovieSceneList scenes={filterMovies} />
                </section>
              </>
            }
          />

          <Route
            path='/scene/:id'
            element={<MovieSceneDetail scene={sceneData} />}
          />
          <Route path='*' element={<p>La escena que buscas no existe</p>} />
        </Routes>
      </main>
    </div>
  );
};

//html
//NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };
export default App;
