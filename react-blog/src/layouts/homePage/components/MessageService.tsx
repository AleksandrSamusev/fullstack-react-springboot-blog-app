export const MessageService = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 " style={{fontFamily: 'Arial', fontSize: '40px'}}>
                        Can't wind what you are looking for?
                    </h1>
                    <p className="lead">
                        If you cannot find what you are looking for,
                        sent us a personal message!
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        <a className="btn main-color btn-lg text-white shadow-lg" href="#">Sign Up</a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">
                </div>
            </div>

        </div>
    );
}