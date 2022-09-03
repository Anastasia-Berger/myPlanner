import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../../Models/Task";
import notify, { SccMsg } from "../../../Services/Notification";
import { deleteTask } from "../../../Services/TasksApi";
import "./DeleteTask.css";

function DeleteTask(): JSX.Element {

    const navigate = useNavigate();

    const params = useParams();
    const id = +(params.id || '');

    const yes = () => {
        deleteTask(id)
            .then(any => {
                notify.success(SccMsg.DELETED_TASK);
                // Updating global state
                // store.dispatch(taskDeletedAction(id));
                navigate('/tasks');
            })
            .catch(err => notify.error(err));
    }

    const no = () => {
        navigate('/tasks');
    }

    return (
        <div className="DeleteTask">
			<h2>ARE U SURE?</h2>
            <p> You are going to delete task #{id}?</p>
            <div className="buttons">
            <button onClick={yes}>YES</button><button onClick={no}>NO</button>
            </div>
        </div>
    );
}

export default DeleteTask;
