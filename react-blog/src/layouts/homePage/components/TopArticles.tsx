import {Link} from "react-router-dom";

export const TopArticles = () => {
    return (
        /*        <div className='p-5 mb-4 bg-dark header'>
                    <div className='container-fluid text-white d-flex justify-content-center
                    align-items-center'>
                        <div>
                            <h1 className='display-5 fw-bold'>Find next Article to read</h1>
                            <p className='col-md-8 fs-4'>Where would you like to go next?</p>
                            <a type='button' className='button main-color btn-lg text-white' href='#'>
                                Explore an Articles
                            </a>
                        </div>
                    </div>
                </div>*/

        <div className="container mt-5 text-center ">
            <div className="row">
                <div className="col">
                    <h1 style={{fontFamily: 'Arial', fontSize: '52px'}} className="pb-3 mt-3">
                        Find next article to read, or just create your own!
                    </h1>
                    <p className="">Where would you like to go next? We have prepared for you a selection of the
                        most
                        interesting articles from authors from all over the world.
                    </p>
                    <Link type='button' className='btn main-color btn-lg text-white mt-3 shadow-lg' to='/search'>
                        Explore All Articles
                    </Link>
                </div>
            </div>
        </div>
    );
}