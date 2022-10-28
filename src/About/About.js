import React from "react";
import "./aboutStyle.css";
import { jsPDF } from "jspdf";
import cvimg from '../images/CV.png'
import '../media/media-1.css'

function About(props) {
  const getPDF = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(cvimg, "PNG", 65, 20, 400, 400);
    doc.save("cv.pdf"); 
  };

  return (
    <div className="container">
      <div className="aboutPage">
        <h1 style={{ color: props.color }}> About Me </h1>

        <div className="header">
          <h2 style={{ color: props.textColor }}>
            I'm Bunyamin Rustamov and Front End Developer
          </h2>

          <p style={{ color: props.textColor }}>
            I know HTML5/CSS3/JavaScript well and I like to explore and learn new
            things and <br />
            I'm quick learner of new languages and technologies And I have
            Analytic mind and <br />
            I'm open to acquire new knowledge in different fields,ability to work
            on multiple tasks at the same time.
            <br />I can work in a team and overtime
          </p>
        </div>

        <div className="main">
          <div className="status" style={{ color: props.textColor }}>
            <div className="status_1">
              <p> 
                Birtday : <span> 8 Avgust 2002 </span>{" "}
              </p>
              <p> 
                Website : <span> null </span>{" "}
              </p>
              <p> 
                Degree : <span> 8 Avgust 2002 </span>{" "}
              </p>
              <p> 
                City : <span> Azerbaijan , Baku </span>{" "}
              </p>
            </div>
            <div className="status_2" style={{ color: props.textColor }}>
              <p> 
                Age : <span> 20 </span>{" "}
              </p>
              <p> 
                Email : <span> bunyamin2002@Mail.ru </span>{" "}
              </p>
              <p> 
                Phone : <span> +994 55 778 33 24 </span>{" "}
              </p>
              <p> 
                Freelance : <span> Available </span>{" "}
              </p>
            </div> 
          </div>
 
          <div className="skills" style={{ color: props.textColor }}>
            <div className="skill">
              <div className="degree"> 
                <span> HTML </span> <span> 95% </span>  
              </div>
              <div className="point"> 
                <div style={{ width: "95%", backgroundColor: props.color }}> 
                </div> 
              </div>
            </div>
            <div className="skill">
              <div className="degree"> 
                <span> CSS </span> <span> 75% </span> 
              </div>
              <div className="point"> 
                <div style={{ width: "75%", backgroundColor: props.color }}> 
                </div> 
              </div>
            </div>
            <div className="skill">
              <div className="degree"> 
                <span> JavaScript </span> <span> 60% </span> 
              </div>
              <div className="point"> 
                <div style={{ width: "60%", backgroundColor: props.color }}> 
                </div> 
              </div>
            </div>
            <div className="skill">
              <div className="degree"> 
                <span> React </span> <span> 34% </span> 
              </div>
              <div className="point"> 
                <div style={{ width: "34%", backgroundColor: props.color }}> 
                </div> 
              </div>
            </div>
          </div>

          <div className="buttons">
            <button
              className="button"
              onClick={getPDF}
              style={{ backgroundColor: props.color }}
            >
              Download CV
            </button>
            <button className="button" style={{ backgroundColor: props.color }}>
              <a
                href="https://github.com/Rustemov02?tab=repositories"
                target="_blank"
              >
                my GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
