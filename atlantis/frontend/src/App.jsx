import './App.scss';
import { useState } from 'react';
import React from 'react';

import MenuBurger from './components/menuBurger/MenuBurger';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';
import Call from './components/call/Call';
import MenuBorderContainer from './components/menuBorder/menuBorderContainer';
import Loader from './components/loading/Loader';
import { useEffect } from 'react';

export const MyContext = React.createContext();

const App = () => {
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2900); // имитация загрузки данных
  }, []);

  const updateMenu = () => {
    setMenu(!menu)
  }

  return (
      <div className="application">
        {loading ?
        <Loader />
        :
        <div className="app">
          <Header menu={menu} updateMenu={updateMenu}/>
          <div className="app__content">
            <div className="menu">
              <MenuBorderContainer/>
              <MenuBurger menu={menu} updateMenu={updateMenu}/> 
            </div>
            <div className="content">
              <AppRouter/>
            </div>
          </div>
          <Call />
        </div>
        }       
      </div>
  );
}

export default App;
