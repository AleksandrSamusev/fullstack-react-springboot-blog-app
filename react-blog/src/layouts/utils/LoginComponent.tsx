import {useState} from "react";
import * as React from "react";
import {loginApiCall, saveLoggedInUser, storeToken} from "../../services/AuthService";
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    async function handleLoginForm(e) {
        e.preventDefault();
        const loginObj = {usernameOrEmail, password};

       await loginApiCall(loginObj).then(response => {

            const token = "Bearer " + response.data.accessToken;
            storeToken(token);
            saveLoggedInUser(usernameOrEmail);

            navigator("/home");
            window.location.reload();

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
                            <h2 className="text-center">Login Form</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-3">
                                    <label className="col-md-3 control-label">Username or email</label>
                                    <div className="col-md-9">
                                        <input
                                            type="text"
                                            name="usernameOrEmail"
                                            className="form-control"
                                            placeholder="Enter username or email"
                                            value={usernameOrEmail}
                                            onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                                <div className="form-group mb-3">
                                    <button className="btn btn-primary"
                                            onClick={(e) => handleLoginForm(e)}
                                    >Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default LoginComponent