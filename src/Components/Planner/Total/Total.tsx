import { useEffect, useState } from "react";
import store from "../../../Redux/store";
import notify from "../../../Services/Notification";
import { countTasks } from "../../../Services/TasksApi";
import "./Total.css";

function Total(): JSX.Element {

    const [count, setCount] = useState<number>(store.getState().taskReducer.tasks.length);

    useEffect(() => {
        countTasks()
            .then(res => setCount(res.data))
            .catch(err => notify.error(err));
    }, []);

    useEffect(() => {
        return store.subscribe(() => {
            setCount(store.getState().taskReducer.tasks.length); // Will let us notify
        })
    },[]);

    return (
        <div className="Total">
            <span className={count > 0 ? "full_count" : "empty_count"}> {count} </span>
        </div>
    );
}

export default Total;
