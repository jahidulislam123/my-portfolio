import React from "react";
import "./Experience.css";
import image33 from "../../assets/Home/images/jjjj.png";
import { Button, ButtonGroup, Carousel } from "react-bootstrap";
const Experience = () => {
  return (
    <div className="div1">
      <div className="mamama">
        <h2>Experiences</h2>
        <section class="experience">
          <div class="experience-card">
            <div class="experience-item">
              <div class="experience-marker"></div>
              <div class="experience-details">
                <h2>ShopTopShopping</h2>
                <p>Job Title: Backend Developer</p>
                <p>Duration: January 2020 - December 2021</p>
                <p>
                  Description: This is a software development company located in
                  Bhopal Madhaya Pradesh .
                </p>
              </div>
            </div>
          </div>
          <div class="experience-card">
            <div class="experience-item">
              <div class="experience-marker"></div>
              <div class="experience-details">
                <h2>SoftItcare</h2>
                <p>Job Title: Full Stack Developer</p>
                <p>Duration: January 2023 </p>
                <p>
                  Description: This is software development company located in
                  Bashundara Dhaka.
                </p>
              </div>
            </div>
          </div>

          <div class="experience-card">
            <div class="experience-item">
              <div class="experience-marker"></div>
              <div class="experience-details">
                <h2>It Ishkol</h2>
                <p>Job Title: Frontent developer</p>
                <p>Duration: July 2023 - Present</p>
                <p>
                  Description:This is a emerging company located in Cumilla .
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divva">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/drive/folders/1n4mlXD2fKe05NlshCHg4lkXUbSPdQlYa?usp=sharing"
              >
                Certificate 1
              </a>
            </Button>
            <Button variant="secondary" className="mx-5 text-white">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/drive/folders/1n4mlXD2fKe05NlshCHg4lkXUbSPdQlYa?usp=sharing"
              >
                Certificate 2
              </a>
            </Button>
            <Button variant="secondary">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/drive/folders/1n4mlXD2fKe05NlshCHg4lkXUbSPdQlYa?usp=sharing"
              >
                Certificate 3
              </a>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Experience;
