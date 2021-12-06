import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';
import avatar from '../assets/avatar.jpeg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
    }

    render() {
        return (
            <div className="w-100 h-100 position-absolute home">
                <div className="container p-5 w-75 home-header">
                    <nav className="navbar navbar-expand-sm navbar-light">
                        <div className="container">
                            <a className="navbar-brand" href="/">Home</a>
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <i className="fa fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/cv" target="_blank" rel="noreferrer">SonLe's CV</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="container p-5 w-75 position-absolute home-body">
                    <img src={avatar} className="rounded-circle avatar position-relative selectDisable" alt="Cinque Terre" width="120" height="120" />
                    <div className="container pt-5">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>Son Le</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">Software Engineer</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="container p-5 w-75 position-absolute home-footer">
                    <div className="container">
                        <ul className="list-group list-group-horizontal justify-content-center">
                            <li className="list-group-item border-0"><a href="https://www.facebook.com/lesonnnn" target="_blank" rel="noreferrer"><i className="fa fa-facebook ic-social" /></a></li>
                            <li className="list-group-item border-0"><a href="https://github.com/lesonitdn98" target="_blank" rel="noreferrer"><i className="fa fa-github ic-social" /></a></li>
                            <li className="list-group-item border-0"><a href="https://www.linkedin.com/in/son-le-8bbb34154/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin ic-social" /></a></li>
                            <li className="list-group-item border-0"><a href="https://twitter.com/lesonnn1" target="_blank" rel="noreferrer"><i className="fa fa-twitter ic-social" /></a></li>
                        </ul>
                        <div className="container">
                            <hr className="border-2 border-top" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Home };