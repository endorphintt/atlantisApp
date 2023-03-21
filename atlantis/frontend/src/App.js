import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import MenuBorder from './components/menuBorder/menuBorder';
import MenuBurger from './components/menuBurger/MenuBurger';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app_content">
          <div className="menu">
            <MenuBorder />
            <MenuBurger /> 
          </div>
          <div className="content">
            <AppRouter />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
