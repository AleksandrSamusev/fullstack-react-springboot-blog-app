export const DashboardTitle = (props) => {
    return (
        <div className="mt-5">
            <h2 className="text-end pe-4"
                style={{
                    fontFamily: 'Roboto',
                    fontSize: '38px',
                    fontWeight: '500'
                }}>
                {props.title}</h2>
            <hr/>
        </div>
    );
}