import React, {Component} from 'react';
import validator, { field } from './validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faWindowMaximize, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
// import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
// import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

class ContactMe extends Component{
    constructor(){
        super();
        this.onInputChange = this.onInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handelSelector = this.handelSelector.bind(this);
        this.state = {
            name:    field({value: '', name: 'name', minLength:2}),
            email:  field({value: '', name: 'email',
                pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            }),
            website:  field({value: '', name: 'website'}),
            address:  field({value: '', name: 'address'}),
            message:field({value: '', name: 'message'}),
            subject: ""
        }
    }
    onInputChange({ target: { name, value } }) {
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });
    }

    handelSelector(e) {
        this.setState({
            subject: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let isokey = true;
        const contact = Object.assign({}, {name:this.state.name, email:this.state.email, website:this.state.website, address:this.state.address, message:this.state.message});
        for (let key in contact) {
            const {value, validations} = contact[key];

            const {valid, errors} = validator(value, key, validations);
            // console.log(valid,errors);
            if (!valid) {
                contact[key].valid = valid;
                contact[key].errors = errors;
                isokey = false;
            }
        }
        this.setState({...contact});

        if (isokey) {
        }
    }

    render() {
        return (
            <>
                <div className="row no-gutters mt-4 mt-lg-3">
                    <div className="col-md-12">
                        <div className="text-center text-center">
                            <h1 className="display-4 font-weight-bold font-italic p-0 m-0" id="my-name">Drop Us a Message</h1>
                        </div>
                    </div>
                </div>
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <div className="row px-4">
                        <div className="form-group col-12 col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </div>
                                <input type="text" id="name" name="name" className="form-control rounded-right"
                                       defaultValue={this.state.name.value}
                                       onBlur={this.onInputChange} placeholder="Your Name"/>
                            </div>
                            {this.state.name.errors.map((err, i) => (
                                <small key={i} className="text-danger row no-gutters pl-0 pl-lg-5">
                                    - {err}
                                </small>
                            ))}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                </div>
                                <input type="email" id="email" name="email" className="form-control rounded-right"
                                       defaultValue={this.state.email.value}
                                       onBlur={this.onInputChange} placeholder="Your Email"/>
                            </div>
                            {this.state.email.errors.map((err, i) => (
                                <small key={i} className="text-danger row no-gutters pl-0 pl-lg-5">
                                    - {err}
                                </small>
                            ))}
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="form-group col-12 col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faWindowMaximize}/>
                                    </div>
                                </div>
                                <input type="text" id="website" name="website" className="form-control"
                                       defaultValue={this.state.website.value}
                                       onBlur={this.onInputChange} placeholder="Your Website"/>
                            </div>
                            {this.state.website.errors.map((err, i) => (
                                <small key={i} className="text-danger row no-gutters pl-0 pl-lg-5">
                                    - {err}
                                </small>
                            ))}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faLocationArrow}/>
                                    </div>
                                </div>
                                <input type="text" id="address" name="address" className="form-control"
                                       defaultValue={this.state.address.value}
                                       onBlur={this.onInputChange} placeholder="Where are You From?"/>
                            </div>
                            {this.state.address.errors.map((err, i) => (
                                <small key={i} className="text-danger row no-gutters pl-0 pl-lg-5">
                                    - {err}
                                </small>
                            ))}
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-sm-12">
                            <select defaultValue={'DEFAULT'} id="subject" className="form-group form-control" onChange={this.handelSelector}>
                                <option value="DEFAULT" disabled>Subject</option>
                                <option>Website Design & Development</option>
                                <option>Wordpress Development</option>
                                <option>Search Engine Optimization</option>
                                <option>Mobile Website</option>
                                <option>I Want to General Talk</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-12">
                            <div className="textarea-message form-group">
                            <textarea id="message" name="message" className="textarea-message form-control"
                                      defaultValue={this.state.message.value}
                                      onBlur={this.onInputChange} placeholder="Your Message"
                                      rows="5"/>
                            </div>
                            {this.state.message.errors.map((err, i) => (
                                <small key={i} className="text-danger row no-gutters pl-0 pl-lg-5">
                                    - {err}
                                </small>
                            ))}
                        </div>
                    </div>


                    <div className="text-center">
                        <button type="submit"
                                className="button button-style button-style-dark button-style-color-2">Submit
                        </button>
                    </div>

                </form>
            </>
        );
    }

}
export default ContactMe;