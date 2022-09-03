import { Task } from "../../../Models/Task";
import "./TaskItem.css";
import TaskImage from './../../../Assets/Images/cute-baby-yoda-in-spaceship.png';
import ILTime from "../../Shared/ILTime/ILTime";
import { FiSettings, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom";
import { useState } from "react";

interface TaskItemProps {
    task: Task;
}

function TaskItem(props: TaskItemProps): JSX.Element {

    const [id, setId] = useState<number>(props.task.id || 0)

    const updateTask = (id:number) => {
        window.alert('going to update ' + id);
    }

    const deleteTask = (id:number) => {
        window.alert('going to delete ' + id);
    }

    return (
        <div className="TaskItem card">

            <div className="buttons">
                {/* <button onClick={() => deleteTask(props.task.id || 0)}><FiTrash size={20}/></button> */}
                <Link to={`/tasks/delete/${props.task.id}`}><button><FiTrash size={20}/></button></Link>
                {/* <button onClick={() => updateTask(props.task.id || 0)}><FiSettings size={20}/></button> */}
                <Link to={`/tasks/edit/${props.task.id}`}><button><FiSettings size={20}/></button></Link>
                
            </div>
            
            <div className="BoxImage">
                <img src={TaskImage} alt="yoda" />
            </div>



            <div className="TaskDetails">
                <p>{props.task.id} </p>
                <p>Title : {props.task.title} </p>
                <p>Description : {props.task.description} </p>
                <p>Group : {props.task.group} </p>
                <ILTime date={props.task.when || new Date()} />
            </div>
        </div>
    );
}

export default TaskItem;
