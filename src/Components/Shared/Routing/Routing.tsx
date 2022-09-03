import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../../Pages/About/About";
import Credits from "../../Pages/Credits/Credits";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import AddTask from "../../Planner/AddTask/AddTask";
import DeleteTask from "../../Planner/DeleteTask/DeleteTask";
import EditTask from "../../Planner/EditTask/EditTask";
import TasksList from "../../Planner/TasksList/TasksList";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<Home />} />
                <Route index element={<Home />} /> 
                <Route path='/tasks' element={<TasksList />} />

                <Route path='/tasks/add' element={<AddTask />} />
                <Route path='/tasks/edit/:id' element={<EditTask />} />
                <Route path='/tasks/delete/:id' element={<DeleteTask />} />

                <Route path='/about' element={<About />} />
                <Route path='/credits' element={<Credits />} />
                <Route path='/*' element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
