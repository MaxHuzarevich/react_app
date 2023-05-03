import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../State/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../State/redux-store";
import style from './../Common/FormsControls/FormsControls.module.css'
import classes from './Login.module.css'

type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    type={'current-password'}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
                <span>remember me</span>
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<formDataType>({form: 'login'})(LoginForm)

type loginPageType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginPage = ({isAuth, login}: loginPageType) => {
    const onSubmit = (formData: formDataType) => {
        login(formData.login, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)