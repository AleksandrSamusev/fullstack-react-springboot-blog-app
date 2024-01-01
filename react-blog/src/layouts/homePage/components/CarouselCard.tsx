export const CarouselCard = () => {
    return (
        <div className='container p-5  border shadow-lg'>
            <div className='row'>
                <div className='col p-3 m-auto '>
                    <h1 className='mb-3 mt-3' style={{fontFamily: 'Tahoma', fontSize: '40px'}}>Curiosity Rover Mission
                        Overview</h1>

                    <p style={{fontFamily: "Arial", fontSize: '18px', opacity: 0.8}} className="mt-5">Part of NASA's
                        Mars Science Laboratory mission,
                        Curiosity is the largest and most capable rover
                        ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5,
                        2012 (1:32 a.m. EDT on Aug. 6, 2012).
                    </p>
                    <a className="btn main-color btn-lg text-white mt-4 " href="#">Sign In</a>
                </div>
                <div className='col '>
                    <img src={require('../../../Images/ArticlesImages/curiosity.png')}
                         alt='rover'/>
                </div>
            </div>
        </div>
    );
}