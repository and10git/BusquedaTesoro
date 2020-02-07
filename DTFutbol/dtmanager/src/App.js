import React from 'react';
import store from './store.js';
import { Provider } from 'react-redux'; //componente de la libreria react redux
import Jugadores from './Component/Jugadores';
import EquipoSeleccionado from './Component/EquipoSeleccionado';
import './Styles/styles.css';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Team Manager</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
    </main>
  </Provider >
)

export default App;
