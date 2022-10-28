import React from "react";
import './homeStyle.css'
import myImage from '../images/myImage.jpeg'
import '../media/media-1.css'
function Home(props) {
  return (
    <div className="container">
      <div className="aboutMe">
        <h1 style={{ color: props.textColor }}>
          Hello , my name is
          <span className="name" style={{ color: props.color }}>
            Bunyamin
          </span>
        </h1>
        <h2 style={{ color: props.textColor }}>
          I'm a
          <span className="developer" style={{ color: props.color }}>
            Frontend Developer
          </span>
        </h2>
        <p style={{ color: props.textColor }}>
          I'm a web Designer with learning for over 1 year.
          <br /> My expertiseis to create website and responsive website design
          and many more...
        </p>
        <img
          src={myImage}
          className="image"
          style={{
            borderColor: props.color
          }}
        />
        <button
          className="aboutBtn changerColor"
          style={{ backgroundColor: props.color }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bunyamin-rustemov-7a9359224/"
          >
            More About Me
          </a>
        </button>
      </div>
    </div>
  )
}
export default Home