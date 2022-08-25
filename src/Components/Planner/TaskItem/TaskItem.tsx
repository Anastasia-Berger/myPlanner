import { Task } from "../../../Models/Task";
import "./TaskItem.css";
import TaskImage from './../../../Assets/Images/cute-baby-yoda-in-spaceship.png';
import ILTime from "../../Shared/ILTime/ILTime";
import { FiSettings, FiTrash } from "react-icons/fi"

interface TaskItemProps {
    task: Task;
}

function TaskItem(props: TaskItemProps): JSX.Element {
    return (
        <div className="TaskItem">

            <div className="buttons">
                <FiTrash size={25}/>
                <FiSettings size={25}/>
            </div>

            <div className="BoxImage">
                <img src={TaskImage} alt="yoda" />
            </div>



            <div className="TaskDetails">
                <p>{props.task.id} </p>
                <p>Title : {props.task.title} </p>
                <p>Description : {props.task.description} </p>
                <p>Group : {props.task.group} </p>
                <ILTime date={props.task.when || new Date} />
            </div>
        </div>
    );
}

export default TaskItem;
