import Clock from "../../Shared/Clock/Clock";
import Total from "../../Planner/Total/Total";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header className="Header">

            <Total />
            <Clock />

        </header>
    );
}

export default Header;
