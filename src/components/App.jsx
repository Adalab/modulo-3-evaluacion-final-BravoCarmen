//imports dependencias, images, componentes, styles
// import { useEffect, useState } from 'react';
// import callToApi from '../services/api';
// import ls from '../services/localStorage';
//import PropTypes from "prop-types";
// import { Link, Route, Routes } from "react-router-dom";
//import { useLocation, matchPath } from "react-router";
//import { useParams } from "react-router-dom";
import '../styles/App.scss';

const App = () => {
  // Estados

  const [apiData, setApiData] = useState([]);

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setApiData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return <div></div>;
};

//html
//NombreDeMiComponente.propTypes = {
//   nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
//   nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired,
// };
export default App;
