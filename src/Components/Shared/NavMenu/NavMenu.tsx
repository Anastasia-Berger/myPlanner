import CustomLink from "../CustomLink/CustomLink";
import "./NavMenu.css";

function NavMenu(): JSX.Element {
    return (
        <div className="NavMenu">
            <nav className="sidebar">
                <CustomLink to="home">Home</CustomLink>
                <CustomLink to="about">About</CustomLink>
                <CustomLink to="tasks">Tasks</CustomLink>
                <CustomLink to="credits">Credits</CustomLink>
            </nav>
        </div>
    );
}

export default NavMenu;
