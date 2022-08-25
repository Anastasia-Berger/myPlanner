import "./Dashboard.css";
import Logo from "../../Shared/Logo/Logo";
import { Link } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";

function Dashboard(): JSX.Element {
    return (
        <div className="Dashboard">

            <div className="Dash-header">
                <Logo />
                <div className="App-name">
                    <span className="first">
                        my
                    </span>
                    <span className="second">
                        Planner
                    </span>
                </div>
            </div>

                <nav className="Navbar">
                    {/* <Link to="home">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="tasks">Tasks</Link>
                    <Link to="credits">Credits</Link> */}

                    <CustomLink to="home">Home</CustomLink>
                    <CustomLink to="about">About</CustomLink>
                    <CustomLink to="tasks">Tasks</CustomLink>
                    <CustomLink to="credits">Credits</CustomLink>
                </nav>

        </div>
    );
}

export default Dashboard;
