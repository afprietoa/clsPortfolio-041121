import styled from "styled-components";

const AboutStyle = styled.div`
    text-align: center;
`;
const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;
export const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
`;
const AboutName = styled.div`
    text-align: center;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`;
const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

export default AboutStyle; 
export const Avatar = AboutAvatar;

