import s from "./ProductsPage.module.css";
import { GoHome } from "../common/GoHome/GoHome";
import { TextMiddle } from "../common/TextMiddle/TextMiddle";
import { TextLarge } from "../common/TextLarge/TextLarge";
import { Button } from "../common/Button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { SmallSlider } from "../SmallSlider/SmallSlider";
import { List } from "../SmallSlider/List/List";
import { ListTwo } from "../SmallSlider/List/ListTwo";

export const ProductsPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={s.productsPage}>
            <div className="textWrapper">
                <GoHome />
            </div>
            <div className={s.textMiddleWrapper}>
                <TextMiddle text="Ключевое сообщение" />
            </div>
            <div className={s.textLargeWrapper}>
                <TextLarge
                    text={
                        <p>
                            Brend<b>XY</b>
                        </p>
                    }
                />
            </div>

            <div className={s.productWrapper}>
                <div className={s.productComposition}>
                    <div className={s.iconPlate}></div>
                    <p className={s.productText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis ullam, repudiandae hic.
                    </p>
                </div>
                <div className={s.productCalendarWrapper}>
                    <div className={s.productCalendar}>
                        <div className={s.iconCalendar}></div>
                        <p className={s.productTextSmall}>
                            Lorem, ipsum dolor.
                        </p>
                    </div>

                    <Button
                        text="Подробнее"
                        icon="plus"
                        onClick={() => setModalActive(true)}
                    />
                </div>
            </div>
            <div className={s.logo}></div>

            <Modal active={modalActive} setActive={setModalActive}>
                <TextMiddle text="Преимущества" />
                <TextLarge
                    text={
                        <p>
                            Brend<b>XY</b>
                        </p>
                    }
                />

                <SmallSlider>
                    <div className={s.smallSlider}>
                        <List />
                    </div>
                    <div className={s.smallSlider}>
                        <ListTwo />
                    </div>
                </SmallSlider>
            </Modal>

            <div className={s.bottle}></div>
            <div className={s.bubblePinkSm}></div>
            <div className={s.bubblePinkMid}></div>
            <div className={s.bubblePinkL}></div>

            <div className={s.bubbleBlueSm}></div>
            <div className={s.bubbleBlueMid}></div>
            <div className={s.bubbleBlueL}></div>

            <div className={s.bubbleBlueMidTwo}></div>
            <div className={s.bubbleBlueSmTwo}></div>
        </div>
    );
};
