export const TopArticles = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
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
        </div>
    );
}