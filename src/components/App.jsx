//imports dependencias, images, componentes, styles
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
// import ls from '../services/localStorage';
//import PropTypes from "prop-types";
// import { Link, Route, Routes } from "react-router-dom";
//import { useLocation, matchPath } from "react-router";
//import { useParams } from "react-router-dom";
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './MovieSceneDetail';
import '../styles/App.scss';

const App = () => {
  // Estados

  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    callToApi().then((cleanScenes) => {
      setScenes(cleanScenes);
    });
  }, []);

  return (
    <div>
      <header>
        <Filters />
      </header>
      <section>
        <MovieSceneList scenes={scenes} />
      </section>
    </div>
  );
};

//html
//NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };
export default App;
