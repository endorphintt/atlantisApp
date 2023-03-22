import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {publicRoutes, authRoutes} from "./routes"
import './AppRouter.scss'

const AppRouter = (props) => {
    const user = {
        isAuth: false
    }
    return(
        <div className="appRouter">
            <Routes>
                {user.isAuth === true && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component onMenuLinkClick={props.onMenuLinkClick}/>}/>)}
                {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component onMenuLinkClick={props.onMenuLinkClick} />}/>)}
                <Route path='*' element={<Navigate to={'/main'}/>} />
            </Routes> 
        </div>
    )
}

export default AppRouter;