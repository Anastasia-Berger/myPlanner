import { useEffect, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Task } from "../../../Models/Task";
import notify, { SccMsg } from "../../../Services/Notification";
import { getTasks } from "../../../Services/TasksApi";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function TasksList(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getTasks()
            .then((res) => {
                console.log(res.data);
                setTasks(res.data)
                notify.success(SccMsg.ADDED_TASK);
            })
            .catch((err) => { notify.error(err); });
        ;
    }, []);

    return (
        <div className="TasksList">
            <h2>List Of Tasks</h2>

            <div className="buttons">
                <CustomLink to="/tasks/add"><FiPlusCircle size={30}/></CustomLink>
                
                <FiMinusCircle size={30}/>
            </div>

            <div className="TasksContainer">
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </div>

        </div>
    );

}

export default TasksList;
