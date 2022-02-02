import s from "./List.module.css";

export const List = () => {
    return (
        <div className={s.list}>
            <div className={s.item}>01</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div className={s.item}>02</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur
            </div>
            <div className={s.item}>03</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur
            </div>
        </div>
    );
};
