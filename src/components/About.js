import UserContext from "../utils/UserContext";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-r from-green-500 p-8">

                <h1 className="text-4xl font-bold text-center mb-6">Welcome to the About Page</h1>
                <div className="font-semibold text-xl mb-4">
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h2 className="text-2xl">
                                Hi 👋
                            </h2>
                        )}
                    </UserContext.Consumer>
                </div>


                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
                    <h3 className="text-3xl font-semibold mb-3">About Me</h3>
                    <p className="text-lg mb-4">
                        Hi, I'm <strong>Taif</strong>, an aspiring <span className="text-blue-500">Fullstack Developer</span> 👨‍💻
                        with a passion for building both frontend and backend solutions. I have experience and skills in:
                    </p>
                    <ul className="list-disc list-inside text-lg mb-4">
                        <li>Python</li>
                        <li>JavaScript & React</li>
                        <li>Agile Methodology</li>
                        <li>HTML, CSS/SCSS</li>
                        <li>Figma</li>
                        <li>C programming</li>
                        <li>Strong Communication Skills</li>
                    </ul>
                    <p className="text-lg">
                        I enjoy creating web applications that are visually appealing, efficient, and user-friendly. I also love exploring new technologies and improving my skills continuously.
                    </p>
                </div>


                <div className="mt-8 text-center">
                    <iframe
                        src="https://giphy.com/embed/QNFhOolVeCzPQ2Mx85"
                        width="480"
                        height="269"
                        frameBorder="0"
                        className="giphy-embed mx-auto"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-8 text-center text-lg">
                    <p>
                        Feel free to connect on:
                        <span className="mx-2"></span>
                        <a
                            href="https://github.com/taif-k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href="mailto:taifk817@gmail.com"
                            className="text-red-500 hover:underline"
                        >
                            Gmail
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href="https://www.linkedin.com/in/taif-k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline"
                        >
                            LinkedIn
                        </a>
                        ! 📱
                    </p>
                </div>
            </div>
        );
    }
}

export default About;