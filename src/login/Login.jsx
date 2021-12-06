import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="alert alert-info">
                    Username: test<br />
                    Password: test
                </div>
                <h2>Login</h2>
            </div>
        );
    }
}

export { Login };