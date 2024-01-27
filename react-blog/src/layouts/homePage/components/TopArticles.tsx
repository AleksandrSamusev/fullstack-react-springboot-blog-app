import {Link} from "react-router-dom";

export const TopArticles = () => {
    return (
        <div className="container mt-3 mt-lg-4 text-center">
            <div className="row ">
                <div className="col">
                    <h1 className="mt-3 mt-lg-5 mb-3 mb-lg-5"> Find next article to read, or just create your own! </h1>
                    <p className="mb-3 mb-lg-5 px-lg-0">Where would you like to go next? We have prepared for you a selection of the
                        most
                        interesting articles from authors from all over the world.
                    </p>
                    <Link type='button' className='btn main-color btn-lg text-white shadow-lg mb-lg-5' to='/search'>
                        Explore All Articles
                    </Link>
                </div>
            </div>
        </div>
    );
}