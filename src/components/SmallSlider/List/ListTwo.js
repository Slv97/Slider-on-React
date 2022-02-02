import s from "./List.module.css";

export const ListTwo = () => {
    return (
        <div className={s.list}>
            <div className={s.item}>04</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div className={s.item}>05</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur
            </div>
            <div className={s.item}>06</div>
            <div className={s.itemText}>
                Lorem, ipsum dolor sit amet consectetur
            </div>
        </div>
    );
};
