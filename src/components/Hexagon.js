import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import htmlIcon from "../images/htmlIcon.png";
import cssIcon from "../images/cssIcon.png";
import jsIcon from "../images/jsIcon.png";
import reactIcon from "../images/reactIcon.png";

// ------------- WIP -------------
// every 10 seconds, choose a random hexagon, splice a pic from randomPicArr, set it to the img src, play its 10s animation then return it

export default function Hexagon() {
  let picArr1 = [htmlIcon, cssIcon, jsIcon, reactIcon];
  let picArr2 = [cssIcon, jsIcon, reactIcon, htmlIcon];

  const [pic1, setPic1] = useState(0);
  const [pic2, setPic2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPic1((prev) => (prev + 1) % picArr1.length);
      setTimeout(() => setPic2((prev) => (prev + 1) % picArr2.length), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HexagonBorder1 />
      <Hexagon1>
        <img
          src={picArr1[pic1]}
          alt="programming language icons fading in and out"
        />
      </Hexagon1>
      <HexagonBorder2 />
      <Hexagon2>
        <img
          src={picArr2[pic2]}
          alt="programming language icons fading in and out"
        />
      </Hexagon2>
    </>
  );
}

const fade1 = keyframes`  
     0% {
      opacity:0;
    }

    50% {
         opacity:1;
    }
      100% {
        opacity:0;
    }`;

const fade2 = keyframes`  
0% {
 opacity:1;
}

50% {
    opacity:0;
}
 100% {
   opacity:1;
}`;

const Hexagon1 = styled.div`
  animation: ${fade1} ease 3s infinite;
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
  animation: 3s ${fade2} ease infinite;
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
