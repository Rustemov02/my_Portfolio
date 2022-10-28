import React from "react";
import "./servicesStyle.css";
import '../media/media-1.css'
function Services(props) {
  return (
    <div className="servicesPage">
      <h1 style={{ color: props.color }}> Services </h1>
      <div className="cubes">
        <div className="cube">
          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color
              }}
              class="fa-brands fa-html5"
            ></i>
            <h2 style={{ color: props.textColor }}> HTML5 </h2>
            <p style={{ color: props.textColor }}>
              It is a markup language for the web that defines the structure of
              web pages. It is one of the most basic building blocks of every
              website. HTML part of the website will be made first
            </p>
          </div>

          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color,
                fontSize: "30px",
                marginBottom: "10px"
              }}
              class="fa-brands fa-css3"
            ></i>
            <h2 style={{ color: props.textColor }}> CSS3 </h2>
            <p style={{ color: props.textColor }}>
              It is a programming language that, along with HTML, is used to
              describe the style of a website. I will style the site made with
              HTML using CSS
            </p>
          </div>

          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color,
                fontSize: "30px",
                marginBottom: "10px"
              }}
              class="fa-brands fa-js"
            ></i>
            <h2 style={{ color: props.textColor }}> JavaScript </h2>
            <p style={{ color: props.textColor }}>
              I will make the website more dynamic using JavaScript and it will
              be better for users and it will make their job easier
            </p>
          </div>
        </div>

        <div className="cube">
          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color,
                fontSize: "30px",
                marginBottom: "10px"
              }}
              class="fa-brands fa-react "
            ></i>
            <h2 style={{ color: props.textColor }}> ReactJS </h2>
            <p style={{ color: props.textColor }}>
              ReactJS is a library of JavaScript. Using it, we can use our sites
              more extensively. this site you see is made with ReactJS
            </p>
          </div>

          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color,
                fontSize: "30px",
                marginBottom: "10px"
              }}
              class="fa-solid fa-reply"
            ></i>
            <h2 style={{ color: props.textColor }}> Responsive Design </h2>
            <p style={{ color: props.textColor }}>
              A site made with a responsive design allows users to use it for
              both desktop, tablet and mobile devices without any difficulty.
            </p>
          </div>

          <div className="box" style={{ borderColor: props.color }}>
            <i
              style={{
                color: props.color,
                fontSize: "30px",
                marginBottom: "10px"
              }}
              class="fa-solid fa-database"
            ></i>
            <h2 style={{ color: props.textColor }}> Rest APİ </h2>
            <p style={{ color: props.textColor }}>
              When using the REST API, it is communicated using HTTP verbs,
              which are part of the page transfer process of web browsers.We use
              this and other similar technologies on our sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
