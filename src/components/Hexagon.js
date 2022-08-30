import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import htmlIcon from "../images/htmlIcon.png";
import cssIcon from "../images/cssIcon.png";
import jsIcon from "../images/jsIcon.png";
import reactIcon from "../images/reactIcon.png";

// ------------- WIP -------------
// every 10 seconds, choose a random hexagon, splice a pic from randomPicArr, set it to the img src, play its 10s animation then return it

export default function Hexagon() {
  let randomPicArr = [htmlIcon, cssIcon, jsIcon, reactIcon];

  let randomNum = Math.floor(Math.random() * 4);

  const [Pic1, setPic1] = useState([]);
  const [Pic2, setPic2] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPic = randomPicArr.splice(randomNum, 1);
      setPic1(randomPic);
      setPic2(randomPic);
      console.log(randomPicArr);
      randomPicArr.push(randomPic);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HexagonBorder1 />
      <Hexagon1>
        <img src={Pic1} alt="programming language icons fading in and out" />
      </Hexagon1>
      <HexagonBorder2 />
      <Hexagon2>
        <img src={Pic2} alt="programming language icons fading in and out" />
      </Hexagon2>
    </>
  );
}

const fade = keyframes`  
     0% {
      opacity:0;
    }

    50% {
         opacity:1;
    }
      100% {
        opacity:0;
    }`;

const Hexagon1 = styled.div`
  animation: ${fade} ease 14s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  top: 204px;
  right: 208px;
  width: 100px;
  height: 100px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  contain: content;
`;

const HexagonBorder1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  top: 200px;
  right: 204px;
  width: 108px;
  height: 108px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const Hexagon2 = styled.div`
  animation: ${fade} ease 14s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  top: 204px;
  right: 104px;
  width: 100px;
  height: 100px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  contain: content;
`;

const HexagonBorder2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  top: 200px;
  right: 100px;
  width: 108px;
  height: 108px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;
