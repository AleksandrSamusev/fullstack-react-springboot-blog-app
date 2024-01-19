import {Link} from "react-router-dom";
import {useState} from "react";

export const DashboardTopLinkComponent = (props) => {

    const [clicked, setClicked] = useState(false);

    const handleCl = e => {
        e.preventDefault();
        props.handleClick(e.target.id);
    }

    return (
        <div className={clicked ? "col-2 text-center shadow-lg pt-4" : "col-2 text-center pt-4"}
             style={{
                 borderBottomLeftRadius: clicked ? '15px' : '',
                 borderBottomRightRadius: clicked ? '15px' : '',
             }}
        >
            <Link
                to='#'
                id={props.title}
                  onClick={handleCl}
                  style={{
                      fontFamily: 'Roboto',
                      fontSize: '22px',
                      textDecoration: 'none',
                      fontWeight: clicked ? '500' : '400',
                      color: 'black'
                  }}>
                {props.title}
            </Link>
        </div>
    );
}