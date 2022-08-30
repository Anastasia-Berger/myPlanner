import { useEffect, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Task } from "../../../Models/Task";
import notify, { SccMsg } from "../../../Services/Notification";
import { getTasks } from "../../../Services/TasksApi";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import EmptyView from "../../Shared/EmptyView/EmptyView";
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

            <div className="TaskListHeader">
                <h2>List Of Tasks</h2>
                <button><CustomLink to="/tasks/add"> + </CustomLink>
            </button>
            </div>

            {(tasks?.length > 0)
                ?
                <>
                    <div className="TasksContainer">
                        {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
                    </div>
                </>
                :
                <>
                    <EmptyView msg="NO TASKS FOR YOU" />
                </>}


        </div>
    );

}

export default TasksList;
