import {Link} from "react-router-dom";

export const UserDashboardPage = () => {
    return (
        <div>

                <div className="row mb-5">
                    <div className="col-3">
                        <div className="card" style={{background: 'transparent', border: 'none'}}>
                            <img src={require("../../Images/PublicImages/coco.jpg")}
                                 className="card-img-top shadow-lg" alt="user-photo"
                                 style={{borderRadius: '350px', scale: '75%'}}/>
                            <div className="card-body pt-0" >
                                <h6 className="card-title px-5">Coco Chanel(born August 19, 1883,Saumur,  French fashion designer who ruled Parisian haute couture for almost six decades.</h6>
                            </div>
                            <ul className="list-group list-group-flush px-4">
                                <li className="list-group-item" style={{border: 'none'}}>
                                    <div className="row">
                                        <div className="col-6" style={{paddingLeft: '60px'}}>
                                            <span >First name:</span>
                                        </div>
                                        <div className="col-6 px-0">
                                            <span>Coco</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{border: 'none'}}>
                                    <div className="row">
                                        <div className="col-6" style={{paddingLeft: '60px'}}>
                                            <span>Last name:</span>
                                        </div>
                                        <div className="col-6 px-0">
                                            <span>Chanel</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{border: 'none'}}>
                                    <div className="row">
                                        <div className="col-6" style={{paddingLeft: '60px'}}>
                                            <span>Birth date:</span>
                                        </div>
                                        <div className="col-6 px-0">
                                            <span>19 August, 1883</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{border: 'none'}}>
                                    <div className="row">
                                        <div className="col-6" style={{paddingLeft: '60px'}}>
                                            <span>Username:</span>
                                        </div>
                                        <div className="col-6 px-0">
                                            <span>CocoChanel</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{border: 'none'}}>
                                    <div className="row">
                                        <div className="col-6" style={{paddingLeft: '60px'}}>
                                            <span>Email:</span>
                                        </div>
                                        <div className="col-6 px-0">
                                            <span>cocochanel@coco.coco</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row" style={{height: '10vh'}}>
                            <div className="col-2 text-center shadow-lg"
                                 style={{
                                     backgroundColor: 'white',
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                            <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '700',
                                          color: 'black'
                                      }}>
                                    Dashboard
                                </Link>
                            </div>

                            <div className="col-2 text-center"
                                 style={{
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                                <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '400',
                                          color: 'black'
                                      }}>
                                    Articles
                                </Link>
                            </div>

                            <div className="col-2 text-center"
                                 style={{
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                                <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '400',
                                          color: 'black'
                                      }}>
                                    Messages
                                </Link>
                            </div>

                            <div className="col-2 text-center"
                                 style={{
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                                <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '400',
                                          color: 'black'
                                      }}>
                                    Comments
                                </Link>
                            </div>

                            <div className="col-2 text-center"
                                 style={{
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                                <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '400',
                                          color: 'black'
                                      }}>
                                    Likes
                                </Link>
                            </div>

                            <div className="col-2 text-center"
                                 style={{
                                     borderRadius: '10px',
                                     paddingTop: '40px'
                                 }}>
                                <Link to='#'
                                      style={{
                                          fontFamily: 'Roboto',
                                          fontSize: '26px',
                                          textDecoration: 'none',
                                          fontWeight: '400',
                                          color: 'black'
                                      }}>
                                    Settings
                                </Link>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h2 className="text-end pe-4"
                                style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '36px',
                                    fontWeight: '400'
                                }}>
                                Dashboard</h2>
                        </div>
                        <hr/>
                        <div className="row g-0 pt-5 px-5 pb-5 mt-5 border shadow-lg" style={{borderRadius: '10px'}}> {/*//////////////////////////////////////////////////////*/}

                            <div className="row pt-1">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400',
                                    }}>Member since:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>10 January 1901</h3>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Articles posted:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>21</h3>
                                </div>
                                <div className="col-md-3 text-end pt-3">
                                    <span style={{
                                        border: '1px solid black',
                                        padding: '5px 20px',
                                        borderRadius: '5px'
                                    }}>details</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Articles liked:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>56</h3>
                                </div>
                                <div className="col-md-3 text-end pt-3">
                                    <span style={{
                                        border: '1px solid black',
                                        padding: '5px 20px',
                                        borderRadius: '5px'
                                    }}>details</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Comments posted:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>56</h3>
                                </div>
                                <div className="col-md-3 text-end pt-3">
                                    <span style={{
                                        border: '1px solid black',
                                        padding: '5px 20px',
                                        borderRadius: '5px'
                                    }}>details</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Messages written:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>596</h3>
                                </div>
                                <div className="col-md-3 text-end pt-3">
                                    <span style={{
                                        border: '1px solid black',
                                        padding: '5px 20px',
                                        borderRadius: '5px'
                                    }}>details</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Likes from other users:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>183</h3>
                                </div>
                                <div className="col-md-3 text-end pt-3">
                                    <span style={{
                                        border: '1px solid black',
                                        padding: '5px 20px',
                                        borderRadius: '5px'
                                    }}>details</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5 pt-2">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '400'
                                    }}>Comments on my Articles:</h3>
                                </div>
                                <div className="col-md-4 pt-2 text-center">
                                    <h3 style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                        fontWeight: '700'
                                    }}>387</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}