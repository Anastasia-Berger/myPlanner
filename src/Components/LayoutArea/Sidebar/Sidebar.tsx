import "./Sidebar.css";

function Sidebar(): JSX.Element {
    return (
        <div className="Sidebar">
            {/* User */}
            <a href="">
                <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-User-interface-those-icons-lineal-those-icons-2.png" />
            </a>
            <p>Hello Pretty!</p>
        </div>
    );
}

export default Sidebar;
