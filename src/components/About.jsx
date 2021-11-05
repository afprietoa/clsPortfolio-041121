import React from "react";
import "../styles/about.css"
import AboutStyle from "../styles/AboutStyles";
import { Avatar } from "../styles/AboutStyles";
import styled from "styled-components";

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
`;


const About = () => {
    return (
        <AboutStyle>
            <div className="About-container">
                <Avatar className="About-avatar">
                    <figure>
                        <img src="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png" alt="Mi Avatar"/>
                    </figure>
                </Avatar>
                <div className="About-name">
                    <AboutH2>Andres Prieto</AboutH2>
                </div>
                <div className="About-profession">
                    <p>programmer - Academia Geek</p>
                </div>
                <div className="About-description">
                   <p>Bogotá, Colombia</p>
                </div>
                <div className="About-social">
                     Contact
                </div>
            </div>
        </AboutStyle>
    )
}
export default About
