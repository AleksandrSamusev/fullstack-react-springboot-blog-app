export const Footer = () => {
    return(
        <div className="main-color">
            <div className="container d-flex flex-wrap justify-content-between
            align-items-center py-4 main-color">
                <p className="col-md-4 mb-0 text-white">© dev.practice</p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Search Articles</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}