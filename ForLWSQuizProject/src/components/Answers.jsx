import CheckBox from "./CheckBox";
import classes from "../styles/Answers.module.css";

export default function Answers({ options = [], handleChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <CheckBox
                    key={index}
                    className={classes.answer}
                    text={option.title}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                    type="checkbox"
                />
            ))}
        </div>
    );
}
