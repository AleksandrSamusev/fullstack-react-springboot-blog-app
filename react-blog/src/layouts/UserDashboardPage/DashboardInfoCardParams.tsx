import {DashboardInfoCardParamRow} from "./DashboardInfoCardParamRow";

export const DashboardInfoCardParams = (props) => {
    return (
        <ul className="list-group list-group-flush">
            <DashboardInfoCardParamRow name='First name' value = {props.user.firstName}/>
            <DashboardInfoCardParamRow name='Last name' value = {props.user.lastName}/>
            <DashboardInfoCardParamRow name='Birth date' value = {props.user.birthDate}/>
            <DashboardInfoCardParamRow name='Username' value = {props.user.username}/>
            <DashboardInfoCardParamRow name='Email' value = {props.user.email}/>
        </ul>
    );
}