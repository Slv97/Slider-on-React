import "./Button.css";

export const Button = ({ text, icon, ...props }) => {
    return (
        <div onClick={props.onClick}>
            <button className="btn">
                <div className="btnIcon">
                    <div className={icon}></div>
                </div>
                <div>{text}</div>
            </button>
        </div>
    );
};
