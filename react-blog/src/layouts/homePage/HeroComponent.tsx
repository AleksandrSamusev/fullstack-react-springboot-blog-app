export const HeroComponent = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div>
                            <img className="image-left" src={require('../../Images/PublicImages/left.jpg')}/>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center
                                     align-items-center">
                        <div className="ml-2">
                            <h1 style={{fontFamily: 'Tahoma', fontSize: '48px'}} >What have you been reading?</h1>
                            <p className="lead mt-4" style={{fontFamily: "Arial", fontSize: '18px', opacity: 0.7}}>
                                We would love to know what you have been reading.
                                Whether it is to learn new skill or grow within one.
                                We will be able to provide top content for you.
                            </p>
                            <a className="btn main-color btn-lg text-white mt-4 " href="#">Sign In</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center
                                    align-items-center">
                        <div className="ml-2">
                            <h1 style={{fontFamily: 'Tahoma', fontSize: '48px'}}>Our collection is always changing!</h1>
                            <p className="lead mt-5" style={{fontFamily: "Arial", fontSize: '18px', opacity: 0.7}}>
                                Try to check in daily as our collection is always changing!
                                We work non-stop to provide the most accurate articles selection possible
                                for our visitors. We are diligent about article selection and our articles
                                are always going to be our top priority
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div>
                            <img className="image-right" src={require('../../Images/PublicImages/right.jpg')}
                                 alt="right"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Heroes Section */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div>
                            <div>
                                <img className="image-left" src={require('../../Images/PublicImages/left.jpg')}/>
                            </div>
                            <div className="mt-2">
                                <h1>What have you been reading?</h1>
                                <p className="lead">
                                    We would love to know what you have been reading.
                                    Whether it is to learn new skill or grow within one.
                                    We will be able to provide top content for you.
                                </p>
                                <a className="btn main-color btn-lg text-white" href="#">Sign In</a>
                            </div>
                        </div>
                        <div className="m-2">
                            <div>
                                <img className="image-right" src={require('../../Images/PublicImages/right.jpg')} alt="right"/>
                            </div>
                            <div className="mt-2">
                            <h1>Our collection is always changing!</h1>
                                <p className="lead">
                                    Try to check in daily as our collection is always changing!
                                    We work non-stop to provide the most accurate articles selection possible
                                    for our visitors. We are diligent about article selection and our articles
                                    are always going to be our top priority
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}