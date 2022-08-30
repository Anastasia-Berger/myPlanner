import "./AddTask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from "../../../Models/Task";
import axios from "axios";
import globals from "../../../Services/Globals";

function AddTask(): JSX.Element {

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


    const addTask = async (task: Task) => {
        const formData = new FormData();
        formData.append("title", task.title as string);
        formData.append("description", task.description as string);
        formData.append("group", task.group as string);
        const exp = (task.when?.toISOString().split('T')[0]);
        formData.append("when", exp as string);


        // sending post request to spring boot
        console.log(formData);
        await axios.post<Task>(globals.urls.tasks, formData)
            .then(res => { alert(JSON.stringify(res.data)) })
            .catch(err => { console.log(err); });
    }


    return (
        <div className="AddTask">

            <h2>Add Task</h2>
            <p>Fill the form below to add a task to your planner.</p>
            <form onSubmit={handleSubmit(addTask)} className="inputGroup">

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
