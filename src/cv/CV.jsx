import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../assets/avatar.jpeg';
import './cv.css';

class CV extends React.Component {

    componentDidMount() {
        document.title = "SonLe's CV"
    }

    render() {
        return (
            <div className="cv">
                <div className="cv-content">
                    <div className="left_side">
                        <div className="profileText">
                            <div className="imgBx">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <h2>Son Le<br /><span>Android Developer</span></h2>
                        </div>

                        <div className="contactInfo">
                            <table>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></span></th>
                                    <td><span className="text">08/09/1998</span></td>
                                </tr>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-mars" aria-hidden="true"></i></span></th>
                                    <td><span className="text">Male</span></td>
                                </tr>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span></th>
                                    <td><span className="text">+84 394 188 885</span></td>
                                </tr>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span></th>
                                    <td><span className="text">lesonitdn98@gmail.com</span></td>
                                </tr>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span></th>
                                    <td><span className="text">Hoa Quy Ward, Ngu Hanh Son District, Da Nang City</span></td>
                                </tr>
                                <tr>
                                    <th><span className="icon"><i className="fa fa-github" aria-hidden="true"></i></span></th>
                                    <td><span className="text"><a href="https://github.com/lesonitdn98"
                                        target="_blank" rel="noreferrer">https://github.com/lesonitdn98</a></span></td>
                                </tr>
                            </table>
                        </div>

                        <div className="contactInfo goals">
                            <h4 className="title">Career Goals</h4>
                            <ul>
                                <li>
                                    <span className="text">- First goal: Improve Android with Java and Kotlin, Flutter knowledge,
                                        successfully complete the assigned product, generate less bugs. Get by TOEIC.</span>
                                </li>
                                <li>
                                    <span className="text">- Aim for the next 2-3 years: Learn more about Backend and be able to
                                        complete 100% mobile apps.</span>
                                </li>
                                <li>
                                    <span className="text">- Objectives later: Develop applications on mobile, web to solve problems
                                        in life, used by many people.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="contactInfo skills">
                            <h4 className="title">Personal Skills</h4>
                            <ul>
                                <li>
                                    <span className="text">Android</span>
                                    <span className="percent">
                                        <div className="w-75"></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Java</span>
                                    <span className="percent">
                                        <div className="w-75"></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Kotlin</span>
                                    <span className="percent">
                                        <div className="w-75"></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Git</span>
                                    <span className="percent">
                                        <div className="w-75"></div>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="pagebreak"></div>

                        <div className="contactInfo hobby">
                            <h4 className="title">Hobby</h4>
                            <ul>
                                <li>
                                    <span className="text">- Learn new technology</span>
                                </li>
                                <li>
                                    <span className="text">- Listen to music</span>
                                </li>
                                <li>
                                    <span className="text">- Play game with my friends</span>
                                </li>
                                <li>
                                    <span className="text">- Sleep</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <div className="about">
                            <div className="box edu">
                                <h2 className="title2"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Education</h2>
                                <table>
                                    <tr>
                                        <th>
                                            <h5>THE UNIVERITY OF DANANG - UNIVERCITY OF SCIENCE AND EDUCATION</h5>
                                        </th>
                                        <td className="period">
                                            <h6>10/2016 - 10/2020</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Major: Software Technology</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>GPA: 2.74/4</span></td>
                                    </tr>
                                </table>
                            </div>

                            <div className="box work">
                                <h2 className="title2"><i className="fa fa-briefcase" aria-hidden="true"></i> WORKING EXPERIENCE
                                </h2>
                                <table>
                                    <tr>
                                        <th>
                                            <h5>SDC R&D DEPARTMENT</h5>
                                        </th>
                                        <td className="period">
                                            <h6>4/2018 - 9/2019</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span>Android Developer</span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- BSY Productivity:</span>
                                            <ul>
                                                <li>Description: Application of production statistics on smartphones.</li>
                                                <li>Team size: 7</li>
                                                <li>Main technique: SQLite, Service, OkHttp, Gson, ScanBarcode,...</li>
                                                <li>Link: <a href="/cv" target="_blank" rel="noreferrer">Application</a></li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="2">
                                            <span>- CarZapp:</span>
                                            <ul>
                                                <li>Description: CarZapp is a marketplace and trading platform offering easy
                                                    communication and connectivity between car dealers.</li>
                                                <li>Team size: 12</li>
                                                <li>Main technique: OkHttp, Gson, SQLite, Service, Customview, Socket,...</li>
                                                <li>Link: <a href="https://www.carzapp.com.au"
                                                    target="_blank" rel="noreferrer">https://www.carzapp.com.au</a></li>
                                            </ul>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colspan="2">
                                            <span>- HBC CRM:</span>
                                            <ul>
                                                <li>Description: Customer management application on smartphone.</li>
                                                <li>Team size: 7</li>
                                                <li>Main technique: MVP, Design Pattern, Service, SQLite, OkHttp, Gson,...</li>
                                                <li>Link: <a href="https://play.google.com/store/apps/details?id=bys.crm.hbc"
                                                    target="_blank" rel="noreferrer">https://play.google.com/store/apps/details?id=bys.crm.hbc</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>
                                            <h5>GLOBE 3 ERP VIET NAM</h5>
                                        </th>
                                        <td className="period">
                                            <h6>10/2019 - 2/2021</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span>Android Developer</span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- Globe3 ERP Software:</span>
                                            <ul>
                                                <li>Description: Globe3 ERP Software is a solution type of multi management
                                                    software.</li>
                                                <li>Team size: 4</li>
                                                <li>Main technique: Dagger, MVVM, Data Binding, RxJava, Retrofit,...</li>
                                                <li>Link: <a href="http://vn.globe3.com/" target="_blank" rel="noreferrer">http://vn.globe3.com/</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                                <div className="pagebreak"></div>
                                <table>
                                    <tr>
                                        <th>
                                            <h5>Madison Technology</h5>
                                        </th>
                                        <td className="period">
                                            <h6>3/2021 - Now</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span>Android Developer</span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- Uplift:</span>
                                            <ul>
                                                <li>Description: </li>
                                                <li>Team size: 5</li>
                                                <li>Main technique: SQLite, Service, OkHttp, Gson, ScanBarcode,...</li>
                                                <li>Link: <a href="/cv" target="_blank" rel="noreferrer">Application</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- Durian:</span>
                                            <ul>
                                                <li>Description: </li>
                                                <li>Team size: 4</li>
                                                <li>Main technique: SQLite, Service, OkHttp, Gson, ScanBarcode,...</li>
                                                <li>Link: <a href="/cv" target="_blank" rel="noreferrer">Application</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- IPC:</span>
                                            <ul>
                                                <li>Description: </li>
                                                <li>Team size: 4</li>
                                                <li>Main technique: SQLite, Service, OkHttp, Gson, ScanBarcode,...</li>
                                                <li>Link: <a href="/cv" target="_blank" rel="noreferrer">Application</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>- GVEAsia - Job Search:</span>
                                            <ul>
                                                <li>Description: </li>
                                                <li>Team size: 2</li>
                                                <li>Main technique: SQLite, Service, OkHttp, Gson, ScanBarcode,...</li>
                                                <li>Link: <a href="/cv" target="_blank" rel="noreferrer">Application</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className="box others">
                                <h2 className="title2"><i className="fa fa-pencil" aria-hidden="true"></i> OTHERS</h2>
                                <h5>Advantages</h5>
                                <ul>
                                    <li>There is a high sense of responsibility at work.</li>
                                    <li>Harmony, helping and sharing knowledge with colleagues.</li>
                                    <li>Good programming thinking, learning desire.</li>
                                </ul>
                                <h5>Other skills</h5>
                                <ul>
                                    <li>Firebase, Use Postman, Docker, C#, JavaScript, PHP, Wordpress, MySQL, Ms SQL, Photoshop.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { CV };