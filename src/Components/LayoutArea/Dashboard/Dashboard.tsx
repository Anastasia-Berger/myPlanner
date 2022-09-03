import "./Dashboard.css";
import Logo from "../../Shared/Logo/Logo";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import AppName from "../../Shared/AppName/AppName";
import NavMenu from "../../Shared/NavMenu/NavMenu";

function Dashboard(): JSX.Element {
    return (
        <div className="Dashboard">

            <Logo />
            <NavMenu />

        </div>
    );
}

export default Dashboard;
