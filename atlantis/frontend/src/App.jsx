import './App.scss';
import { useState } from 'react';
import React from 'react';

import MenuBurger from './components/menuBurger/MenuBurger';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';
import Call from './components/call/Call';
import MenuBorderContainer from './components/menuBorder/menuBorderContainer';

export const MyContext = React.createContext();

const App = () => {
  const [menu, setMenu] = useState(false)

  const updateMenu = () => {
    setMenu(!menu)
  }

  return (
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
  );
}

export default App;
