import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentTab, setCurrentTab] = useState(""); // Initialize currentTab to empty string

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>Project Experiences</h2>
        <div className="navigators">
          <button onClick={() => setCurrentTab("previous")} className={currentTab === "previous" ? "active" : ""}>My Company Projects</button>
          <button onClick={() => setCurrentTab("next")} className={currentTab === "next" ? "active" : ""}>My Own Projects</button>
        </div>
        <div className="projects-grid">
          <div className={`project ${currentTab === "previous" ? "show" : "hide"}`}>
            <img src="https://almuerzodenegocios.com/wp-content/uploads/2012/10/mondelez-international.jpg" alt="Mondelenz International Food Service" className="project-image" />
            <div className="project-info">
              <h3>Mondelenz International Food Service</h3>
              <p>
                The project on high-level scope was to revolutionize the website operations of the Mondelēz International by
                developing a comprehensive digital platform.This platform integrates various aspects of website operations, design
                and develop a state-of-the-art, user-centric website for Mondelēz International's food service division.
              </p>
              <div className="project-buttons">
                <a href="https://www.mondelezinternationalfoodservice.com/" target="_blank" rel="noopener noreferrer" className="btn">Official Website</a>
              </div>
            </div>
          </div>
          <div className={`project ${currentTab === "previous" ? "show" : "hide"}`}>
            <img src="https://www.growwithicon.com/wp-content/uploads/2023/05/MyCorcoran.png" alt="MyCorcoran" className="project-image" />
            <div className="project-info">
              <h3>MyCorcoran</h3>
              <p>
                The MyCorcoran project is a comprehensive digital platform designed to enhance the real estate experience for clients and agents associated with Corcoran Group, a leading real estate brokerage.
                The platform integrates various tools and features to streamline real estate transactions, improve client-agent communication, and provide a seamless user experience.
              </p>
              <div className="project-buttons">
                <a href="https://www.mycorcoran.com/" target="_blank" rel="noopener noreferrer" className="btn">Official Website</a>
              </div>
            </div>
          </div>
          <div className={`project ${currentTab === "next" ? "show" : "hide"}`}>
            <img src="https://user-images.githubusercontent.com/88809610/159985436-6faa2d49-4d67-4a6c-9b54-5b961b862dfa.png" alt="ToDo" className="project-image" />
            <div className="project-info">
              <h3>ToDo App</h3>
              <p>
              The Simple Todo App is a web application designed to help users manage their tasks efficiently. 
              Built with React, it provides a clean and intuitive interface for adding, viewing, and removing tasks. 
              Whether you need to organize your daily schedule, keep track of project tasks, or jot down reminders, this app offers a straightforward solution for task management.
              </p>
              <div className="project-buttons">
                <a href="https://vyshnavikamineni.github.io/todo-app/" target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
                <a href="https://github.com/VyshnaviKamineni/todo-app" target="_blank" rel="noopener noreferrer" className="btn">Repo</a>
              </div>
            </div>
          </div>
          
          <div className={`project ${currentTab === "next" ? "show" : "hide"}`}>
            <img src="https://t4.ftcdn.net/jpg/00/75/12/91/360_F_75129190_f4MGrrWi8zwEUNSSZ440NStMeriRcHA7.jpg" alt="Before & After" className="project-image" />
            <div className="project-info">
              <h3>Information Update</h3>
              <p>
                This React application showcases the dynamic handling of user information by toggling between default values and updated values. 
                It offers an interactive interface where users can see default information and update it with the click of a button.
                Additionally, the app provides input fields for users to enter new values dynamically, enhancing user engagement and customization.
              </p>
              <div className="project-buttons">
                <a href="https://vyshnavikamineni.github.io/before-and-after/" target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
                <a href="https://github.com/VyshnaviKamineni/before-and-after" target="_blank" rel="noopener noreferrer" className="btn">Repo</a>
              </div>
            </div>
          </div>

          <div className={`project ${currentTab === "next" ? "show" : "hide"}`}>
            <img src="https://wallpaperaccess.com/full/5652018.jpg" alt="Portfolio" className="project-image" />
            <div className="project-info">
              <h3>My Portfolio</h3>
              <p>
                My Portfolio is a comprehensive web application designed to showcase my professional and personal projects.
                This project leverages the power of React to provide a dynamic and interactive user experience, allowing visitors to explore my work,
                learn about my skills, and contact me for opportunities. The portfolio includes sections for company-related projects and personal projects, each with detailed descriptions, images, and links.
              </p>
              <div className="project-buttons">
                <a href="https://vyshnavikamineni.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="btn">Demo</a>
                <a href="https://github.com/VyshnaviKamineni/portfolio" target="_blank" rel="noopener noreferrer" className="btn">Repo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
