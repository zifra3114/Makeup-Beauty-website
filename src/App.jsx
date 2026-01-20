import React, { useState } from "react";
import Bridal from "./assets/bridal.jpg";
import Party from "./assets/party.jpg"; 
import soft from "./assets/soft.jpg";
import natural from "./assets/natural.jpg";
import photoshoot from "./assets/photoshoot.jpg";
import nikkah from "./assets/nikkah.jpg";
import skincare1 from "./assets/skin1.jpg";
import skincare2 from "./assets/skin2.jpg";
import skincare3 from "./assets/skin3.jpg"; 
import skincare4 from "./assets/skin4.jpg";
import skincare5 from "./assets/skin5.jpg";
import hair1 from "./assets/hair1.jpg";
import hair2 from "./assets/hair2.jpg";
import hair3 from "./assets/hair3.jpg";
import hair4 from "./assets/hair4.jpg";
import hair5 from "./assets/hair5.jpg";
import hair6 from "./assets/hair6.jpg";
import hair7 from "./assets/hair7.jpg";
import hair8 from "./assets/hair8.jpg";
import manicure from "./assets/manicure.jpg";
import pedicure from "./assets/pedicure.jpg";
import waxing from "./assets/waxing.jpg";
import massage from "./assets/massage.jpg";
import facial from "./assets/facial.jpg";
import hairSpa from "./assets/hairspa.jpg";
import { FaSearch,FaFacebookF,FaInstagram,FaLinkedinIn,FaGlobe,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";  

import "./App.css";
import { DiOpenshift } from "react-icons/di";

function MakeupUi() {
  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000,       
      once: true,          
      easing: "ease-in-out",
      offset: 120,          
    });
    AOS.refresh();
  }, []);
  const [open ,setOpen] = useState(false)
  const [search, setSearch] = useState(""); 
  const sections = [
  { id: "home", title: "home" },
  { id: "service", title: "service" },
  { id: "makeup", title: "makeup" },
  { id: "skincare", title: "skincare" },
  { id: "manicure", title: "manicure" },
  { id: "waxing", title: "waxing" },
  { id: "haircut", title: "haircut" },
  { id: "contact", title: "contact" },
];

useEffect(() => {
  if (!search) return;

  const foundSection = sections.find((sec) =>
    sec.title.toLowerCase().includes(search.toLowerCase())
  );

  if (foundSection) {
    const element = document.getElementById(foundSection.id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}, [search]);


// React component ke top par
const [cart, setCart] = useState([]);

// Add to cart function
const addToCart = (item) => {
  const exists = cart.find((c) => c.id === item.id);

  if (exists) {
    setCart(
      cart.map((c) =>
        c.id === item.id ? { ...c, qty: c.qty + 1 } : c
      )
    );
  } else {
    setCart([...cart, { ...item, qty: 1 }]);
  }
};

// Remove item
const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};

// Increase / decrease quantity
const increaseQty = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};

const decreaseQty = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};

