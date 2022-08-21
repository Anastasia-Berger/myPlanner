import Clock from "../Clock/Clock";
import Total from "../Total/Total";
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
