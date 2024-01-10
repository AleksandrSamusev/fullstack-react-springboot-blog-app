import {Link} from "react-router-dom";

export  const  DashboardTopLinkComponent = (props) => {
    return (
        <div className="col-2 text-center shadow-lg"
             style={{
                 backgroundColor: 'white',
                 borderRadius: '10px',
                 paddingTop: '40px'
             }}>
            <Link to='#'
                  style={{
                      fontFamily: 'Roboto',
                      fontSize: '26px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      color: 'black'
                  }}>
                {props.title}
            </Link>
        </div>
    );
}