import {DashboardInfoCardParams} from "./DashboardInfoCardParams";

export const DashboardInfoCard = (props) => {
    return (

            <div className="card" style={{background: 'transparent', border: 'none'}}>
                <img src={require("../../Images/PublicImages/coco.jpg")}
                     className="card-img-top shadow-lg" alt="user-photo"
                     style={{borderRadius: '350px', scale: '75%'}}/>
                <div className="card-body pt-0">
                    <h6 className="card-title px-5">{props.user.about}</h6>

                </div>
                <DashboardInfoCardParams user={props.user}/>
            </div>
    );
}