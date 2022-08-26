import "./AddTask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from "../../../Models/Task";
import axios from "axios";

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
        await axios.post<Task>('http://localhost:8080/api/tasks/', formData)
            .then(res => { alert(JSON.stringify(res.data)) })
            .catch(err => { console.log(err); });
    }


    return (
        <div className="AddTask">

            <form onSubmit={handleSubmit(addTask)} >

                {
                    errors.title?.message ?
                        <><span>{errors?.title?.message}</span></>
                        :
                        <><label htmlFor="title">Title</label></>
                }

                <input {...register("title")}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title"
                />


                {
                    errors.description?.message ?
                        <><span>{errors?.description?.message}</span></>
                        :
                        <><label htmlFor="description">Description</label></>
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
                        <><label htmlFor="group">Group</label></>
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
                            <label htmlFor="when">When:</label>
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
