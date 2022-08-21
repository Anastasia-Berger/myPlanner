import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../../Models/Task";
import notify, { SccMsg } from "../../Services/Notification";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function TasksList(): JSX.Element {

    const [tasks, setTasks] = useState<Task[]>([]);

    const getTaskApi = async () => {
        return await axios.get<Task[]>('https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks');
    };

    useEffect(() => {
        getTaskApi()
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

            <div className="TasksContainer">{ tasks.map((task) => <TaskItem key={task.id} task={task} />) }</div>

        </div>
    );

}

export default TasksList;
