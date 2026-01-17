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
import hairSpa from "./assets/hair spa.jpg";
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
const product =[
  {
    id:1, tittle:"Makeup Looks for Every Occasion"
  },
  {
    id:2, tittle:"Skin Care & Facial Products"
  },
  {
    id:3, tittle:"Professional Hair Cuts for Every Face Shape & Style"
  },
  {
    id:4, tittle:"Pamper Yourself with Our Professional Beauty Services"
  }
]
const [search ,setSearch] =useState("")

const filterProducts = product.filter((item) => {
  return item.tittle.toLowerCase().includes(search.toLowerCase());
});

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
        <button>Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={Party} alt="" />
        <h2>Party Makeup</h2>
        <p>Bold or nude lips.</p>
        <h3> Rs. 6,000 – 10,000</h3>
        <button>Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={soft} alt="" />
        <h2>Soft Glam Makeup</h2>
        <p>Everyday elegant look.</p>
        <h3> Rs. 5,000 – 8,000</h3>
        <button>Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={natural} alt="" />
        <h2>Natural / No Makeup Look</h2>
        <p>Daily wear look.</p>
        <h3> Rs. 3,000 – 5,000</h3>
        <button>Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={photoshoot} alt="" />
        <h2>Photoshoot Makeup</h2>
        <p>Camera-friendly look.</p>
        <h3> Rs. 8,000 – 15,000</h3>
        <button>Add to Cart</button>
       </div>
       <div className="makeup">
        <img src={nikkah} alt="" />
        <h2>Nikkah Makeup Look</h2>
        <p>Pink / nude shades.</p>
        <h3> Rs. 15,000 – 25,000</h3>
        <button>Add to Cart</button>
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
          <button>Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare2} alt="" />
          <h2>Toner</h2>
          <p>Refreshing Skin Toner</p>
          <h3>Rs. 1,000 – 2,000</h3>
          <button>Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare3} alt="" />
          <h2>Sunscreen</h2>
          <p>SPF 50+ Sun Protection</p>
          <h3>Rs. 1,800 – 3,500</h3>
          <button>Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare4} alt="" />
          <h2>Moisturizer</h2>
          <p>Hydrating Moisturizer</p>
          <h3>Rs. 1,500 – 3,000</h3>
          <button>Buy Now</button>
        </div>
        <div className="skincare">
          <img src={skincare5} alt="" />
          <h2>Eye Cream</h2>
          <p>Anti-Aging Eye Cream</p>
          <h3>Rs. 2,000 – 4,500</h3>
          <button>Buy Now</button>
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
        </div>
      </div>

      <div className="hair-type">
        <img src={hair2} alt="Hair Style 2" />
        <div className="overlay">
          <h2>Layer Cut</h2>
          <p>Adds Volume & Soft Movement to Hair</p>
          <h3>1,500 – 2,500</h3>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair3} alt="Hair Style 3" />
        <div className="overlay">
          <h2>Step Cut</h2>
          <p>Classic & Trendy Hair Style</p>
          <h3>Rs. 1,500 – 2,200</h3>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair4} alt="Hair Style 4" />
        <div className="overlay">
          <h2>Bob Cut</h2>
          <p>Modern & Stylish Short Hair Look</p>
          <h3>Rs. 2,000 – 3,000</h3>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair5} alt="Hair Style 5" />
        <div className="overlay">
          <h2>Pixie Cut</h2>
          <p>Bold & Confident Short Hair Style</p>
          <h3>Rs. 2,500 – 3,500</h3>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair6} alt="Hair Style 6" />
        <div className="overlay">
          <h2>Bangs / Fringe</h2>
          <p>Enhance Your Face Shape Instantly</p>
          <h3>Rs. 700 – 1,200</h3>
        </div>
      </div>

      <div className="hair-type taller">
        <img src={hair7} alt="Hair Style 7" />
        <div className="overlay">
          <h2>V Cut / U Cut</h2>
          <p>Perfect Shape for Long Hair Lovers</p>
          <h3>Rs. 1,200 – 2,000</h3>
        </div>
      </div>

      <div className="hair-type">
        <img src={hair8} alt="Hair Style 8" />
        <div className="overlay">
          <h2>Kids Hair Cut</h2>
          <p>Cute & Comfortable Styles for Kids</p>
          <h3>Rs. 500 – 800</h3>
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
    <button>Book Now</button>
  </div>
   <div className="service-card">
    <img src={pedicure} alt="" />
    <h2>Pedicure</h2>
    <p>Foot scrub, nail shaping, polish & relaxing massage</p>
    <h3>Rs. 1,000 – 1,500</h3>
    <button>Book Now</button>
  </div>
   <div className="service-card">
    <img src={waxing} alt="" />
    <h2>Waxing</h2>
    <p>Smooth & clean skin with professional waxing</p>
    <h3>Rs. 500 – 2,000</h3>
    <button>Book Now</button>
  </div>
   <div className="service-card">
    <img src={facial} alt="" />
    <h2>Facial</h2>
    <p>Deep cleansing, exfoliation & hydration for glowing skin</p>
    <h3>Rs. 1,500 – 3,000</h3>
    <button>Book Now</button>
  </div>
   <div className="service-card">
    <img src={hairSpa} alt="" />
    <h2>Hair Spa</h2>
    <p>Nourishing treatment for healthy, shiny hair</p>
    <h3>Rs. 1,500 – 3,000</h3>
    <button>Book Now</button>
  </div>
   <div className="service-card">
    <img src={massage} alt="" />
    <h2>Massage</h2>
    <p>Relaxing body massage to relieve tension</p>
    <h3>Rs. 1,000 – 2,500</h3>
    <button>Book Now</button>
  </div>
  
 </div>
 
</div>
   <section className="contact-section" data-aos="fade-down" id="contact">
  <div className="contact-container">

    <div className="contact-right">
      <h2>Book Your Makeup</h2>
      <p>Get in touch to book your appointment today ✨</p>

      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Your Message</label>
        <textarea placeholder="Tell us about your event"></textarea>

        <button type="submit">Send Message</button>
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
