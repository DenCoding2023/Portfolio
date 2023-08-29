// About page//
import React from "react";
import profileImage from "../../assets/large/Profile/imageD.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img
              src={profileImage}
              style={{
                width: "100%",
                borderRadius: "50%", // Make the image circular
                maxWidth: "300px", // Limit the maximum width for responsiveness
                display: "block",
                margin: "15px", // Center the image horizontally
              }}
              alt="profile"
            />
          </div>
          <p>
            Welcome to My Porfolio page. Her you will find some infomration about me.
          </p>
          <p>   My name is Dennis Luciano, I worked as a Spanish teacher for the last 20 years.
          It has been a passion to work with students and see them grow. Teaching from College,
          High School and Middle School has given me an appreciation on how technology influences
          and impacts our lives. I have a masters of technology education which has given me the
          drive to pursue a new career in computer web development. On a personal note, my favorite
          thing to do is to travel across the great country of the United States. Traveling with my
          eight year old son has been so rewarding as he gets to see different sites and
          cultures across the country. Traveling in our family RV has given me a new appreciation
          of lifestyle design. Traveling has given me the desire to work remotely and embark on a developer career.
          This would allow me and my family to travel more to see different sites in our great nation
</p>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default About;
