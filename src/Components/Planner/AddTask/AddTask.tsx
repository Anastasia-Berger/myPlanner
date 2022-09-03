import "./AddTask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from "../../../Models/Task";
import { useNavigate } from "react-router-dom";
import notify, { SccMsg } from "../../../Services/Notification";
import { addTask } from "../../../Services/TasksApi";
import store from "../../../Redux/store";
import { taskAddedAction } from "../../../Redux/TasksAppState";

function AddTask(): JSX.Element {

    const navigate = useNavigate();

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

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<Task>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = async (task: Task) => {

        await addTask(task)
            .then(res => {
                notify.success(SccMsg.ADDED_TASK);
                // Updating global state
                store.dispatch(taskAddedAction(res.data));
                navigate('/tasks');

            })
            .catch(err => {
                notify.error(err);
                console.log(err);
                console.log(err.message);
            });
    }


    return (
        <div className="AddTask">

            <h2>Add Task</h2>
            <p>Fill the form below to add a task to your planner.</p>
            <form onSubmit={handleSubmit(sendToRemote)} className="inputGroup">

                {
                    errors.title?.message ?
                        <><span>{errors?.title?.message}</span></>
                        :
                        <><label htmlFor="title"></label></>
                }

                <input {...register("title")}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    autoComplete="off"
                />

                {
                    errors.description?.message ?
                        <><span>{errors?.description?.message}</span></>
                        :
                        <><label htmlFor="description"></label></>
                }

                <input {...register("description")}
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                />


                {
                    errors.group?.message ?
                        <><span>{errors?.group?.message}</span></>
                        :
                        <><label htmlFor="group"></label></>
                }

                <input {...register("group")}
                    id="group"
                    name="group"
                    type="text"
                    placeholder="Group"
                />


                {
                    errors.when?.message ?
                        <>
                            <span>{errors?.when?.message}</span>
                        </> :
                        <>
                            <label htmlFor="when"></label>
                        </>
                }
                <input
                    {...register("when")}
                    id="when"
                    name="when"
                    type="date"
                    placeholder="When" />


                <button disabled={!isValid}>ADD</button>
            </form>


        </div>
    );
}

export default AddTask;
