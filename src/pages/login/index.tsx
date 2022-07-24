import { connect } from "react-redux";
import getGlobalState from "../../state-management/global/globalSelector";

const mapStateToProps = (state: any) => ({
    global: getGlobalState(state)
})

const mapStateToDispatch = (dispatch: any) => ({

})
interface LoginPageProps{
    global?: any
}
const LoginPage = ({global}: LoginPageProps) =>{

    

    return (
        <div>Login Page</div>
    )
}

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage);