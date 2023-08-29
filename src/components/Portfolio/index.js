import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/Note-taker.jpg";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import weatherPImage from  "../../assets/small/weatherP.jpg";
import weatherImage from "../../assets/small/weather-site.jpg";
import ecomercePImages from "../../assets/small/EcomerceP.jpg";
import passworG from "../../assets/small/passworG.jpg";
import refractoring from "../../assets/small/refractoring.jpg";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Sample Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dencoding2023.github.io/Weather-Dashboard//">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather-Dashboard</h4>
              <p>
              This is a website that lets you know the weather in your area. 
              You are able to get the temperature, humidity and weather description.
              Type the name of a mayor city in the USA and watch the weather!</p>
              <p> GitHub: https://github.com/DenCoding2023/Weather-Dashboard.git {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dencoding2023.github.io/naturestrails/">
                {" "}
                <img
                  src={weatherPImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherP"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Naturestrails</h4>
              <p>
              Nature Trails is a website where you can enter a location and it will return the most desired trails and conditions for those trails.
              Learning to work as a team is crucial in software development because it is a complex and 
              multi-faceted process that requires the collaboration of multiple professionals with different skill sets. 
              Furthermore, software development is an iterative process and when people work together they can 
              bring their diverse perspectives and expertise to the table, which can lead to more innovative ideas and better solutions.</p>
              <p> GitHub: https://github.com/DenCoding2023/naturestrails.git{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/DenCoding2023/E-C-Backend.git">
                {" "}
                <img
                  src={ecomercePImages}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Ecomerce Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Ecomerce Project</h4>
              <p>
              The e-commerce industry is one of the largesst section in our economy. 
              As a new develper is important to familiarize myslef with these concepts.
              By working on this project, I gain hands-on experience with Express.js, 
              Sequelize, and MySQL, which are highly sought after in the industry. 
              I am able to create a framwork to add, update, delte items in the inverntory.</p>
              <p> GitHub: https://github.com/DenCoding2023/E-C-Backend.git{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://class-note-taker-5939c5a02e4a.herokuapp.com/notes">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.</p>
                <p>GitHub: https://github.com/DenCoding2023/Class-Note-Taker.git{" "}
                              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dencoding2023.github.io/Password-Generator/">
                {" "}
                <img
                  src={passworG}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              It's a password generator program that gives the user options of how to create 
              their password more securely. The user will have several prompts to provide different 
              levels of security. The password will be displayed at the end.</p>
             <p> GitHub: https://github.com/DenCoding2023/Password-Generator.git{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dencoding2023.github.io/Code-Refractory-Challenge/">
                {" "}
                <img
                  src={refractoring}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Refactoring"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Refractoring</h4>
              <p>
              This was a “Refractory Challenge”. The goal was to modify the webpage to meet the accessibility standards. </p>
              <p> GitHub: https://github.com/DenCoding2023/Code-Refractory-Challenge.git{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
