import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footercontainer">
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Foodmenu</h1> <h2>Contact</h2>
          <address>
            <a href="https://maps.google.com/maps?q=28.5628892%2C77.2607355&z=17&hl=en" target="_blank" >
              S-18 Privat Colony Sri Niwas Puri New Delhi 110065
            </a>
            <br /> <br />
            <a class="footer__btn" href="mailto:praveen21@navgurukul.org">
              Email Us <br />: praveen21@navgurukul.org 
            </a>
          </address>
          <br />
          <phone>
            <h3>Phone No</h3>: <a href="https://wa.me/9599334028" target="_blank" rel="noopener noreferrer">9599334028</a>
          </phone>
        </div>
        <div class="nav__item">
          <h2 class="nav__title">Skills</h2>
          <div>
            <a>React JS</a>
          </div>
          <div>
            <a>Java Script</a>
          </div>
          <div>
            <a>Mysql</a>
          </div>
          <div>
            <a>Mongo DB</a>
          </div>
        </div>
        <div class="nav__item nav__item--extra">
          <h2 class="nav__title">Technology</h2>
          <div>
            <a>Hardware Design</a>
          </div>
          <div>
            <a>Software Design</a>
          </div>
          <div>
            <a>Digital Signage</a>
          </div>
          <div>
            <a>Automation</a>
          </div>
          <div>
            <a>Artificial Inteldivgence</a>
          </div>
        </div>
        <div class="nav__item">
          <h2 class="nav__title">Legal</h2>
          <div>
            <a>Privacy Policy</a>
          </div>
          <div>
            <a>Terms of Use</a>
          </div>
          <div>
            <a>Sitemap</a>
          </div>
        </div>
        <div class="legal">
          <p>
            &copy; 2023 <a href="/">Foodmenu</a>. All rights reserved.
          </p>
          <div class="legal__links">
            <span>
              Made with <span class="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
