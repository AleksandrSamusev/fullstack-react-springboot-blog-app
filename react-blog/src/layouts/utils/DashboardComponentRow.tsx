export const DashboardComponentRow = (props) => {
    return (
        <div className="row">
            <div className="col-md-5 pt-2">
                <h3 style={{
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: '400'
                }}>{props.rowTitle}</h3>
            </div>
            <div className="col-md-4 pt-2 text-center">
                <h3 style={{
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: '700'
                }}>{props.rowValue}</h3>
            </div>
            <div className="col-md-3 text-end pt-3">
                <span style={{
                    border: '1px solid black',
                    padding: '5px 20px',
                    borderRadius: '5px'
                }}>details</span>
            </div>
        </div>
    );
}