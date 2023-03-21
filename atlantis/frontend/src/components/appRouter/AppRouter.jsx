import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {publicRoutes, authRoutes} from "./routes"

const AppRouter = () => {
    const user = {
        isAuth: false
    }
    return(
        <div className="appRouter">
            <Routes>
                {user.isAuth === true && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)}
                {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)}
                <Route path='*' element={<Navigate to={'/main'}/>} />
            </Routes> 
        </div>
    )
}

export default AppRouter;