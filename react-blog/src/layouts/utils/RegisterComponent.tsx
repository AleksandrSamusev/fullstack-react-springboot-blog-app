import {useState} from "react";
import * as React from "react";
import {registerApiCall} from "../../services/AuthService";

const RegisterComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [about, setAbout] = useState('')


    function handleRegistrationForm(e) {
        e.preventDefault();
        const register = {firstName, lastName, username, password, email, birthDate, about}
        registerApiCall(register).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container">
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow-lg">
                        <div className="card-header main-color text-white">
                            <h2 className="text-center">Registration Form</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">First name</label>
                                    <div className="col-md-9">
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="Enter first name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Last name</label>
                                    <div className="col-md-9">
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            placeholder="Enter last name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Username</label>
                                    <div className="col-md-9">
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Enter username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Password</label>
                                    <div className="col-md-9">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Email</label>
                                    <div className="col-md-9">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Birth Date</label>
                                    <div className="col-md-9">
                                        <input
                                            type="text"
                                            name="birthDate"
                                            className="form-control"
                                            placeholder="Enter birth date: yyyy-mm-dd"
                                            value={birthDate}
                                            onChange={(e) => setBirthDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">About</label>
                                    <div className="col-md-9">
                                    <textarea
                                        name="about"
                                        className="form-control"
                                        rows={3}
                                        placeholder="Add about"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        style={{resize: 'none'}}
                                    />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <button className="btn btn-primary"
                                            onClick={(e) => handleRegistrationForm(e)}
                                    >Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;