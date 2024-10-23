"use client"
import itemStyles from "./item.module.css";

export default function Shop({ name, price, imageURL }) {

    return (
        <main>
            <div className={itemStyles.tigerProduct}>
                <div className={itemStyles.tigerImg}>
                    <img src={ imageURL } height='250px' width='250px'/>
                </div>
                <div className={itemStyles.tigerTxt}>
                    <p className={itemStyles.tigerName}>{ name }</p>
                    <p className={itemStyles.tigerPrice}>{ price }</p>
                </div>
            </div>
        </main>
    );
}