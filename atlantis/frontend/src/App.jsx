import './App.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';


import MenuBorder from './components/menuBorder/menuBorder';
import MenuBurger from './components/menuBurger/MenuBurger';
import AppRouter from './components/appRouter/AppRouter';
import Header from './components/header/Header';
import Call from './components/call/Call';

export const MyContext = React.createContext();

const App = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('01')

  const updateMenu = () => {
    setMenu(!menu)
  }

  const nav = useNavigate();

  const onMenuLinkClick = (link) => {
    setActive(link.id)
    nav('/' + link.adress)
  } 

  return (
    <MyContext.Provider value={onMenuLinkClick}>
      <div className="app">
        <Header menu={menu} updateMenu={updateMenu}/>
        <div className="app__content">
          <div className="menu">
            <MenuBorder onMenuLinkClick={onMenuLinkClick} active={active} setActive={setActive}/>
            <MenuBurger menu={menu} updateMenu={updateMenu}/> 
          </div>
          <div className="content">
            <AppRouter onMenuLinkClick={onMenuLinkClick} active={active} setActive={setActive}/>
          </div>
        </div>
        <Call />
      </div>
    </MyContext.Provider>
  );
}

export default App;