import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import { Task } from "../../../Models/Task";
import notify, { SccMsg } from "../../../Services/Notification";
import { getTasks } from "../../../Services/TasksApi";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import EmptyView from "../../Shared/EmptyView/EmptyView";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";
import Total from "../Total/Total";
import store from "../../../Redux/store";
import { tasksDownloadedAction } from "../../../Redux/TasksAppState";
import { useNavigate } from "react-router-dom";

function TasksList(): JSX.Element {

    const navigate = useNavigate();
    const [tasks, setTasks] = useState<Task[]>(store.getState().taskReducer.tasks);

    // Side effects goes here
    useEffect(() => {
        if (tasks?.length === 0) {
            getTasks()
                .then((res) => {
                    // Updating Component State
                    setTasks(res.data);
                    // Updating global state
                    store.dispatch(tasksDownloadedAction(res.data));
                    // notify.success(SccMsg.GOT_TASKS);
                })
                .catch((err) => { /*notify.error(err);*/ });
        }
    }, []);

    return (
        <div className="TasksList">

            <div className="TaskListHeader">
                <h2>List Of Tasks </h2>(<Total />)
                <Tooltip title="ADD" placement="right"><CustomLink to="/tasks/add"><button> + </button></CustomLink></Tooltip>
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
