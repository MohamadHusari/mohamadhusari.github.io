import React, {Component} from 'react'
import logoimg from '../images/logo.png'
import profilepic from '../images/profile-pic1.png'
import '../style/homepage.css';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class HomePage extends Component {
    constructor (){
        super();
        this.slideShow = this.slideShow.bind(this);
        this.state={
            show:false
        };
    }
    slideShow = ()=> {
        const {show} = this.state;
        this.setState({show:!show});
    };
    render() {
        return (
            <div className="container portfolio position-relative">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="heading clearfix">
                            <img src={logoimg} alt="close"/>
                        <span className="font-weight-bold">Home</span>
                            <div className={`menu float-right${this.state.show ? '' : ' collapsed'}`} onClick={this.slideShow} >
                                {/*<span className="d-inline-block font-weight-bolder">Menu</span>*/}
                                <button className="btn d-inline-block">
                                    <span className="icon-bar top-bar"/>
                                    <span className="icon-bar middle-bar"/>
                                    <span className="icon-bar bottom-bar"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bio-info pb-2">
                    <div id="main" className={`row no-gutters sidenav ${this.state.show ? 'showsidenav rounded-bottom' : ''}`}>
                        <div className="col-12 col-md-4">
                            <NavLink className="nav-link" exact to="/" activeClassName="selected">Home</NavLink>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="#">My work</a>
                            {/*<NavLink className="nav-link" to="/mywork" activeClassName="selected">My Work</NavLink>*/}
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="#">Contact</a>
                            {/*<NavLink className="nav-link" to="/mywork" activeClassName="selected">My Work</NavLink>*/}
                        </div>
                    </div>
                    <div className="row no-gutters border-bottom pb-2 pt-3">
                        <div className="col-12 col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bio-image">
                                        <img className="img-responsive" src={profilepic} alt="profile pictuer"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group list-group-horizontal justify-content-center mt-1 social-list">
                                        <a href="https://www.facebook.com/YallaBlagan">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faFacebookF}/>
                                        </li></a>
                                        <a href="https://www.linkedin.com/in/mohamadhusari">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faLinkedinIn}/>
                                        </li></a>
                                        <a href="https://github.com/MohamadHusari">
                                        <li className="list-group-item">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center text-lg-left">
                                        <h1 className="display-4 font-weight-bold font-italic p-0 m-0" id="my-name">Mohamad Husari</h1>
                                        {/*<h6>Age / Height : 21 Yrs. / 5ft 9In</h6>*/}
                                        {/*<h6>Caste : Gujarati</h6><h6>Mother Tongue : Hindi</h6><h6>Location : India</h6>*/}
                                        {/*<h6>Education : Bachelors in Commerce</h6><h6>Profession : Web Developer</h6>*/}
                                        {/*<h6>Marital Status : Un Married</h6>*/}
                                        {/*<p>My Broter Vastal Raviya Has Done BBM & Clear CS (inter) Also Doing LLB</p>*/}
                                        {/*<button className="btn btn-primary" type="button"><i*/}
                                        {/*    className="fa fa-download"></i> Download BioData*/}
                                        {/*</button>*/}
                                        {/*<button className="btn btn-danger" type="button"><i*/}
                                        {/*    className="fa fa-heart"></i> Express Interest*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-12 col-lg-10">
                                    <h6 className="font-weight-lighter">Software engineering</h6>
                                </div>
                                <div className="offset-lg-2"/>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-12 text-left pt-3 px-2">
                                    <h6 className="titles font-weight-bold font-italic"><u>PERSONAL SUMMARY:</u></h6>
                                    <div className="pl-2">
                                        <p className="m-0">
                                            <span className="d-inline-block mr-1"><FontAwesomeIcon icon={faCheck}/></span>
                                            Software engineer who can bring and diverse skill set and proficient at researching and developing software with ability to
                                            <b className="font-weight-bold"> work under pressure</b>,<b className="font-weight-bold"> self-study</b>,<b className="font-weight-bold"> team player</b>,<b className="font-weight-bold"> highly motivated</b> and <b className="font-weight-bold">thinking outside the box to find unique solutions</b>.
                                        </p>
                                        <p>
                                            <span className="d-inline-block mr-1"><FontAwesomeIcon icon={faCheck}/></span>
                                            Looking to integrate on <b className="font-weight-bold">web developing</b> / <b className="font-weight-bold">automation role</b> – <b className="font-weight-bold">full-stack</b> position.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters py-2 mt-1">
                        <div className="col-12 col-lg-4 pl-2 text-left text-lg-center">
                            <h6 className="titles font-weight-bold font-italic"><u>WORK EXPERIENCE:</u></h6>
                        </div>
                        <div className="col-12 col-lg-8 text-center pt-0 pt-lg-3">
                            <b className="titles font-weight-bold h6">Software Developer and Automation, GalilSoftware - Ericsson project</b>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-4 justify-content-center align-self-center">
                            <h5 className="font-weight-light font-italic m-0">8/2018 – Present</h5>
                        </div>
                        <div className="col-12 col-lg-8 pt-2 pt-lg-0 px-2 text-left">
                            <p className="m-0">
                                • Researching and developing Scripts of comparing files in <b className="font-weight-bold">big data</b> system, with
                                scripting skills (<b className="font-weight-bold">Bash</b> and <b className="font-weight-bold">Shell</b>).
                            </p>
                            <p>
                                • Developing Automation E2E API testing using <b className="font-weight-bold">Python</b> under <b className="font-weight-bold">Linux</b>.
                            </p>
                        </div>
                    </div>
                    <div className="row no-gutters py-2">
                        <div className="col-12 col-lg-4 pl-2 text-left text-lg-center">
                            <h6 className="titles font-weight-bold font-italic"><u>EDUCATION:</u></h6>
                        </div>
                        <div className="col-12 col-lg-8 text-center pt-0 pt-lg-3">
                            <b className="titles font-weight-bold h6">B.Sc. Software Engineering, Ort Braude College – Karmiel, Israel</b>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-4 justify-content-center align-self-center">
                            <h5 className="font-weight-light font-italic m-0">2014  –  2018<br/>Graduated
                            </h5>
                        </div>
                        <div className="col-12 col-lg-8 pt-2 pt-lg-0 px-2 text-left">
                            <p className="m-0">
                                • <b className="font-weight-bold">Final Project</b>: Development of an algorithm for <b className="font-weight-bold">predict results of competitions between football teams by a stochastic model</b>. Using <b className="font-weight-bold">Angular</b>, <b className="font-weight-bold">PHP</b>, <b className="font-weight-bold">Python</b>,
                                <b className="font-weight-bold">Ionic</b> and <b className="font-weight-bold">MYSQL</b>. (<b className="font-weight-bold">Final grade 94</b>).
                                <br/>
                                <span className="pl-2"><FontAwesomeIcon className="text-primary" icon={faLink}/> <b className="font-weight-bold">GitHub link: </b><a className="d-lg-inline-block proj-link" href="https://github.com/MohamadHusari/Predicting-EPL-Matches-Results">https://github.com/MohamadHusari/Predicting-EPL-Matches-Results</a></span>
                            </p>
                            <p>
                                • <b className="font-weight-bold">Project</b>: Development an <b className="font-weight-bold">Academic Management System</b> for universities with JAVA language.
                                <br/>
                                <span className="pl-2"><FontAwesomeIcon className="text-primary" icon={faLink}/> <b className="font-weight-bold">GitHub link: </b><a className="d-lg-inline-block proj-link" href="https://github.com/MohamadHusari/SchoolBookV0.9">https://github.com/MohamadHusari/SchoolBookV0.9</a></span>
                            </p>
                        </div>
                    </div>

                    <div className="row no-gutters py-2">
                        <div className="col-12 col-lg-4 pl-2 text-left text-lg-center">
                            <h6 className="titles font-weight-bold font-italic"><u>COURSES:</u></h6>
                        </div>
                        <div className="col-12 col-lg-8 text-center pt-0 pt-lg-3">
                            <b className="titles font-weight-bold h6">Front End Development, Tsofen organization with WIX – Nazareth, Israel</b>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-4 justify-content-center align-self-center">
                            <h5 className="font-weight-light font-italic m-0">2/2019  –  6/2019<br/>Graduated
                            </h5>
                        </div>
                        <div className="col-12 col-lg-8 pt-2 pt-lg-0 px-2 text-left">
                            <p className="m-0">
                                Research Practical training course operated by Tsofen organization, in cooperation with <b className="font-weight-bold">Wix</b> and academic instruction by <b className="font-weight-bold">Grauman Hi-Tech Dev Courses</b> totaling <b className="font-weight-bold">200</b> academic hours.
                            </p>
                            <p className="m-0">
                                • Developing Theoretical contents and a hands-on development project using industry methodologies and practices.
                            </p>
                            <p className="m-0">
                                • Technologies: <b className="font-weight-bold">React</b>, <b className="font-weight-bold">JS</b>(<b className="font-weight-bold">ES6+</b>), <b className="font-weight-bold">HTML5</b>/<b className="font-weight-bold">CSS3</b>, <b className="font-weight-bold">Bootstrap</b> and <b className="font-weight-bold">Agile</b> development methodology.
                            </p>
                            <p className="m-0">
                                • Developing a <b className="font-weight-bold">social website</b>, Sharing wishes and events with registration ability,
                                <span className="d-block m-0 pl-2">
                                    • <b className="font-weight-bold">Self-Study: Back-end development, developing server side using Node.js, Express.js, Express-jwt, MySQL</b>.
                                </span>
                            </p>
                            <p>
                                <span className="pl-2"><FontAwesomeIcon className="text-primary" icon={faLink}/> <b className="font-weight-bold">GitHub link: </b><a className="d-lg-inline-block proj-link" href="https://github.com/MohamadHusari/Wishes">https://github.com/MohamadHusari/Wishes</a></span>
                            </p>
                        </div>
                    </div>

                    <div className="row no-gutters pb-1 py-md-2">
                        <div className="col-12 col-lg-4 pl-2 text-left text-lg-center">
                            <h6 className="titles font-weight-bold font-italic"><u>TECHNOLOGIES:</u></h6>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-10 offset-lg-2 pt-1 pt-lg-0 px-2 text-left">
                            <p>
                                <span className="d-inline-block mr-3"><FontAwesomeIcon icon={faCheck}/></span>
                                <b className="font-weight-bold">Python, JavaScript (ES6+), React, HTML5, CSS3, Bootstrap.</b><br/>
                                <span className="d-inline-block mr-3"><FontAwesomeIcon icon={faCheck}/></span>
                                <b className="font-weight-bold">Angular, C/C++, Ionic, SVN, JAVA, Selenium.</b>
                            </p>
                        </div>
                    </div>

                    <div className="row no-gutters pb-1 py-md-2">
                        <div className="col-12 col-lg-4 pl-2 text-left text-lg-center">
                            <h6 className="titles font-weight-bold font-italic"><u>LANGUAGES:</u></h6>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-lg-3 offset-1 offset-md-1 offset-lg-2 pt-1 pt-lg-0 px-2 text-left">
                            <p>
                                <span className="d-inline-block mr-3"><FontAwesomeIcon icon={faCheck}/></span>
                                <b className="font-weight-bold">English</b> – Proficient
                            </p>
                        </div>
                        <div className="col-12 col-lg-3 offset-1 offset-md-1 offset-lg-0 pt-1 pt-lg-0 px-2 text-left">
                            <p>
                                <span className="d-inline-block mr-3"><FontAwesomeIcon icon={faCheck}/></span>
                                <b className="font-weight-bold">Hebrew</b> – Fluent
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 offset-1 offset-md-1 offset-lg-0 pt-1 pt-lg-0 px-2 text-left">
                            <p>
                                <span className="d-inline-block mr-3"><FontAwesomeIcon icon={faCheck}/></span>
                                <b className="font-weight-bold">Arabic</b> – Mother tongue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;