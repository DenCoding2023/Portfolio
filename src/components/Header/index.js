import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Dennis Luciano</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>About me</h2>
          <p>
          My name is Dennis Luciano, I worked as a Spanish teacher for the last 20 years. 
          It has been a passion to work with students and see them grow. Teaching from College, 
          High School and Middle School has given me an appreciation on how technology influences 
          and impacts our lives. I have a masters of technology education which has given me the 
          drive to pursue a new career in computer web development. On a personal note, my favorite 
          thing to do is to travel across the great country of the United States. Traveling with my 
          eight year old son has been so rewarding as he gets to see different sites and 
          cultures across the country. Traveling in our family RV has given me a new appreciation 
          of lifestyle design. Traveling has given me the desire to work remotely. 
          This would allow me and my family to travel more to see different sites in our great nation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
