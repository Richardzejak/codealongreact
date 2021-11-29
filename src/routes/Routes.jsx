import { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"
import { HomeView } from "../views/home/HomeView"
import { MoviesView } from '../views/movies/MoviesView'
import { DisplayDataView } from "../views/displaydata/DisplayDataView"
import RoutingPath from "./RoutingPath"


export const Routes = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <BrowserRouter>
            {children}
            <span>Username: {authenticatedUser}</span>
            <Switch>
                <Route path={'/'} element={<Navigate to="/home" />} />
                <Route path={RoutingPath.homeView} element={<HomeView />} />
                <Route path={RoutingPath.moviesView} element={<MoviesView />} />
                <Route path={RoutingPath.displayDataView} element={<DisplayDataView />} />
            </Switch>
        </BrowserRouter >
    )
}
