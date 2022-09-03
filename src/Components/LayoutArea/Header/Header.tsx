import Clock from "../../Shared/Clock/Clock";
import Total from "../../Planner/Total/Total";
import "./Header.css";
import Today from "../../Shared/Today/Today";

function Header(): JSX.Element {
    return (
        <div className="Header">

            <br />
            <Today />
            
            {/* <Clock /> */}

        </div>
    );
}

export default Header;
