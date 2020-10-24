import React, { useEffect } from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  useEffect(() => {
    document.title = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
  }, [])
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />
      {/* Product id,title,price,rating,image */}
      {/* Many Products */}
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Smart Watch I-Appiois for man's"
          price={199}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="5"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4.5}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="HP 14 Ultra Thin & Light 14-inch Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TU"
          image="https://images-na.ssl-images-amazon.com/images/I/81MEmcBaxVL._SX522_.jpg"
          rating={4}
          price={122}
        />
         <Product
          id="8"
          title="boAt Rockerz 255 Sports Wireless Headset with Super Extra Bass, IPX5 Water & Sweat Resistance, Qualcomm Chipset and Up to 6H Playback (Active Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._SL1500_.jpg"
          rating={4}
          price={252}
        />
         <Product
          id="9"
          title="AMD Ryzen 5 3600XT Desktop Processor 6 cores up to 4.5GHz 35MB Cache AM4 Socket (100-100000281BOX)"
          image="https://images-na.ssl-images-amazon.com/images/I/71u%2BmYxe%2BUL._SL1384_.jpg"
          rating={5}
          price={12}
        />
         <Product
          id="10"
          title="Redgear Pro Wireless Gamepad (Compatible with Windows 7/8/8.1/10 only)"
          image="https://images-na.ssl-images-amazon.com/images/I/81SzaVbfZAL._SL1500_.jpg"
          rating={3}
          price={152}
        />
      </div>
    </div>
  );
}

export default Home;
