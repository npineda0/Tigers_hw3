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
                <ShopItem name='Tiger Tatum' price='$23.99' imageURL='https://shopzoo.com/cdn/shop/files/PLUSHCKTIGERCUB1410053741663361_1600x.jpg?v=1693517641'/>
                <ShopItem name='Tiger Teagan' price='$25.99' imageURL='https://www.muzemerch.com/media/catalog/product/cache/d0b3e0c3f48a829f2e9e30ac87b08ff0/image/64189621/jumbo-tiger-100-sustainable-plush.jpg'/>
                <ShopItem name='Tiger Tessa' price='$20.99' imageURL='https://cdn4.volusion.store/9nxdj-fchy5/v/vspfiles/photos/DG-1869-2.jpg?v-cache=1727447484'/>
            </div>

        </main>
    );
}
