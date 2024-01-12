import React from "react";

export const ArticleCard = () => {
    return (
        <div className="shadow p-0"
             style={{
                 width: '180px',
                 marginLeft: '40px',
                 borderRadius: '10px'
             }}>
            <div style={{height: '130px'}}>
                <img src={require('../../../Images/ArticlesImages/mac.png')}
                     alt='default-image' className="w-100 h-100"
                     style={{
                         border: '1px solid gray',
                         borderTopRightRadius: '10px',
                         borderTopLeftRadius: '10px'
                     }}/>
            </div>
            <div className="text-start">
                <h4 className="mt-2 mx-2"
                    style={{
                        fontSize: '20px'
                    }}
                >Curiosity Rover Mission Overview</h4>
                <p className="mx-2"
                   style={{
                       opacity: '0.6',
                       fontSize: '12px'
                   }}
                >2020-12-25</p>
                <div className="row m-0 mb-2" style={{fontSize: '12px'}}>
                    <div className="col-6">
                        <span>views: 945</span>
                    </div>
                    <div className="col-6">
                        <span>likes: 654</span>
                    </div>
                </div>
            </div>
        </div>
    );
}