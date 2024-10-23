"use client"
import shopStyles from "./shop.module.css";
import { useState } from "react";
import ShopItem from "@/components/ShopItem/item";

export default function Shop() {

    return (
        <main>
            <h1 className={shopStyles.shopHeader}>Shop Tigers!</h1>
            <div className={shopStyles.shopRow}>
                <ShopItem name='Tiger Theo' price='$20.99' imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DpvhmYNxmsyPASJMyLN4LIzHSIYwAYhWKw&s'/>
                <ShopItem name='Tiger Tyler' price='$21.99' imageURL='https://auroragift.com/cdn/shop/products/35000c.jpg?v=1645748175'/>
                <ShopItem name='Tiger Titus' price='$18.99' imageURL='https://douglascuddletoy.com/wp-content/uploads/2017/08/14494-3.jpg'/>
            </div>
            <div className={shopStyles.shopRow}>
                <ShopItem name='Tiger Theo' price='$20.99' imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DpvhmYNxmsyPASJMyLN4LIzHSIYwAYhWKw&s'/>
                <ShopItem name='Tiger Tyler' price='$21.99' imageURL='https://auroragift.com/cdn/shop/products/35000c.jpg?v=1645748175'/>
                <ShopItem name='Tiger Titus' price='$18.99' imageURL='https://douglascuddletoy.com/wp-content/uploads/2017/08/14494-3.jpg'/>
            </div>
        </main>
    );
}