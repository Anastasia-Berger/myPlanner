import "./Dashboard.css";
import Logo from "../Logo/Logo";

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

            <div className="Dash-navbar">
                <nav className="Navbar">

                </nav>
            </div>

        </div>
    );
}

export default Dashboard;
