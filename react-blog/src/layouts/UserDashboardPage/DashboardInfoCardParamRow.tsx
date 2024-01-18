export const DashboardInfoCardParamRow = (props) => {
    return (
        <li className="list-group-item" style={{border: 'none'}}>
            <div className="row">
                <div className="col-6" style={{paddingLeft: '30px'}}>
                    <span>{props.name}</span>
                </div>
                <div className="col-6 px-0">
                    <span>{props.value}</span>
                </div>
            </div>
        </li>
    );
}