// Total bill
const totalAmount = cart.reduce(
  (total, item) => total + item.price * item.qty,
  0
);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const whatsappLink = `https://wa.me/923412620272?text=${encodeURIComponent(
  `Hello LuxeGlow Beauty ✨
  
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
)}`;

  return (
    <div className="makeup-ui">
      <div className="navbar"  data-aos="fade-up">
       

  <div className="logo">
    <h1>LuxeGlow Beauty</h1>
  </div>

  <button className="menu-btn" onClick={() => setOpen(!open)}>
    ☰
  </button>

  <div className={`navbar-links ${open ? "show" : ""}`}>
    <ul className="nav-buttom">
      <li onClick={()=>setOpen(false)}> <a href="#home">Home</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#service">Service</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#makeup">Makeup</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#skincare">Skincare & Facial</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#manicure">Manicure & Pedicure</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#waxing">Waxing</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#haircut">Haircut</a></li>
      <li onClick={()=>setOpen(false)}> <a href="#contact">Contact</a></li>
    </ul>

    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  </div>

</div>

      <div className="hero-container" >
      <div className="hero-content" data-aos="fade-down" id="home">
        <h1>Enhancing Beauty, One Look at a Time</h1>
        <p>We create stunning makeup looks that highlight your features and boost your confidence. Because you deserve to glow every day.</p>
        <button className="book-btn">Book Appointment</button>
        <button className="look-btn">Explore Looks</button>
      </div>
    </div>
   
     <div className="makeup-section" data-aos="fade-up" id="makeup">
      <h1>Makeup Looks for Every Occasion</h1>
      <div className="makeup-cards">
       <div className="makeup">
        <img src={Bridal} alt="" />
        <h2>Bridal Makeup Look</h2>
        <p>Heavy, flawless base.</p>
        <h3> Rs. 25,000 – 45,000</h3>
        <button onClick={() => addToCart({ id: 1, name: "Bridal Makeup", price: 25000 })}>
    Add to Cart
  </button>

       </div>
       <div className="makeup">
        <img src={Party} alt="" />
        <h2>Party Makeup</h2>
        <p>Bold or nude lips.</p>
        <h3> Rs. 6,000 – 10,000</h3>
        <button
        onClick={() => addToCart({ id: 2, name: "Party Makeup", price: 6000 })}
        >Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={soft} alt="" />
        <h2>Soft Glam Makeup</h2>
        <p>Everyday elegant look.</p>
        <h3> Rs. 5,000 – 8,000</h3>
        <button
        onClick={() => addToCart({ id: 3, name: "Soft Glam Makeup", price: 5000 })}
        >Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={natural} alt="" />
        <h2>Natural / No Makeup Look</h2>
        <p>Daily wear look.</p>
        <h3> Rs. 3,000 – 5,000</h3>
        <button
        onClick={() => addToCart({ id: 4, name: "Natural Makeup", price: 3000 })}
        >Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={photoshoot} alt="" />
        <h2>Photoshoot Makeup</h2>
        <p>Camera-friendly look.</p>
        <h3> Rs. 8,000 – 15,000</h3>
        <button onClick={() => addToCart({ id: 5, name: "Photoshoot Makeup", price: 8000 })}>
    Add to Cart
  </button>
       </div>
       <div className="makeup">
        <img src={nikkah} alt="" />
        <h2>Nikkah Makeup Look</h2>
        <p>Pink / nude shades.</p>
        <h3> Rs. 15,000 – 25,000</h3>
        <button onClick={() => addToCart({ id: 6, name: "Nikkah Makeup", price: 15000 })}>
    Add to Cart
  </button>
       </div>
      </div>
     </div>
     <div className="skinCare-section" data-aos="fade-up" id="skincare"> 
      <h1>Skin Care & Facial Products</h1>
      <div className="skincare-products">
        <div className="skincare">
          <img src={skincare1} alt="" />
          <h2>Face Wash / Cleanser</h2>
          <p>Hydrating Face Cleanser</p>
          <h3>Rs 1,200 – 2,500</h3>
          <button
          onClick={() => addToCart({ id: 7, name: "Face Wash", price: 1200 })}
          >Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare2} alt="" />
          <h2>Toner</h2>
          <p>Refreshing Skin Toner</p>
          <h3>Rs. 1,000 – 2,000</h3>
          <button
          onClick={() => addToCart({ id: 8, name: "Toner", price: 1000 })}
          >Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare3} alt="" />
          <h2>Sunscreen</h2>
          <p>SPF 50+ Sun Protection</p>
          <h3>Rs. 1,800 – 3,500</h3>
          <button
          onClick={() => addToCart({ id: 9, name: "Sunscreen", price: 1800 })}
          >Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare4} alt="" />
          <h2>Moisturizer</h2>
          <p>Hydrating Moisturizer</p>
          <h3>Rs. 1,500 – 3,000</h3>
          <button
          onClick={() => addToCart({ id: 10, name: "Moisturizer", price: 1500 })}
          >Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare5} alt="" />
          <h2>Eye Cream</h2>
          <p>Anti-Aging Eye Cream</p>
          <h3>Rs. 2,000 – 4,500</h3>
          <button
          onClick={() => addToCart({ id: 11, name: "Eye Cream", price: 2000 })}
          >Buy Now</button>
        </div>
      </div>
     </div>
     <div className="haircut-section" data-aos="fade-up" id="haircut">
  <h1>Professional Hair Cuts for Every Face Shape & Style</h1>

  <div className="hair-cuts">
    <div className="haircut-card">

      <div className="hair-type">
        <img src={hair1} alt="Hair Style 1" />
        <div className="overlay">
          <h2>Basic Hair Cut</h2>
          <p>Simple & Clean Look for Daily Style</p>
          <h3>Rs. 800 – 1,200</h3>
          <button onClick={() => addToCart({ id: 12, name: "Basic Hair Cut", price: 800 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair2} alt="Hair Style 2" />
        <div className="overlay">
          <h2>Layer Cut</h2>
          <p>Adds Volume & Soft Movement to Hair</p>
          <h3>1,500 – 2,500</h3>
          <button onClick={() => addToCart({ id: 13, name: "Layer Cut", price: 1500 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair3} alt="Hair Style 3" />
        <div className="overlay">
          <h2>Step Cut</h2>
          <p>Classic & Trendy Hair Style</p>
          <h3>Rs. 1,500 – 2,200</h3>
          <button onClick={() => addToCart({ id: 14, name: "Step Cut", price: 1500 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair4} alt="Hair Style 4" />
        <div className="overlay">
          <h2>Bob Cut</h2>
          <p>Modern & Stylish Short Hair Look</p>
          <h3>Rs. 2,000 – 3,000</h3>
          <button onClick={() => addToCart({ id: 15, name: "Bob Cut", price: 2000 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair5} alt="Hair Style 5" />
        <div className="overlay">
          <h2>Pixie Cut</h2>
          <p>Bold & Confident Short Hair Style</p>
          <h3>Rs. 2,500 – 3,500</h3>
          <button onClick={() => addToCart({ id: 16, name: "Pixie Cut", price: 2500 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair6} alt="Hair Style 6" />
        <div className="overlay">
          <h2>Bangs / Fringe</h2>
          <p>Enhance Your Face Shape Instantly</p>
          <h3>Rs. 700 – 1,200</h3>
          <button onClick={() => addToCart({ id: 17, name: "Bangs / Fringe", price: 700 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair7} alt="Hair Style 7" />
        <div className="overlay">
          <h2>V Cut / U Cut</h2>
          <p>Perfect Shape for Long Hair Lovers</p>
          <h3>Rs. 1,200 – 2,000</h3>
          <button onClick={() => addToCart({ id: 18, name: "V Cut / U Cut", price: 1200 })}>Book Now</button>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair8} alt="Hair Style 8" />
        <div className="overlay">
          <h2>Kids Hair Cut</h2>
          <p>Cute & Comfortable Styles for Kids</p>
          <h3>Rs. 500 – 800</h3>
          <button onClick={() => addToCart({ id: 19, name: "Kids Hair Cut", price: 500 })}>Book Now</button>
        </div>
      </div>

    </div>
  </div>
</div>
 <div className="service-section" data-aos="fade-up" id="service">
  <h1>Pamper Yourself with Our Professional Beauty Services</h1>
 <div className="service">
  <div className="service-card">
    <img src={manicure} alt="" />
    <h2>Manicure</h2>
    <p>Nail shaping, cuticle care, polish & hand massage</p>
    <h3>Rs. 800 – 1,200</h3>
    <button
      onClick={() => addToCart({ id: 20, name: "Manicure", price: 800 })}
    >Book Now</button>
  </div>
   <div className="service-card">
    <img src={pedicure} alt="" />
    <h2>Pedicure</h2>
    <p>Foot scrub, nail shaping, polish & relaxing massage</p>
    <h3>Rs. 1,000 – 1,500</h3>
    <button
      onClick={() => addToCart({ id: 21, name: "Pedicure", price: 1000 })}
    >Book Now</button>
  </div>
   <div className="service-card">
    <img src={waxing} alt="" />
    <h2>Waxing</h2>
    <p>Smooth & clean skin with professional waxing</p>
    <h3>Rs. 500 – 2,000</h3>
    <button
      onClick={() => addToCart({ id: 22, name: "Waxing", price: 500 })}
    >Book Now</button>
  </div>
   <div className="service-card">
    <img src={facial} alt="" />
    <h2>Facial</h2>
    <p>Deep cleansing, exfoliation & hydration for glowing skin</p>
    <h3>Rs. 1,500 – 3,000</h3>
    <button
      onClick={() => addToCart({ id: 23, name: "Facial", price: 1500 })}
    >Book Now</button>
  </div>
   <div className="service-card">
    <img src={hairSpa} alt="" />
    <h2>Hair Spa</h2>
    <p>Nourishing treatment for healthy, shiny hair</p>
    <h3>Rs. 1,500 – 3,000</h3>
    <button
      onClick={() => addToCart({ id: 24, name: "Hair Spa", price: 1500 })}
    >Book Now</button>
  </div>
   <div className="service-card">
    <img src={massage} alt="" />
    <h2>Massage</h2>
    <p>Relaxing body massage to relieve tension</p>
    <h3>Rs. 1,000 – 2,500</h3>
    <button
      onClick={() => addToCart({ id: 25, name: "Massage", price: 1000 })}
    >Book Now</button>
  </div>
  
 </div>
 
</div>

{cart.length > 0 && (
  <div className="cart-summary">
    <h2>Your Booking Summary</h2>

    {cart.map((item) => (
      <div key={item.id} className="cart-row">
        <span>{item.name}</span>

        <div className="qty-controls">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <span>Rs. {item.price * item.qty}</span>

        <button onClick={() => removeFromCart(item.id)}>✕</button>
      </div>
    ))}

    <hr />

    <h3>Total: Rs. {totalAmount}</h3>

    <a
      href={`https://wa.me/923412620272?text=${encodeURIComponent(
        `Hello LuxeGlow Beauty ✨\n\nBooking Details:\n${cart
          .map(
            (i) => `${i.name} × ${i.qty} = Rs.${i.price * i.qty}`
          )
          .join("\n")}\n\nTotal: Rs.${totalAmount}`
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      <button className="book-btn">
        Confirm Booking on WhatsApp
      </button>
    </a>
  </div>
)}

   <section className="contact-section" data-aos="fade-down" id="contact">
  <div className="contact-container">

    <div className="contact-right">
      <h2>Book Your Makeup</h2>
      <p>Get in touch to book your appointment today ✨</p>

      <form>
        <label>Your Name</label>
        <input
  type="text"
  placeholder="Enter your name"
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>
<label>Your Email</label>
<input
  type="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
/>

<textarea
  placeholder="Tell us about your event"
  value={formData.message}
  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
/>


      <button
  type="button"
  onClick={() => window.open(whatsappLink, "_blank")}
>
  Send Message
</button>


      </form>
    </div>

  </div>
</section>
   <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="logo">
            <h1>LuxeGlow Beauty</h1>
          </div>
          <p>
            Professional Bridal, Party & Event Makeup  
            using premium products & expert artistry to
            enhance your natural glow.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Bridal Makeup</li>
            <li>Party Makeup</li>
            <li>Engagement Look</li>
            <li>Photoshoot Makeup</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <span>Karachi, Pakistan</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+92 341 2620272</span>
            </li>
            <li>
              <FaEnvelope />
              <span>zifrafirdous372@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Zifra Beauty | All Rights Reserved</p>

        <div className="social-icons">
          <span><FaInstagram /></span>
          <span><FaFacebookF /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>
    </footer>
 

    </div>
  );
}

export default MakeupUi;
