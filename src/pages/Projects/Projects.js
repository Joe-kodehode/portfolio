import ProjectsCard from "../../components/ProjectsCard";
import MainContainer from "../../components/MainContainer";
import { useEffect } from "react";

export default function Projects({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "blue" });
  }, []);

  return (
    <>
      <MainContainer>
        <ProjectsCard />
      </MainContainer>
    </>
  );
}
