import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/UK-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV4._CB661903594_.jpg"
                // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51N-u8AsmdL._SY346_.jpg"
                />
                <Product id="12321341"
                    title="LG TONE FN7 Wireless Bluetooth Earbuds"
                    price={132.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71qHEFYzVVL._AC_SY450_.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="12321341"
                    title='Art 40 " Made in Italy" Bar Globe by Zoffoli with Certificate of Authenticity'
                    price={215.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71%2B1Q7u1ikL._AC_SL1500_.jpg"
                />
                <Product id="12321341"
                    title="Tap to Tidy: Organising, Crafting & Creating Happiness in a Messy World"
                    price={8.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41IXZiQoxzL._SX351_BO1,204,203,200_.jpg"
                />
                <Product id="12321341"
                    title="Forging Destiny (The Way of Legend Book 2)"
                    price={0.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51LK7Yb86AL.jpg"
                />
            </div>
            <div className="home__row">
                <Product id="12321341"
                    title='Samsung Odyssey LC32G55TQWUXEN 32" G55 1000R Curved Gaming Monitor - 144Hz, 1ms, 1440p QHD, Freesync Premium, HDR10, HDMI, 1 x Displayport,Black'
                    price={344.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81fFnzlCpmL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
