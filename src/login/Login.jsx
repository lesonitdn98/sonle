import React from 'react';
import './login.css';
import 'font-awesome/css/font-awesome.min.css';

class Login extends React.Component {

    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <form className="login form">
                        <h2 className="login__title">log in</h2>
                        <div className="login__row">
                            <label className="login__label" htmlFor="lg-em">e-mail</label>
                            <input className="login__input" id="lg-em" type="email" placeholder="example@email.com" />
                        </div>
                        <div className="login__row">
                            <label className="login__label" htmlFor="lg-ps">password</label>
                            <input className="login__input" id="lg-ps" type="password" placeholder="**********" />
                        </div>
                        <div className="login__row">
                            <button className="login__button" type="submit">sign in</button>
                        </div>
                        <div className="login__row"><a href="/" className="login__link"><i className="fa fa-arrow-left" /> Back to home</a></div>
                    </form>
                </div>
            </div>
        );
    }
}

export { Login };