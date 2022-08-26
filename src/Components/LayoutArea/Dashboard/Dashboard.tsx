import "./Dashboard.css";
import Logo from "../../Shared/Logo/Logo";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import AppName from "../../Shared/AppName/AppName";

function Dashboard(): JSX.Element {
    return (
        <div className="Dashboard">

            <div className="Dash-header">
                <Logo />
                <AppName />
            </div>

            <nav className="Navbar">
                <CustomLink to="home">Home</CustomLink>
                <CustomLink to="about">About</CustomLink>
                <CustomLink to="tasks">Tasks</CustomLink>
                <CustomLink to="credits">Credits</CustomLink>
            </nav>

        </div>
    );
}

export default Dashboard;
