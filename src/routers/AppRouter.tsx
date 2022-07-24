import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import getGlobalState from "../state-management/global/globalSelector";
import LoginPage from "../pages/login";

const mapStateToProps = (state: any) => ({
    global: getGlobalState(state)
})

interface AppRouterProps {
    global?: any
}

const AppRouter = ({ global }: AppRouterProps) => {

    return (
        <Routes>
            <Route path={'/'} element={<div>Home</div>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
    );
}

export default connect(mapStateToProps, null)(AppRouter)