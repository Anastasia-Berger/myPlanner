import moment from "moment";
import "./Today.css";

function Today(): JSX.Element {
    return (
        <div className="Today">
            <p>{moment().format('DD MMM, dddd HH:mm A')}</p>
        </div>
    );
}

export default Today;
