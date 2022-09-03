import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import "./EditTask.css";
import { Task } from "../../../Models/Task";
import { getTask, updateTask } from "../../../Services/TasksApi";
import notify, { SccMsg } from "../../../Services/Notification";
import { useEffect, useState } from "react";
import store from "../../../Redux/store";
import { taskUpdatedAction } from "../../../Redux/TasksAppState";

function EditTask(): JSX.Element {

    const navigate = useNavigate();

    const params = useParams();
    const id = +(params.id || '');

    const [task, setTask] = useState<Task>(new Task());

    const schema = yup.object().shape({
        title:
            yup.string()
                .required("Title is required"),
        description:
            yup.string()
                .required("Description is required"),
        group:
            yup.string()
                .required("Group is required"),
        when:
            yup.date()
                .default(new Date())
                .typeError("You must specify a task date")
                .required("When is required")
                .nullable().default(() => new Date())

    });

    let defaultValuesObj = { ...task };


    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } } =
        useForm<Task>({ mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({
        control
    });

    const sendToRemote = async (task: Task) => {

        await updateTask(id, task)
            .then(res => {
                task.id = id;
                notify.success(SccMsg.UPDATED_TASK);
                // Updating global state
                store.dispatch(taskUpdatedAction(res.data));
                navigate('/tasks');

            })
            .catch(err => {
                notify.error(err);
                console.log(err);
                console.log(err.message);
            });
    }

    useEffect(() => {
        getTask(id)
            .then(res => {
                setTask(res.data);
                notify.success(SccMsg.GOT_TASK);
            })
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="EditTask">
            <h2>Update existing task</h2>
            <p>Fill the form below to update the task No : </p>

            <form onSubmit={handleSubmit(sendToRemote)} className="inputGroup">
                <label htmlFor="id">id</label>
                <br />
                <input
                    type="number"
                    {...register("id")}
                    disabled={true}
                    name="id"
                    placeholder="id" />
                <br />
                <label htmlFor="title">title</label>
                <br />
                <input
                    type="text"
                    {...register("title")}
                    // onChange={(e) => {console.log(e.target.value); }}
                    name="title"
                    placeholder="title" />
                <br />
                <span>{errors.title?.message}</span>
                <br />
                <label htmlFor="description">description</label>
                <br />
                <input
                    type="text"
                    {...register("description")}
                    name="description"
                    placeholder="description" />


                <br />
                <span>{errors.description?.message}</span>
                <br />
                <label htmlFor="group">group</label>
                <br />
                <input
                    type="text"
                    {...register("group")}
                    name="group"
                    placeholder="group" />


                <br />
                <span>{errors.group?.message}</span>

                <br />
                <label htmlFor="when">when</label>
                <br />
                <input
                    type="datetime-local"
                    step="any"
                    {...register("when")}
                    name="when"
                    placeholder="when" />

                <br />
                <span>{errors.when?.message}</span>
                <br />
                <button disabled={!isDirty} className="button-app" >Update Task</button>
            </form>
        </div>
    );
}

export default EditTask;

