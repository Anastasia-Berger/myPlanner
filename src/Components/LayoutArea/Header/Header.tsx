import Clock from "../../Shared/Clock/Clock";
import Total from "../../Planner/Total/Total";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">

            <Total />
            <Clock />

        </div>
    );
}

export default Header;
